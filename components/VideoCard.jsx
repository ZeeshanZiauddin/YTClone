import React from "react";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  let current = new Date();
  let pubAt = new Date(snippet?.publishedAt);

  let min = (current.getTime() - pubAt.getTime()) / (1000 * 60);
  let hours = Math.floor((current.getTime() - pubAt.getTime()) / (1000 * 3600));
  let days = Math.floor(
    (current.getTime() - pubAt.getTime()) / (1000 * 3600 * 24)
  );

  let weeks = Math.floor(days / 7);
  let month = Math.floor(days / 30);
  let years = Math.floor(days / 365);

  return (
    <div className="flex flex-col p-1 bg-dark-100 flex-column mx-[10px] max-w-[500px]">
      <Link href={videoId ? `/play/${videoId}` : "play/demovideo"}>
        <div className="relative h-[0px] w-100 pt-[calc(100%*(9/16))] cursor-pointer">
          <img
            className="absolute top-0 w-[100%] h-[100%] object-cover rounded-2xl"
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
          />
        </div>
      </Link>
      <div className="px-3 py-2">
        <p className="mb-1 text-lg font-bold text-[#ffffffea] hover:text-[#fff]">
          <Link
            href={videoId ? `/play/${videoId}` : "play/demovideo"}
            className="cursor-pointer"
          >
            {snippet?.title.slice(0, 55) + "..." ||
              "abcdefghigklmnopqrstuvwxyz"}
          </Link>
        </p>
        <p className="font-semibold text-xs text-[#8e8a8a]">
          {snippet?.channelTitle || "abcdefghigklmnopqrstuvwxyz"}
        </p>
        <p className="font-semibold text-xs text-[#8e8a8a] mb-2">
          {days >= 365
            ? years + " years ago"
            : days >= 30
            ? month + " months ago"
            : days >= 14
            ? weeks + " weeks ago"
            : days >= 1
            ? days + " days ago"
            : min >= 59
            ? hours + " hours ago"
            : min}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
