
const translations = {
  en: {
    slogan: "Cutting-edge technological solutions from PRIVOX",
    garage: "Garage",
    parking: "Parking",
    farm: "Farm",
    messenger: "Messenger"
  },
  fr: {
    slogan: "Solutions technologiques de pointe par PRIVOX",
    garage: "Garage",
    parking: "Parking",
    farm: "Ferme",
    messenger: "Messagerie"
  },
  ru: {
    slogan: "Новейшие технологические решения от PRIVOX",
    garage: "Гараж",
    parking: "Парковка",
    farm: "Ферма",
    messenger: "Мессенджер"
  }
};

const switchers = document.querySelectorAll("[data-lang]");
switchers.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  });
});
