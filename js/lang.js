
const content = {
  ru: {
    title: "PRIVOX.TECH",
    subtitle: "Интеллектуальная платформа для IoT, автоматизации и связи",
    projects: [
      { name: "Мессенджер", desc: "Безопасная и быстрая связь", link: "https://chat.privox.tech", icon: "messenger.png" },
      { name: "Гараж", desc: "Мониторинг движения и воды", link: "https://garage.privox.tech", icon: "garage.png" },
      { name: "Парковка", desc: "Система свободных мест", link: "#", icon: "parking.png" },
      { name: "Ферма", desc: "Контроль температуры и полива", link: "#", icon: "farm.png" }
    ],
    button: "Открыть"
  },
  en: {
    title: "PRIVOX.TECH",
    subtitle: "Smart platform for IoT, automation and communication",
    projects: [
      { name: "Messenger", desc: "Secure and fast communication", link: "https://chat.privox.tech", icon: "messenger.png" },
      { name: "Garage", desc: "Motion and water monitoring", link: "https://garage.privox.tech", icon: "garage.png" },
      { name: "Parking", desc: "Free spot tracking system", link: "#", icon: "parking.png" },
      { name: "Farm", desc: "Temperature and irrigation control", link: "#", icon: "farm.png" }
    ],
    button: "Open"
  },
  fr: {
    title: "PRIVOX.TECH",
    subtitle: "Plateforme intelligente pour l'IoT, l'automatisation et la communication",
    projects: [
      { name: "Messagerie", desc: "Communication rapide et sécurisée", link: "https://chat.privox.tech", icon: "messenger.png" },
      { name: "Garage", desc: "Surveillance du mouvement et de l'eau", link: "https://garage.privox.tech", icon: "garage.png" },
      { name: "Parking", desc: "Système de gestion des places libres", link: "#", icon: "parking.png" },
      { name: "Ferme", desc: "Contrôle de température et irrigation", link: "#", icon: "farm.png" }
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
    card.innerHTML = `
      <img src="images/${p.icon}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <button onclick="location.href='${p.link}'">${t.button}</button>`;
    projects.appendChild(card);
  });
}

setLang(navigator.language.startsWith("fr") ? "fr" : navigator.language.startsWith("ru") ? "ru" : "en");
