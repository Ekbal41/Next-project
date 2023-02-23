import React from "react";
import Header from "@/componants/Header";
import Footer from "@/componants/Footer";

function LayoutOne({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default LayoutOne;
