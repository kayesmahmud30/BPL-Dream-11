import React from "react";
import bannerImg from "../../../assets/banner-main.png"

const Banner = () => {
  return (
    <div className="min-h-[60vh] bg-linear-to-r from-purple-500 to-purple-300 container mx-auto ">
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
