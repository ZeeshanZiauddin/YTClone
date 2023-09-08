import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { sidemenus } from "../pages/utils/sidemenu";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className=" bg-dark-100 text-text-100  w-full flex md:block md:h-[100vh] text-[20px] z-[10] md:mt-[70px] absolute bottom-0 md:relative">
      {sidemenus.map((item) => (
        <button
          key={item?.key}
          className={`h-[45px]  w-full  items-center hover:bg-dark-200 text-text-100 flex rounded-full px-4 duration-150 ${
            item.key === selectedCategory &&
            "bg-text-100  text-dark-100 hover:bg-text-100"
          }`}
          onClick={() => setselectedCategory(item?.key)}
        >
          <span className="md:w-[20%] w-[70px]"> {item?.icon}</span>
          <span className="md:w-[80%] hidden md:flex justify-start">
            {item?.key}
          </span>
        </button>
      ))}

      <small className="text-text-200 text-[14px] hidden items-center absolute bottom-0 left-0  md:flex mb-[70px ]">
        <AiOutlineCopyrightCircle className="mr-2" /> copyright @m_zieshan
      </small>
    </div>
  );
};

export default Sidebar;
