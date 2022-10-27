import { useState } from "react";
import MainSection from "../components/MainSection/MainSection";
import InfoSection from "../components/InfoSection/InfoSection";
import { home0bjOne } from "../components/InfoSection/Data";
import Search from "../components/Search";
import Category from "../components/Category";
import Pages from "../pages/Pages";
import Footer from "../components/Footer/Footer";
import SignIn from "../components/SignIn/Signin";
import Popular from "../components/Popular";

const Landingpage = () => {
  

  return (
    <>
      
      <MainSection />
      <InfoSection {...home0bjOne} />
      <Popular />
      {/* <Search /> */}
      {/* <Category /> */}
      <Pages />
    </>
  );
};

export default Landingpage;
