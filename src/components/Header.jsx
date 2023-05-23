import React from "react";
import logo from "../images/icons8-google-docs.svg";
import star from "../images/grade_FILL0_wght400_GRAD0_opsz48.svg";
import drive from "../images/drive_file_move_FILL0_wght400_GRAD0_opsz48.svg";
import cloud from "../images/cloud_done_FILL0_wght400_GRAD0_opsz48.svg";
import comment from "../images/comment_FILL0_wght400_GRAD0_opsz48.svg";
import history from "../images/history_FILL0_wght400_GRAD0_opsz48.svg";
import meet from "../images/videocam_FILL0_wght400_GRAD0_opsz48.svg";
import lock from "../images/lock_FILL0_wght400_GRAD0_opsz48.svg";

import TemporaryDrawer from "./Sidebar";

import CustomizedMenus from "./Menu";

const Header = () => {
  return (
    <div className="header ql-toolbar">
      <div className="left">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="navbar">
          <div className="header1">
            <div className="title">Untitled Document</div>
            <div className="images">
              <img src={star} alt="star" />
              <img src={drive} alt="drive" />
              <img src={cloud} alt="cloud" />
            </div>
          </div>
          <div className="header2">
            <CustomizedMenus />
          </div>
        </div>
      </div>
      <div className="right">
        <img src={history} alt="history" />
        <img src={comment} alt="comment" />
        <img src={meet} alt="meet" />
        <a href="#" className="button">
          <div className="button-inside">
            <img src={lock} alt="lock" />
            <p>Share</p>
          </div>
        </a>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
