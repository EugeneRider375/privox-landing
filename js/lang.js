
const content = {
  ru: {
    title: "PRIVOX.TECH",
    subtitle: "Интеллектуальная платформа для IoT, автоматизации и связи",
    projects: [
      { name: "Мессенджер", desc: "Безопасная и быстрая связь", link: "https://chat.privox.tech" },
      { name: "Гараж", desc: "Мониторинг движения и воды", link: "https://garage.privox.tech" },
      { name: "Парковка", desc: "Система свободных мест", link: "#" },
      { name: "Ферма", desc: "Контроль температуры и полив", link: "#" },
    ],
    button: "Открыть"
  },
  en: {
    title: "PRIVOX.TECH",
    subtitle: "Smart platform for IoT, automation and communication",
    projects: [
      { name: "Messenger", desc: "Secure and fast communication", link: "https://chat.privox.tech" },
      { name: "Garage", desc: "Motion and water monitoring", link: "https://garage.privox.tech" },
      { name: "Parking", desc: "Free spot tracking system", link: "#" },
      { name: "Farm", desc: "Temperature and irrigation control", link: "#" },
    ],
    button: "Open"
  },
  fr: {
    title: "PRIVOX.TECH",
    subtitle: "Plateforme intelligente pour l'IoT, l'automatisation et la communication",
    projects: [
      { name: "Messagerie", desc: "Communication rapide et sécurisée", link: "https://chat.privox.tech" },
      { name: "Garage", desc: "Surveillance du mouvement et de l'eau", link: "https://garage.privox.tech" },
      { name: "Parking", desc: "Système de gestion des places libres", link: "#" },
      { name: "Ferme", desc: "Contrôle de température et irrigation", link: "#" },
    ],
    button: "Accéder"
  }
};

function setLang(lang) {
  const t = content[lang];
  document.getElementById("title").textContent = t.title;
  document.getElementById("subtitle").textContent = t.subtitle;

  const projects = document.getElementById("projects");
  projects.innerHTML = "";
  t.projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    const imageName = p.name.toLowerCase().replace(/é|è|ë/g, "e") + ".png";
    card.innerHTML = `<img src="images/${imageName}" alt="${p.name}"><h3>${p.name}</h3><p>${p.desc}</p><button onclick="location.href='${p.link}'">${t.button}</button>`;
    projects.appendChild(card);
  });
}

setLang(navigator.language.startsWith("fr") ? "fr" : navigator.language.startsWith("ru") ? "ru" : "en");
