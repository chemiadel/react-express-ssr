import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./app";

const constructHTML = (app) => {
  return `
    <!doctype html>
    <html>
      <head>
      </head>
      <body>
        <div id="app">${app}</div>
      </body>
    </html>
  `;
};

const handleRequest = async (request) => {
  const headers = { "Content-Type": "text/html; charset=utf-8" };
  const app = ReactDOMServer.renderToString(<App />);
  const html = constructHTML(app);

  return new Response(html, { status: 200, headers });
};

addEventListener("fetch", (event: any) => {
  event.respondWith(handleRequest(event.request));
});
