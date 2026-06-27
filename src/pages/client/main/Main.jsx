import React from "react";
import SliderBanner from "../silders/SliderBanner";
import SliderCountries from "../silders/SliderCountries";
import Topic from "./Topic";
import Comments from "./Comments";
import SliderComment from "../silders/SliderComment";

function Main(props) {
  return (
    <div className="bg-[#191b24]">
      <SliderBanner />
      <div className="bg-[#191b24] text-white px-4 md:px-6">
        <Topic />
        <div className="">
          <SliderCountries />
          <SliderCountries />
          <SliderCountries />
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default Main;
