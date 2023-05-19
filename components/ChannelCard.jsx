import Link from "next/link";
import React from "react";

const ChannelCard = ({ detail }) => {
  return (
    <div className="flex w-full py-5 mx-5 my-5 border-b border-text-200">
      <div className="flex justify-center max-w-[350px]">
        <Link
          href={
            detail?.id?.channelId
              ? `/channel/${detail?.id?.channelId}`
              : "channel/sasd"
          }
        >
          <img
            src={detail?.snippet?.thumbnails?.high?.url}
            className=" max-w-[180px] rounded-full w-[200px]"
          />
        </Link>
      </div>

      <div className="grow mx-[3rem] flex justify-evenly flex-col">
        <div className="text-3xl font-bold text-white ">
          <Link
            href={
              detail?.id?.channelId
                ? `/channel/${detail?.id?.channelId}`
                : "channel/sasd"
            }
          >
            {detail?.snippet?.channelTitle}
          </Link>
        </div>
        <div className="lowercase text-s text-text-200">
          {"@" + detail?.snippet?.channelTitle} . 0.0M Subscribers
        </div>
        <div className="text-xs text-text-200 ChannelDetails">
          {detail?.snippet?.description.slice(0, 130) + "..."}
        </div>
      </div>
      <div className="w-[200px] flex items-center ">
        <button className="px-4 py-2 border-0 rounded-full h-fit bg-text-100 text-dark-100 ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ChannelCard;
