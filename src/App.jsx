import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <AppRouter />
      <Navbar />
    </>
  );
}

export default App;
