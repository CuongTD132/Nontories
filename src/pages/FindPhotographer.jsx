import React, { useEffect, useState } from "react";
import Find from "../components/Find/Find"
import PersonalCard from "../components/PersonalCard/PersonalCard";
import "../styles/findPhotographer.css"

import image from "../assets/picture/findPagePicture/image.png"
import avt from "../assets/picture//personalPicture/phuongPic.png"
import { getAllPhotographers } from "../shared/firebase/firebase";

const FindPhotographer = () => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        getAllPhotographers()
        .then((res) => setData(res))
    }, [])
    return (
        <div className="findPhotographer">
            <div className="findPhotographer_header">
                <h1>Tìm thợ chụp ảnh ngay bây giờ</h1>
                <p><span>footoviet</span> sẽ sắp xếp những thợ chụp ảnh phù hợp với bạn dựa trên những bộ lọc bên dưới </p>
                <Find />
            </div>
            <div className="findPhotographer_sorting"></div>
            <div className="findPhotographer_body">
                {data.map((item, key) => {
                    return(
                        <PersonalCard {...item} />
                    )
                })}
            </div>
        </div>
    )
}

export default FindPhotographer