
const content = {
  ru: {
    title: "PRIVOX.TECH",
    subtitle: "Интеллектуальная платформа для IoT, автоматизации и связи",
    projects: [
      { name: "Мессенджер", desc: "Безопасная и быстрая связь", link: "https://chat.privox.tech" },
      { name: "Гараж", desc: "Мониторинг движения и воды", link: "https://garage.privox.tech" },
      { name: "Парковка", desc: "Система свободных мест", link: "#" },
    ]
  },
  en: {
    title: "PRIVOX.TECH",
    subtitle: "Smart platform for IoT, automation and communication",
    projects: [
      { name: "Messenger", desc: "Secure and fast communication", link: "https://chat.privox.tech" },
      { name: "Garage", desc: "Motion and water monitoring", link: "https://garage.privox.tech" },
      { name: "Parking", desc: "Free spot tracking system", link: "#" },
    ]
  },
  fr: {
    title: "PRIVOX.TECH",
    subtitle: "Plateforme intelligente pour l'IoT, l'automatisation et la communication",
    projects: [
      { name: "Messagerie", desc: "Communication rapide et sécurisée", link: "https://chat.privox.tech" },
      { name: "Garage", desc: "Surveillance des mouvements et de l'eau", link: "https://garage.privox.tech" },
      { name: "Parking", desc: "Système de gestion des places libres", link: "#" },
    ]
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
    card.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p><button onclick="location.href='${p.link}'">Открыть</button>`;
    projects.appendChild(card);
  });
}

// auto-detect browser language
setLang(navigator.language.startsWith("fr") ? "fr" : navigator.language.startsWith("ru") ? "ru" : "en");
