import React from "react";
import Header from "./components/Header";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div className="mt-48">footer</div>
    </>
  );
};

export default MainLayout;
