import React, { useState } from "react";
import {
  AiFillYoutube,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineHistory,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsBell, BsFlag } from "react-icons/bs";
import {
  MdKeyboardVoice,
  MdOutlineFeedback,
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineWatchLater,
  MdOutlineSubscriptions,
  MdSlowMotionVideo,
  MdVideoLibrary,
  MdSubscriptions,
} from "react-icons/md";
import { BiArrowBack, BiLike, BiHelpCircle } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const click = () => setNav(!nav);

  const [Acc, setAcc] = useState(false);
  const accClick = () => setAcc(!Acc);

  const [search, setSearch] = useState(false);
  const SearchClick = () => setSearch(!search);

  return (
    <div
      className={
        "fixed flex w-[100%] bg-dark-100 h-[56px] items-center px-7 justify-between z-[10]"
      }
    >
      <div className={" flex text-text-100 text-[22px] items-center "}>
        <div onClick={click} className={"text-[20px] hidden md:block mr-4"}>
          <AiOutlineMenu />
        </div>
        <div className="flex items-center font-bold text-white uppercase font-logo-f">
          <AiFillYoutube className={"text-[#ff0000] text-[30px] mr-[2px]"} />
          UniNaiGya
        </div>
      </div>
      <div className={"hidden md:flex grow max-w-[45%] justify-center"}>
        <div className="flex w-fit grow">
          <input
            type="text"
            placeholder="Search"
            className={
              " bg-dark-100 text-text-100 font-thin  py-[6px] px-4 grow rounded-tl-full rounded-bl-full placeholder:text-text-200 placeholder:font-[400] outline outline-1 outline-event-200   focus:outline-[#046ec4]"
            }
          />
          <div
            className={
              "hidden md:flex bg-dark-200 text-[#efefef] text-[24px]  px-4 items-center justify-center  outline outline-1 outline-event-200 rounded-tr-full rounded-br-full"
            }
          >
            <AiOutlineSearch />
          </div>
        </div>
        <div
          className={
            "hidden md:flex text-[24px] text-[#efefef] bg-dark-200 justify-center items-center rounded-full w-[40px] p-[10] mx-2"
          }
        >
          <MdKeyboardVoice />
        </div>
      </div>
      <div
        className={
          "w-[20%] md:w-[12%] flex justify-between text-[24px] items-center text-[#efefef]"
        }
      >
        <AiOutlineVideoCameraAdd className={"hidden md:flex"} />
        <BsBell />
        <div onClick={SearchClick} className={"flex md:hidden"}>
          <AiOutlineSearch />
        </div>
        <div className="relative">
          <div onClick={accClick}>
            <RiAccountCircleLine />
          </div>
          <div
            className={
              Acc
                ? "fixed p-8 h-[80vh] w-[250px]  bg-[#222222] right-8 top-[52px] duration-200 z-[100] hidden md:block"
                : "top-[-100%] duration-200 hidden"
            }
          >
            <div onClick={accClick} className="md:hidden">
              <AiOutlineClose />
            </div>
          </div>
          <div
            className={
              Acc
                ? "fixed p-8 w-full h-[100vh] bg-[#222222]  top-0 left-0 duration-200 z-[100] md:hidden block"
                : "top-[-100%] duration-200"
            }
          >
            <div onClick={accClick} className={Acc ? "block" : "hidden"}>
              <AiOutlineClose />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed bottom-0 left-0 h-[52px] w-full bg-dark-100 px-2 text-[#f1f1f1] text-[12px] md:top-[52px] md:h-full md:w-20 md:px-0"
        }
      >
        <div
          className={
            "grid grid-cols-5 w-full h-[52px] md:grid-cols-1  md:w-full md:h-[72px] "
          }
        >
          <div
            className={
              " h-full flex flex-col justify-center items-center md:h-[72px] md:w-full hover:bg-event-100 rounded-lg hover:text-white font-thin"
            }
          >
            <MdHomeFilled className={"text-[24px] md:text-[24px]"} />
            <p>Home</p>{" "}
          </div>
          <div
            className={
              " h-full flex flex-col justify-center items-center md:h-[72px] md:w-full hover:bg-event-100 rounded-lg hover:text-white font-thin"
            }
          >
            <MdOutlineExplore className={"text-[24px] md:text-[24px]"} />
            Explore
          </div>
          <div
            className={
              " h-full flex flex-col justify-center items-center md:h-[72px] md:w-full hover:bg-event-100 rounded-lg hover:text-white font-thin"
            }
          >
            <MdSlowMotionVideo className={"text-[24px] md:text-[24px]"} />{" "}
            Shorts
          </div>
          <div
            className={
              " h-full flex flex-col justify-center items-center md:h-[72px] md:w-full hover:bg-event-100 rounded-lg hover:text-white font-thin"
            }
          >
            <MdVideoLibrary className={"text-[24px] md:text-[24px]"} />
            Library
          </div>
          <div
            className={
              " h-full flex flex-col justify-center items-center md:h-[72px] md:w-full hover:bg-event-100 rounded-lg hover:text-white font-thin"
            }
          >
            <MdOutlineSubscriptions className={"text-[24px] md:text-[24px]"} />{" "}
            <p> Subscription</p>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed z-10 top-[52px] left-[0] bg-dark-100 text-text-100 font-light w-[240px] h-[100vh] duration-200 ease-linear"
            : " absolute top-0 left-[-100%] duration-200"
        }
      >
        <div className={"py-[12px] text-white text-[14px] font-[400] px-2"}>
          <div className={" border-b-2 border-[#353535] py-[12px] "}>
            <div
              className={
                "h-[40px] flex items-center px-[24px] bg-event-100 hover:bg-event-200  rounded-lg"
              }
            >
              <MdHomeFilled className={"mr-[20px] text-[24px]  "} />
              <p>Home</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdOutlineExplore className={"mr-[20px] text-[24px] "} />{" "}
              <p>Explore</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdSlowMotionVideo className={"mr-[20px] text-[24px]"} />
              <p>Shorts</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdSubscriptions className={"mr-[20px] text-[24px]"} />{" "}
              <p>Subscriptions</p>
            </div>
          </div>
          <div className={" border-b-2 border-[#353535] py-[12px]"}>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdVideoLibrary className={"mr-[20px] text-[24px] "} />{" "}
              <p>Library</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <AiOutlineHistory className={"mr-[20px] text-[24px] "} />{" "}
              <p>History</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdOutlineWatchLater className={"mr-[20px] text-[24px]"} />
              <p>Watch Later</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <BiLike className={"mr-[20px] text-[24px]"} /> <p>Liked</p>
            </div>
          </div>
          <div className={" border-b-2 border-[#353535] py-[12px]"}>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <AiOutlineSetting className={"mr-[20px] text-[24px] "} />{" "}
              <p>Library</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <BsFlag className={"mr-[20px] text-[24px] "} /> <p>History</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <BiHelpCircle className={"mr-[20px] text-[24px]"} />
              <p>Watch Later</p>
            </div>
            <div
              className={
                "h-[40px] flex items-center px-[24px] hover:bg-event-100  rounded-lg"
              }
            >
              <MdOutlineFeedback className={"mr-[20px] text-[24px]"} />{" "}
              <p>Liked</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          search
            ? "absolute top-0 left-0 w-[100vw] h-[100vh] bg-[#282828] px-6  text-white"
            : "hidden"
        }
      >
        <div
          className={
            "w-full bg-[#282828] h-[52px] flex justify-between  items-center text-[24px] border-b border-[#464646]"
          }
        >
          <div onClick={SearchClick}>
            <BiArrowBack />
          </div>{" "}
          <input
            type="text"
            className={
              "text-[20px] w-[70%] bg-[#333333] px-2 py-1 text-white rounded-sm"
            }
            placeholder="Search"
          />
          <div className="bg-[#333333] p-[6px] rounded-full">
            <MdKeyboardVoice />
          </div>
        </div>
        <div className="my-4 font-[500] px-4 text-[18px] flex items-center ">
          <div className="text-[24px] mr-2">
            <AiOutlineHistory />
          </div>
          <p className="w-[70%]">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            possimus.
          </p>
        </div>
        <div className="my-4 font-[500] px-4 text-[18px] flex items-center ">
          <div className="text-[24px] mr-2">
            <AiOutlineHistory />
          </div>
          <p className="w-[70%]">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            possimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
