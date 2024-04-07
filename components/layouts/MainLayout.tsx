import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
