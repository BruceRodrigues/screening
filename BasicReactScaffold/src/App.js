import React from "react";
import { PROD } from "./env";
import "./style.scss";

export const App = () => (
  <h1>
    {process.env.NODE_ENV == PROD
      ? "This app is running in production mode"
      : "This app is running in development mode"}
  </h1>
);
