import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

(async ()=> {
  const AppAsync = await App()

  ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <BrowserRouter>
        {AppAsync}
      </BrowserRouter>
    </React.StrictMode>
  );
})()