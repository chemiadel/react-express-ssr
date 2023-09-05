// src/server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./app/App";

const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static(__dirname + "/static"));

app.get("*", async (req, res) => {
  const AppSync = await App();

  const appMarkup = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={req.url}>{AppSync}</StaticRouter>
    </React.StrictMode>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR and Client Hybrid App</title>
        <script>window.INITIAL_DATA = ${global.INITIAL_DATA}</script>
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
