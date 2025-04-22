import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import Main from "./MainComponent.tsx";
//import { Amplify } from "aws-amplify";
//import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import i18n from "./i18n.ts";
import { I18nextProvider } from "react-i18next";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Main />
      </I18nextProvider>
    </React.StrictMode>
  );