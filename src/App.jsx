import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes";
import NewNavbar from "./components/NewNavbar";

function App() {

  return (
    <>
      <AppRouter />
      <NewNavbar />
    </>
  );
}

export default App;
