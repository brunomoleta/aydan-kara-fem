import {darkMode} from "../layout";

export async function fetchDetails(ctx) {
    const countryCode = ctx.params.code;

    const data = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const item = await data.json();
    const countryCurrencies = Object.values(item[0].currencies);
    const countryLanguages = Object.values(item[0].languages);
    const countryBorders = item[0].borders;

    async function clickCountry(e) {
        const cca3 = e.target.textContent;
        const data = await fetch("https://restcountries.com/v3.1/all");
        const items = await data.json();
        const redirected = items.filter((item) => item.cca3 === cca3);
        console.log(redirected);
        ctx.page.redirect(`/details/${redirected[0].cca3}`);
    }

    ctx.render(
        singleCountry(
            item,
            countryCurrencies,
            countryLanguages,
            countryBorders,
            clickCountry
        )
    );

    if (darkMode) {
        const items = document.querySelectorAll(
            "#back-btn-wrapper, #back-btn-wrapper i, #back-btn-wrapper a button, #country-name, #border-countries strong, #country-info li p, #country-info li p strong, #border-countries .borders"
        );
        items.forEach((item) => {
            if (!item.classList.contains("active")) {
                item.classList.toggle("active");
            }
        });
    }
}
