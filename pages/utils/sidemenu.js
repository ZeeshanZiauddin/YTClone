import { BsMusicNote } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { IoLogoJavascript, IoLogoPython, IoLogoReact } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export const sidemenus = [
  { key: "New", icon: <MdHomeFilled className="mr-2" /> },
  { key: "react", icon: <IoLogoReact className="mr-2" /> },
  { key: "js", icon: <IoLogoJavascript /> },
  { key: "python", icon: <IoLogoPython className="mr-2" /> },
  { key: "songs", icon: <BsMusicNote className="mr-2" /> },
  { key: "facts", icon: <VscWorkspaceTrusted className="mr-2" /> },
];
