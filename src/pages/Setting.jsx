import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/setting.css"
import PhotograppherInfor from "../components/PhotographerInfor/PhotographerInfor";
import SettingNavbar from "../components/SettingNavbar/SettingNavbar";

const Setting = (props) => {
    return(
        <div className="setting">
            <PhotograppherInfor />
            <div className="setting_content">
                <SettingNavbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Setting