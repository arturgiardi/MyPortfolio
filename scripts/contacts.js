const myContacts =[
    {
        icon: "📧",
        link: "mailto:artur_giardi@hotmail.com",
        targetBlank: false,
        text: "artur_giardi@hotmail.com",
    },
    {
        icon: "📱",
        link: "tel:+5511952405321",
        targetBlank: false,
        text: "(+55) 11 95240-5321",
    },
    {
        icon: "🔗",
        link: "https://www.linkedin.com/in/arturgbpereira/",
        targetBlank: true,
        text: "LinkedIn Profile",
    },
    {
        icon: "📋",
        link: "https://drive.google.com/uc?export=download&id=1IwYcQeYNjNhJcpB4-yMe2YxjbD2BRpqA",
        targetBlank: true,
        text: "My Resume",
    },
    {
        icon: "💻",
        link: "https://github.com/arturgiardi",
        targetBlank: true,
        text: "GitHub Profile",
    },
];

function renderContacts() {
    const container = document.getElementById("contact-container");

    if(!container)
        return;

    container.innerHTML = myContacts.map(contact => `
        <div class="contact-item">
            <div class="icon">${contact.icon}</div>
            <a href=${contact.link} ${contact.targetBlank ? 'target="_blank"' : ''}>${contact.text}</a>
        </div>
    `).join('');
}

renderContacts();