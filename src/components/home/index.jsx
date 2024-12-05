import React from "react";
import Recommended from "../recommend";
import Header from "../header";
const HomeComponents = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <Recommended />
    </div>
  );
};

export default HomeComponents;
