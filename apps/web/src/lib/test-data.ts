export const advisorOneCategoryRatings = {
    advisorId: 1,
    responsive: 0.82,
    accurate: 0.64,
    approachable: 1.0,
    helpful: 0.9,
}

export const advisorOne = {
    id: 1,
    title: "Academic advisor",
    unit: "College of Sciences",
    firstname: "Advisor",
    lastname: "Lastname",
    score: 4.25,
}

export const studentOne = {
    id: 1,
    major: "Biology",
    classOf: 2024,
}

export const studentTwo = {
    id: 2,
    major: "Computer Science",
    classOf: 2024,
}

export const ratingOne = {
    id: 1,
    advisor: advisorOne,
    student: studentOne,
    datePosted: new Date(1732084730000),
    content: "This advisor was awesome!",
    score: 5,
};

export const ratingTwo = {
    id: 2,
    advisor: advisorOne,
    student: studentTwo,
    datePosted: new Date(1732024030000),
    content: "They were nice, but they forgot to tell me this deadline that I almost missed. Double-check your DegreeWorks!",
    score: 3.5,
};