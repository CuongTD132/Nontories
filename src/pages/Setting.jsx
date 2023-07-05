import React, { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "../styles/setting.css"
import PhotograppherInfor from "../components/PhotographerInfor/PhotographerInfor";
import SettingNavbar from "../components/SettingNavbar/SettingNavbar";
import { getAccountInfor } from "../shared/firebase/firebase";
import { UserContext } from '../context/UserContext';

const Setting = (props) => {

    const [userData, setUserData] = useState()
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/signIn")
        }
        else {
            getAccountInfor()
                .then((res) => {
                    res.forEach((doc) => {
                        if (doc.data().uid === user.user.uid) {
                            setUserData(doc.data())
                        }
                    })
                })
        }
    })
    console.log(userData);
    console.log(user.user.uid);

    return (
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