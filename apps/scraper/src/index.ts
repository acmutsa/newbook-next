import puppeteer, { Keyboard, Page, TimeoutError } from "puppeteer";
import { Course } from "./types";

const main = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  // Navigate the page to a URL.
  await page.goto("https://bluebook.utsa.edu");

  // Get list of subject options
  const optionList = (
    await page.$$eval(
      "#ctl00_MainContentSearchQuery_searchCriteriaEntry_CourseSubjectCombo_OptionList > li",
      (options) => {
        return options.map((el) => el.innerText);
      }
    )
  ).slice(1);

  // Iterate through subject options

  for (const option of optionList) {
    const optionInput = await page.$(
      "input#ctl00_MainContentSearchQuery_searchCriteriaEntry_CourseSubjectCombo_TextBox"
    );

    if (!optionInput) {
      console.error("Can't find option input!");
      return;
    }

    await optionInput?.evaluate((el, option) => (el.value = option), option);

    await optionInput.focus();
    await page.keyboard.press("Enter");

    //click search button
    const searchBtn = await page.$(
      "a#ctl00_MainContentSearchQuery_searchCriteriaEntry_SearchBtn"
    );

    if (!searchBtn) {
      console.error("Failed to find search button!");
    }
    await searchBtn!.focus();
    await searchBtn!.click();

    await page.waitForNavigation();

    //Check for no content
    const noContentText = await page.$(
      "#ctl00_MainContent_mainContent1_NoContentHeaderPnl"
    );

    if (noContentText) {
      continue;
    }

    while (true) {
      const nextBtn = await page.$(
        '#ctl00_MainContent_mainContent1_PagerImgBtn_NextTOP:not([disabled="disabled"])'
      );

      if (!nextBtn) {
        break;
      }

      const tablePageCourseList = await page.$$eval(
        "table.infoTable tbody tr",
        (list) => {
          return list;
        }
      );

      const courseList: Course[] = await Promise.all(
        tablePageCourseList.map(async (table, idx) => ({
          sem: await page.$eval(
            `span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_SemYrLbl`,
            (el) => el.innerText
          ),
          crn: Number.parseInt(
            await page.$eval(
              `span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_crnlbl`,
              (el) => el.innerText
            )
          ),
          section: await page.$eval(
            `span#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_CourseLbl`,
            (el) => el.innerText
          ),
          title: await page.$eval(
            `a#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_TitleLnkBtn`,
            (el) => el.innerText
          ),
          instructor: await page.$eval(
            `a#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_InstructorLnkBtn`,
            (el) => el.innerText
          ),
          textbook: await page.$eval(
            `a#ctl00_MainContent_mainContent1_MainContentAccordion_Pane_${idx}_header_TextBookLnkBtn`,
            (el) => el.innerText
          ),
        }))
      );

      console.dir(courseList.map((course) => course.crn));

      await nextBtn.click();
      await page.waitForNavigation();
    }
  }

  await browser.close();
};

main();
