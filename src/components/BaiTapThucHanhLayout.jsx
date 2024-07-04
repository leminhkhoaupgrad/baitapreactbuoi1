import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

const BaiTapThucHanhLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="body-content">
        <Banner />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BaiTapThucHanhLayout;
