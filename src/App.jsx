
import React from "react";
import AppRoutes from "./routes";
import MyHelmet from './components/MyHelmet';
import MoveToTop from "./components/MoveToTop";

// src/App.js

function App() {
  return (
    <>
      <MyHelmet />
      <AppRoutes />
      <MoveToTop />

    </>
  );
}

export default App;
