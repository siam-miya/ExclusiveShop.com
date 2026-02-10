import React from "react";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useUser } from "../context/userContext";

const mainLayout = () => {
  const { currentUser } = useUser();
  return (
    <main>
      <ToastContainer />
      {currentUser && (
        <>
          <Topbar />
          <Navbar />
        </>
      )}
      <Outlet />
      {currentUser && <Footer />}
    </main>
  );
};

export default mainLayout;
