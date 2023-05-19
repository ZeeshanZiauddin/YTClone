import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchAPI } from "../utils/fetchAPI";
import { data } from "autoprefixer";
import Master from "../../components/Master";

const channel = () => {
  const router = useRouter();
  const channel = router.query.channelID;

  const [Cvideos, setCvideos] = useState([]);
  const [channelDetails, setchannelDetails] = useState([]);

  const maxresults = 50;
  useEffect(() => {
    fetchAPI(
      `search?part=snippet&channelId=${channel}&maxResults=${maxresults}&order=date`
    ).then((data) => {
      setCvideos(data.items);
    });
  }, []);
  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${channel}`).then((data) => {
      setchannelDetails(data?.items[0]);
    });
  }, []);

  return (
    <>
      <div className="h-[200px] bg-gradient-to-r from-[rgb(168,85,247)] to-[rgb(244,114,182)]">
        <div>
          <div className={`rounded-full `}></div>
        </div>
      </div>
      <div className="w-full overflow-y-scroll">
        <Master videos={Cvideos} />
      </div>
    </>
  );
};

export default channel;
