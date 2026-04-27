const LinkType = Object.freeze({
    GOOGLEPLAY: "GOOGLE PLAY",
    APPSTORE: "APP STORE",
    ITCHIO: "Itch.io",
});

const myProjects = [
    {
        title: "Deeper & Deeper",
        video: "https://www.youtube.com/embed/BEAL6gVstL4",
        description: "A puzzle game where you have just one goal: Go Deeper.",
        tags: ["Unity3D", "C#", "Technical Art", "Game Design"],
        links: [
            {
                type: LinkType.ITCHIO,
                url: "https://magonx.itch.io/deeper-deeper"
            }
        ],
    },

    {
        title: "Everyday Puzzles",
        video: "https://www.youtube.com/embed/-7NcuXNzXJU?si=x1RiYzlnV5CDs4ZK",
        description: "A hub of word puzzles and brain teasers to keep you entertained daily.",
        tags: ["Unity", "C#", "Live Ops", "A/B Testing"],
        links: [{
            type: LinkType.APPSTORE,
            url: "https://apps.apple.com/ca/app/everyday-puzzles-mini-games/id1580601028"
        },
        {
            type: LinkType.GOOGLEPLAY,
            url: "https://apps.apple.com/ca/app/everyday-puzzles-mini-games/id1580601028"
        },
        ],
    },

    {
        title: "Yokai Killer",
        video: "https://www.youtube.com/embed/2CO0BpM1BS0",
        description: "A Metroidvania inspired in 90s classics.",
        tags: ["Unity", "C#", "Game Design", "Pixel Art", "3D Modeling"],
        links: [],
    },

    {
        title: "What if Final Fantasy 6 had a remake?",
        video: "https://www.youtube.com/embed/HMNRhMxryFI?si=AhNh_O3qfWtXAb_4",
        description: "A small tribute imagining what Final Fantasy 6 would be like if it won a remake similar to Live Alive.",
        tags: ["Unity", "C#", "Technical Art", "3D Modeling"],
        links: [],
    },

    {
        title: "Word Lanes",
        video: "https://www.youtube.com/embed/bRYnWx9GOh8?si=SsMvSMzsrSoZM_90",
        description: "Train your brain and enrich your vocabulary while you stroll through beautiful and soothing landscapes.",
        tags: ["Unity", "C#", "Live Ops", "A/B Testing"],
        links: [{
            type: LinkType.APPSTORE,
            url: "https://apps.apple.com/us/app/word-lanes-relaxing-puzzles/id1486915152"
        },
        {
            type: LinkType.GOOGLEPLAY,
            url: "https://apps.apple.com/us/app/word-lanes-relaxing-puzzles/id1486915152"
        },
        ],
    },

    {
        title: "The Future of Work",
        video: "https://www.youtube.com/embed/MNr9PnjrXos?si=b7TEUIrwKLgANcWQ",
        description: "A project developed for the MIT Sloan Conference in São Paulo, focused on the future of work. It features a mixed reality simulation of an office environment.",
        tags: ["Unity", "C#", "Magic Leap", "XR"],
        links: [],
    },

    {
        title: "Yet Another Cute Game",
        video: "https://www.youtube.com/embed/5VLYp30Ua-A?si=H0nS7yUtcK_dzQiM",
        description: "Our bunny hero must rescue the damsel in distress from the bad guys and save the day. Right? But some little things are not what they appear to be.",
        tags: ["Unity", "C#", "Game Design", "Pixel Art", "Technical Art"],
        links: [
            {
                type: LinkType.ITCHIO,
                url: "https://philisoftstudio.itch.io/yet-another-cute-game"
            }
        ],
    },
];

function renderProjects() {
    const container = document.getElementById("project-container");

    if (!container)
        return;

    container.innerHTML = myProjects.map(project => `
        <div class="project_card">
            <h3>${project.title}</h3>

            <iframe
                width="100%"
                height="255"
                src="${project.video}"
                title="Youtube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>

            <p>${project.description}</p>

            <div class="tag-container">
                ${project.tags ? project.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>

            <div class="links-container">
                ${
                    project.links ? project.links.map(link => {
                        return `
                            <a href="${link.url}" target="_blank" class="project-link-button link-play">
                                ${GetTypeIcon(link.type)} ${GetTypeName(link.type)}
                            </a>
                        `;
                    }).join('') : ''
                }
            </div>
        </div>
    `).join('');
}

function GetTypeIcon(type) {
    switch (type) {
        case LinkType.APPSTORE:
            return "📱";
        case LinkType.GOOGLEPLAY:
            return "📱";
        case LinkType.ITCHIO:
            return "🎮";
        default:
            return "🔗";
    }
}

function GetTypeName(type) {
    switch (type) {
        case LinkType.APPSTORE:
            return "App Store";
        case LinkType.GOOGLEPLAY:
            return "Google Play";
        case LinkType.ITCHIO:
            return "Itch.io";
        default:
            return "Link";
    }
}

function GetTypeName(type) {
    switch (type) {
        case LinkType.APPSTORE:
            return "App Store";
        case LinkType.GOOGLEPLAY:
            return "Google Play";
        case LinkType.ITCHIO:
            return "Itch.io";
        default:
            return "Link";
    }
}

renderProjects();