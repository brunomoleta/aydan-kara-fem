export const bordersTemplate = (border, clickCountry) => html`
  <button @click=${clickCountry} class="borders">${border}</button>
`;
