const mySkills =[
    {
        title: "Technical Skills",
        content: ["Unity 3D", "C#", "JavaScript", "XR (AR/VR/MR)", "Gameplay Development", 
            "UI Development", "Performance Optimization", "Editor Tools Development"]
    },
    {
        title: "Development Practices & Tools",
        content: ["Design Patterns", "SOLID", "Git", "System Architecture", "Agile Methodologies"]
    },
    {
        title: "Platforms",
        content: ["PC", "iOS", "Android", "Occulus Quest", "Magic Leap"]
    },
];

function renderSkills() {
    const container = document.getElementById("skills-container");
    if(!container)
        return;

    container.innerHTML = mySkills.map(skill => `
        <div class="skill_card">
            <h3 class="experience-title">${skill.title}</h3>

            <ul>
                ${skill.content.map(item => `<li>${item}</li>`).join('')}
            </ul>

            </div>
        </div>
    `).join('');
}

renderSkills();