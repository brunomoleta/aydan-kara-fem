import {darkMode} from "../layout";
import {homeTemplate} from "../components/home";

export async function homePage(ctx) {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const items = await data.json();

    console.log(items.forEach((item) => console.log(item.cca3)));
    ctx.render(homeTemplate(items));

    const searchBar = document.getElementById("search-bar");
    const countryName = document.querySelectorAll(".country-name");

    searchBar.addEventListener("input", (e) => {
        Array.from(countryName).forEach((country) => {
            if (
                country.innerText.toLowerCase().includes(searchBar.value.toLowerCase())
            ) {
                country.parentElement.parentElement.style.display = "grid";
            } else {
                country.parentElement.parentElement.style.display = "none";
            }
        });
    });

    const dropDown = document.getElementById("dropdown");
    const dropOptions = document.querySelector(".options");

    dropDown.addEventListener("click", (e) => {
        dropOptions.classList.toggle("show-options");
    });

    const regions = document.querySelectorAll(".regions");
    const regionName = document.querySelectorAll(".region-name");
    const filterRegion = document.getElementById("filter-region");

    regions.forEach((region) => {
        region.addEventListener("click", () => {
            dropOptions.classList.toggle("show-options");
            filterRegion.innerText = region.innerText;
            Array.from(regionName).forEach((el) => {
                if (el.innerText.includes(region.innerText)) {
                    el.parentElement.parentElement.style.display = "grid";
                } else {
                    el.parentElement.parentElement.style.display = "none";
                }
            });
        });
    });

    if (darkMode) {
        const items = document.querySelectorAll(
            "#search-control i, #filter-control p, #dropdown i, #search-bar, #filter-control #dropdown, #filter-control .options, li.regions, .country-info, .country-info h2, .country-info p, .country-info p strong"
        );

        items.forEach((item) => item.classList.toggle("active"));
    }
}
