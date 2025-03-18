import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./home/home";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
