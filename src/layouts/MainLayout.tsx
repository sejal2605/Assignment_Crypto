// import React from "react";
import Header from "../customcomponents/Header/Header";
import Footer from "../customcomponents/Footer/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
