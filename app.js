let currentLang = localStorage.getItem("lang") || DEFAULT_LANG;

function t(key) {
  return I18N[currentLang][key] ?? I18N[DEFAULT_LANG][key] ?? key;
}

function productName(p) {
  if (currentLang === "zh") return p.nameZh;
  if (currentLang === "th") return p.nameTh;
  return p.nameEn;
}

function companyName() {
  if (currentLang === "zh") return COMPANY.nameZh;
  if (currentLang === "th") return COMPANY.nameTh;
  return COMPANY.nameEn;
}

function statLabel(s) {
  if (currentLang === "zh") return s.labelZh;
  if (currentLang === "th") return s.labelTh;
  return s.labelEn;
}

function renderStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.title = companyName() + " | " + t("heroTag");
  document.getElementById("brandEn").textContent = COMPANY.nameEn;
  document.getElementById("brandZh").textContent = COMPANY.nameZh;
  document.getElementById("contactAddrValue").textContent = COMPANY.address[currentLang] || COMPANY.address.en;
}

function renderStats() {
  const el = document.getElementById("statsGrid");
  el.innerHTML = STATS.map(
    (s) => `<div class="stat-card"><div class="stat-value">${s.value}</div><div class="stat-label">${statLabel(s)}</div></div>`
  ).join("");
}

function renderProducts() {
  const el = document.getElementById("productGrid");
  el.innerHTML = PRODUCTS.map(
    (p) => `
    <div class="product-card">
      <div class="img-wrap"><img src="${p.image}" alt="${productName(p)}" loading="lazy"></div>
      <div class="product-body">
        <div class="product-sku">${p.sku}</div>
        <div class="product-name">${productName(p)}</div>
        <div class="product-meta">${p.material} · ${p.spec}</div>
        <div class="product-meta">${t("colMoq")}: ${p.moq}</div>
        <div class="product-price-row">
          <div class="fob">${p.fob}</div>
          <div class="thb">${t("colThb")}: ${p.thb}</div>
        </div>
      </div>
    </div>`
  ).join("");
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  renderStaticText();
  renderStats();
  renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  setLang(currentLang);
});
