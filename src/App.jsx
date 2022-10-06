import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Landingpage from "./pages/Landingpage";
// import InfoSection from "./components/InfoSection/InfoSection";
// import { home0bjOne } from "./components/InfoSection/Data";
import Footer from "./components/Footer/Footer";
import Signinpage from "./pages/Signinpage";

//BrowserRouter is inteligent component that look at the path and renders the component needed

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Landingpage />} exact />
          <Route path="/signin" element={<Signinpage />} exact />
        </Routes>
        {/* <Landingpage />
        <InfoSection {...home0bjOne} /> */}
        {/* <Search />
        <Category />
        <Pages /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
