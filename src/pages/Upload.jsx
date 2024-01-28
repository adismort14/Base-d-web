import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import UploadComp from "../components/UploadComp";

const Upload = () => {
  return (
    <>
      <div className="w-[1440px] h-[1024px] bg-[#FAFAFB]">
        <SideBar />
        <div className="absolute left-[248px] top-[49px]">
          <NavBar />
        </div>
        <div className="absolute left-[518px] top-[219px]">
          <UploadComp />
        </div>
      </div>
    </>
  );
};

export default Upload;