import page from "//unpkg.com/page/page.mjs";
import { render } from "https://unpkg.com/lit-html/lit-html.js";

import { fetchDetails } from "./services/fetchDetails";
import { layoutTemplate } from "./components/layout.template";
import { homePage } from "./services/homePage";

const root = document.body;
page(decorateContext);
page("index.html", "/");
page("/", homePage());
page("/details/:code", fetchDetails());

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  render(layoutTemplate(content), root);
}
