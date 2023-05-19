import React from "react";
import ChannelCard from "./ChannelCard";
import Loader from "./loader";
import VideoCard from "./VideoCard";

const Master = ({ videos }) => {
  return (
    <div
      className={
        " w-full flex flex-wrap  bg-dark-100  h-[100vh] d-flex justify-center items-center"
      }
    >
      {videos.map((item, idx) => (
        <div
          className={item.id.channelId ? "w-full" : "max-w-[300px]"}
          key={idx}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard detail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Master;
