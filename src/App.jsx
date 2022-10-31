import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AppRouter />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
