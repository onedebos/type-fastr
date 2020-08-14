import React from "react";

const Layout: React.FC = (props) => {
  return (
    <div className="pt-3">
      <h1 className="text-center text-2xl md:text-5xl font-bold text-main-color mt-8">
        TypeFastr
      </h1>
      <h3 className="text-sub-color text-center font-semibold text-sm tracking-wider mb-8 px-8 md:px-0">
        HOW FAST CAN YOU TYPE IN 1 MIN?
      </h3>
      {props.children}
    </div>
  );
};

export default Layout;
