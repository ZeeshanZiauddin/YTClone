import Head from "next/head";
import Master from "../components/Master";
import React, { useState, useEffect } from "react";
import { AiFillYoutube, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { fetchAPI } from "./utils/fetchAPI";
import Sidebar from "../components/sidebar";
import Loader from "../components/loader";

export default function Home() {
  const [nav, setNav] = useState(false);
  const click = () => setNav(!nav);

  const [isLoading, setLoading] = useState(false);

  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const [input, setinput] = useState("");

  const maxresults = 50;

  useEffect(() => {
    setLoading(true);
    fetchAPI(
      `search?part=snippet&maxResults=${maxresults}&q=${selectedCategory}`
    ).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [selectedCategory]);

  let handleChange = (event) => {
    event.preventDefault();
    setselectedCategory(input);
  };

  return (
    <div className={" overflow-none"}>
      <Head>
        <title>ZeeTube</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}

      <div
        className={
          "fixed grid grid-cols-3 w-[100%] bg-dark-100 h-[56px] items-center px-7 justify-between z-[10]"
        }
      >
        <div className={" flex text-text-100 text-[22px] items-center  "}>
          <div onClick={click} className={"text-[20px] hidden md:block mr-4"}>
            <AiOutlineMenu />
          </div>
          <div className="flex items-center font-bold text-white uppercase font-logo-f z-[999]">
            <AiFillYoutube className={"text-[#ff0000] text-[30px] mr-[2px]"} />
            ZEETUBE
          </div>
        </div>
        <div className={"hidden md:flex grow max-w-[100%] justify-center"}>
          <form className="flex w-fit grow ">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setinput(e.target.value)}
              className={
                " bg-dark-100 text-text-100 font-thin  py-[6px] px-4 grow rounded-tl-full rounded-bl-full placeholder:text-text-200 placeholder:font-[400] outline outline-1 outline-event-200   focus:outline-[#046ec4]"
              }
            />
            <button
              type="submit"
              onClick={handleChange}
              className={
                "hidden md:flex bg-dark-200 text-[#efefef] text-[24px]  px-4 items-center justify-center  outline outline-1 outline-event-200 rounded-tr-full rounded-br-full"
              }
            >
              <AiOutlineSearch />
            </button>
          </form>
          <div></div>
        </div>
      </div>
      <section className="grid w-full grid-cols-7 overflow-y-hidden">
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <div className="pt-[60px]  col-span-6  overflow-y-scroll">
          {isLoading ? <Loader /> : <Master videos={videos} />}
        </div>
      </section>
    </div>
  );
}