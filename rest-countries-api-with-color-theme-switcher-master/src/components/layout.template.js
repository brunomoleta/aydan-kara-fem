import { onModeChange } from "../layout";
import { html } from "lit-html";

export const layoutTemplate = (content) => html`
  <header>
    <div id="header-wrapper">
      <h1 id="header-title">Where in the world?</h1>
      <div id="color-switcher">
        <i class="bx bx-moon" id="icon"></i>
        <span id="mode" @click=${onModeChange}>Dark Mode</span>
      </div>
    </div>
  </header>
  <main>${content}</main>
`;
