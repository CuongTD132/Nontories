import React from "react";

import "../SettingInformation/settingInformation.css"
import editButton from "../../assets/picture/editButton.png"

const SettingInformation = () => {
    return (
        <div className="setting_information">
            <h1 className="setting_information_header">TÀI KHOẢN</h1>
            <div className="setting_information_individua">
                <div className="setting_information_individua_header">
                    <h3>Thông tin  cá nhân</h3>
                    <img className="setting_information_editButton" src={editButton} alt="" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Họ và tên*</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Tên tài khoản*</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Thay đổi mật khẩu</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Họ tên trên CMND</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Số CMND</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Số điện thoại</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Thành phố*</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
                <div className="setting_information_individua_content">
                    <p className="setting_information_individua_content_title">Địa chỉ</p>
                    <input type="text" className="setting_information_individua_content_input" />
                </div>
            </div>
            <div className="setting_information_profile">
                <div className="setting_information_profile_header">
                    <h3>Hồ sơ làm việc</h3>
                    <img className="setting_information_editButton" src={editButton} alt="" />
                </div>

            </div>
            <div className="setting_information_button">
                <button>Lưu thay đổi</button>
            </div>
        </div>
    )
}

export default SettingInformation