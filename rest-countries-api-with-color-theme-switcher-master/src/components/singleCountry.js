import { bordersTemplate } from "./bordersTemplate";

export const singleCountry = (
  item,
  countryCurrencies,
  countryLanguages,
  countryBorders,
  clickCountry,
) => {
  const { flags, name, population, region, subregion, capital, tld } = item;

  return html`
    <div id="details-container">
      <div id="back-btn-wrapper">
        <a href="/" aria-label="Back to the Home page"
          ><i class="bx bx-arrow-back"></i>
          <button id="back-btn">Back</button>
        </a>
      </div>
      <div id="details-wrapper">
        <div id="country-img">
          <img src=${flags.png} alt="${flags.alt}" />
        </div>
        <div id="country-info">
          <h1 id="country-name">${name.common}</h1>
          <ul id="country-details">
            <li class="column">
              <p><strong>Native Name: </strong>${name.official}</p>
              <p><strong>Population: </strong>${population}</p>
              <p><strong>Region: </strong>${region}</p>
              <p><strong>Sub Region: </strong>${subregion}</p>
              <p><strong>Capital: </strong>${capital}</p>
            </li>
            <li class="column">
              <p><strong>Top Level Domain: </strong>${tld}</p>
              <p><strong>Currencies: </strong>${countryCurrencies[0].name}</p>
              <p><strong>Languages: </strong>${countryLanguages.join(", ")}</p>
            </li>
          </ul>
          <div id="border-countries">
            <strong>Border Countries: </strong>
            <div id="country-borders">
              ${countryBorders
                ? countryBorders.map((border) =>
                    bordersTemplate(border, clickCountry),
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
