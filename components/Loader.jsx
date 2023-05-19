import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#222]">
      <span className="flex justify-center">
        <BiLoaderAlt class="animate-spin h-10 w-10 mr-3 text-text-100 " />
        loading videos...
      </span>
    </div>
  );
};

export default Loader;
