import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import Main from "./MainComponent.tsx";
//import { Amplify } from "aws-amplify";
//import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );