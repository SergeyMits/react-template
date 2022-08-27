import React from "react";

const Layout = ({ children }) => {
  return (
    <div data-theme="dark" className=" min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
