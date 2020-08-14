import React from "react";

const Footer = () => {
  return (
    <footer className="mt-40 md:mt-0 sub-bg-color p-10 w-full">
      <div className="flex justify-evenly flex-col md:flex-row ">
        <div>
          <h2 className="text-white font-bold text-3xl">TypeFastr</h2>
          <h4 className="text-white text-sm">
            &copy; 2020, <a href="https://adebola.dev">Designed by Adebola.</a>
          </h4>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-white font-bold">About Creator</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">Blog</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://adebola.dev">Portfolio</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-white font-bold">Contact</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">Blog</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://adebola.dev">Portfolio</a>
          </h3>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-white font-bold">More</h1>
          <h3 className="text-gray-500">
            <a href="https://blog.adebola.dev">TypeFastr</a>
          </h3>
          <h3 className="text-gray-500">
            <a href="https://filelockrr.com">Other Products</a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
