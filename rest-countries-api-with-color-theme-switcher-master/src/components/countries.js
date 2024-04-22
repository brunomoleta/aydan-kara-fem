export const countries = (items) => html`
  <li class="country">
    <div class="country-img">
      <a href="/details/${items.cca3}" aria-label="Read more about this country"
        ><img src="${items.flags.svg}" alt="${items.flags.alt}"
      /></a>
    </div>
    <div class="country-info">
      <h2 class="country-name">${items.name.common}</h2>
      <p><strong>Population: </strong>${items.population}</p>
      <p class="region-name"><strong>Region: </strong>${items.region}</p>
      <p><strong>Capital: </strong>${items.capital}</p>
    </div>
  </li>
`;
