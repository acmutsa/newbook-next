import { units } from "./config";
import { JSDOM } from "jsdom";
import { db } from "db";
import { advisors as advisorsTable } from "db/schema";

interface Advisor {
	name: string;
	email: string;
	units: string[];
	imageUrl: string;
}

async function main() {
	const advisors: { [key: string]: Advisor } = {};

	for (const unit of units) {
		console.log(`Scraping ${unit.unitName}...`);

		const req = await fetch(unit.unitUrl);
		const raw_html = await req.text();

		const dom = new JSDOM(raw_html);
		const document = dom.window.document;

		const people_els = document.querySelectorAll(
			`[data-columns="2"] [itemtype="http://schema.org/Person"]`,
		);

		for (const el of people_els) {
			const role = el.querySelector(`[itemprop="jobTitle"]`)?.textContent;

			if (role !== "Academic Advisor") continue;

			const name = el.querySelector(`[itemprop="name"]`)?.textContent;
			const email = el.querySelector(`[itemprop="email"]`)?.textContent;
			const image = el
				.querySelector(".staffPicture")
				?.getAttribute("src")
				?.replace("..", "https://www.utsa.edu/advising");

			if (!name || !email || !image) {
				console.log(
					"Skipped advisor due to missing data. See the following:",
				);
				console.log("missing data: ", name, email, image);
				continue;
			}

			const key = email.toLowerCase();

			if (!advisors[key]) {
				advisors[key] = {
					name: name,
					email: email,
					units: [unit.unitName.toLowerCase()],
					imageUrl: image,
				};
			} else {
				advisors[key].units.push(unit.unitName.toLowerCase());
			}
		}

		console.log("Done ✅");
	}
	for (const [key, advisor] of Object.entries(advisors)) {
		console.log(`Writing ${advisor.name}, ${advisor.email} to database.`);
		await db
			.insert(advisorsTable)
			.values({
				emailKey: key,
				email: advisor.email,
				name: advisor.name,
				imageUrl: advisor.imageUrl,
				unit: advisor.units,
			})
			.onConflictDoUpdate({
				target: advisorsTable.emailKey,
				set: {
					name: advisor.name,
					imageUrl: advisor.imageUrl,
					unit: advisor.units,
				},
			});
		console.log("Done ✅");
	}
	console.log(
		`Scraping complete! Scraped and wrote ${Object.keys(advisors).length} advisors to the database.`,
	);
}

main();
