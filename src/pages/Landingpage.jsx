import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import MainSection from "../components/MainSection/MainSection";
import InfoSection from "../components/InfoSection/InfoSection";
import { home0bjOne } from "../components/InfoSection/Data";
import Search from "../components/Search";
import Category from "../components/Category";
import Pages from "../pages/Pages";
import Footer from "../components/Footer/Footer";
import SignIn from "../components/SignIn/Signin";

const Landingpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <InfoSection {...home0bjOne} />
      <Search />
      <Category />
      <Pages />
    </>
  );
};

export default Landingpage;
