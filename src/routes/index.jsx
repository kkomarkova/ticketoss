import { Routes, Route } from "react-router-dom";
import routeConstants from "./routeConstants";
import Landingpage from "../pages/Landingpage";
import Signinpage from "../pages/Signinpage";
import Recipe from "../pages/Recipe";
import Profile from "../components/Profile/Profile";
import RegisterPage from "../pages/Register";




const AppRouter = () => {
    return (
          <Routes>
            <Route path={routeConstants.landingPage} element={<Landingpage />} exact />
            <Route path={routeConstants.login} element={<Signinpage />} exact />
            <Route path={routeConstants.recipe} element={<Recipe />} exact />
            <Route path={routeConstants.profile} element={<Profile />} />
            <Route path={routeConstants.register} element={<RegisterPage />} />
          </Routes>
    );
  }
  
  export default AppRouter;
  