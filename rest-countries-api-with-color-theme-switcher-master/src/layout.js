export let darkMode = false;
export function onModeChange() {
  darkMode = !darkMode;
  const darkMoon = document.querySelector("#icon");
  darkMoon.classList.toggle("bxs-moon");

  /* layout items */
  const items = document.querySelectorAll(
    "body, #header-title, #color-switcher i, #color-switcher #mode, header, #header-wrapper"
  );
  items.forEach((item) => item.classList.toggle("active"));

  /* home page items */
  const itemsHome = document.querySelectorAll(
    "#search-control i, #filter-control p, #dropdown i, #search-bar, #filter-control #dropdown, #filter-control .options, li.regions, .country-info, .country-info h2, .country-info p, .country-info p strong"
  );
  itemsHome.forEach((item) => item.classList.toggle("active"));

  /* details page items */
  const itemsDetails = document.querySelectorAll(
    "#back-btn-wrapper, #back-btn-wrapper i, #back-btn-wrapper a button, #country-name, #border-countries strong, #country-info li p, #country-info li p strong, #border-countries .borders"
  );
  itemsDetails.forEach((item) => item.classList.toggle("active"));
}
