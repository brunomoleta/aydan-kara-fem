import { html } from "https://unpkg.com/lit-html/lit-html.js";
import {countries} from "./countries";

export const homeTemplate = (items) => html`
  <div id="home-wrapper">
    <div id="controls">
      <div id="search-control">
        <form id="search-form">
          <i class="bx bx-search"></i>
          <input
            type="text"
            id="search-bar"
            name="search-bar"
            placeholder="Search for a country..."
          />
        </form>
      </div>
      <div id="filter-control">
        <div id="dropdown">
          <p id="filter-region">Filter by Region</p>
          <i class="bx bx-chevron-down"></i>
        </div>
        <ul class="options">
          <li class="regions">Africa</li>
          <li class="regions">America</li>
          <li class="regions">Asia</li>
          <li class="regions">Europe</li>
          <li class="regions">Oceania</li>
        </ul>
      </div>
    </div>
    <section id="countries">
      <ul class="countries-wrapper">
        ${items.map(countries)}
      </ul>
    </section>
  </div>
`;