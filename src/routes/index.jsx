import { Routes, Route } from "react-router-dom";
import routeConstants from "./routeConstants";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import TicketPage from "../pages/Ticket";
import Test from "../components/Home/index";





const AppRouter = () => {
    return (
          <Routes>
            <Route path={routeConstants.home} element={<HomePage />} exact />
            <Route path={routeConstants.profile} element={<ProfilePage />} />
            <Route path={routeConstants.register} element={<RegisterPage />} />
            <Route path={routeConstants.login} element={<LoginPage />} />
            <Route path={routeConstants.ticket} element={<TicketPage />} />
            <Route path={routeConstants.test} element={<Test />} />
          </Routes>
    );
  }
  
  export default AppRouter;
  