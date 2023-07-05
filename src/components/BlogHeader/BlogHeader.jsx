import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import { UserContext } from '../../context/UserContext';
import { logout, authStateListener, } from "../../shared/firebase/firebase";

import logo from "../../assets/picture/fotovietIcon.png"
import faceIcon from "../../assets/picture/header_facebook_icon.png"
import avt from "../../assets/picture/default_avt.jpg"

import "./blogHeader.css"

const BlogHeader = () => {
    const { user, updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout()

            .then(() => {
                updateUser(null)
                navigate("/signIn")
            })
            .catch((error) => {
                // Handle any error that occurred during logout
                console.log("Logout error:", error);
            });
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="blogHeader">
            <div className="header_navigate">
                <Link to='/' className="header_navigate_content header_navigate_icon">
                    <img src={logo} alt="fotoviet logo" />
                    <p>foto<span>viet</span></p>
                </Link>
                <a href="https://www.facebook.com/profile.php?id=100092636657903" target="_blank" rel="noopener">
                    <img className="header_navigate_face_icon" src={faceIcon} alt="Facebook" />
                </a>

            </div>
            <div className="header_sign">
                <Link to='/find' className="header_navigate_content header_navigate_find">
                    Tìm thợ chụp ảnh
                </Link>
                <a href="https://www.fotoviet.unaux.com/" target="_blank" rel="noopener" className="header_navigate_content header_navigate_blog">
                    Blog
                </a>
                {user ? (
                    <div className="nav_header">
                        <Dropdown className="dropdown_modal" show={showDropdown} onToggle={toggleDropdown}>
                            <Dropdown.Toggle className="nav_header_dropdown" variant="secondary" id="dropdown-basic">
                                <div className="nav_header_avatar">
                                    <img
                                        className="header_navigate_face_icon"
                                        src={avt}
                                        alt="Facebook"
                                    />
                                    <span className="nav_header_username">{user.accountName}</span>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/setting/thong-tin-ca-nhan">Settings</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button onClick={handleLogout}>Logout</button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ) : (
                    <Link to="/signIn" className="header_signup">
                        Đăng nhập
                    </Link>
                )}

                {/* <Link to='/signUp' className="header_signup">
                    Đăng ký
                </Link> */}
            </div>
        </div>
    )
}

export default BlogHeader