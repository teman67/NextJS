import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom"; // Importing Outlet to render child routes

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet /> {/* This will render the child routes defined in the router */}
    </>
  );
}

export default RootLayout;
