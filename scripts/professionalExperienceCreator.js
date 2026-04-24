const myExperiences = [
    {
        title: "Senior Game Developer",
        place: "Fanatee",
        dateStart: "Sep 2021",
        dateEnd: "Dec 2025",
        tasks: [
            "Developed Everyday Puzzles and Word Lanes. Two games with millions of downloads worldwide.",
            "Designed and implemented scalable systems architecture to support feature growth and long-term maintainability.",
            "Built reusable internal tools (e.g., navigation systems, login modules) adopted across multiple company projects, improving development efficiency.",
            "Designed a flexible player profile system enabling dynamic feature configuration and personalization across the application.",
            "Collaborated closely with product, design, and QA teams to deliver features in a live-ops environment.",
        ],
    },
    {
        title: "XR Developer",
        place: "Everis",
        dateStart: "Oct 2016",
        dateEnd: "Sep 2021",
        tasks: [
            "Developed AR/VR/MR applications for enterprise clients including Unilever, Vivo, and AB InBev using Unity and WebXR technologies.",
            "Integrated XR experiences with computer vision and cognitive computing solutions.",
            "Led multidisciplinary teams (developers, 3D artists, UX) delivering end-to-end XR solutions.",
            "Conducted internal training programs on Unity and AR Foundation, mentoring developers across Latin America.",
            "Collaborated with academic institutions (Insper, FIAP) mentoring student projects in XR and game development.",
        ],
    },

    {
        title: "Game Developer / Game Designer / Team Lead",
        place: "Dark Paladin Studios",
        dateStart: "Feb 2017",
        dateEnd: "Jun 2019",
        tasks: [
            "Developed narrative systems including cutscene and dialogue frameworks for Yokai Killer: Shuten Doji.",
            "Led both technical and creative teams, contributing to project direction and production decisions.",
            "Represented the studio in meetings with publishers and external partners.",
        ],
    },
];

function renderExperiences() {
    const container = document.getElementById("experience-container");

    if (!container)
        return;

    container.innerHTML = myExperiences.map(experience => `
        <div class="experience-item">
            <h3 class="experience-title">${experience.title} — ${experience.place}</h3>
            <span class="experience-date">${experience.dateStart} — ${experience.dateEnd}</span>
            <ul class="experience-tasks">
                ${experience.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

renderExperiences();