import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`px-4 py-4 md:px-8 md:py-8 max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
