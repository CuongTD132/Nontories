import React from "react";
import "../PhotographerInfor/photographerInfor.css"

import avt from "../../assets/picture/avt-default.jpg"
import star from "../../assets/picture/personalPicture/star.png"

const PhotograppherInfor = (props) => {
    return (
        <div className="phographer">
            <div className="phographer_avt">
                <img src={avt} alt={avt} />
            </div>
            <div className="phographer_infor">
                <div className="phographer_infor_name">
                    Thập Bình Phương
                </div>
                <div className="phographer_infor_fame">
                    <div className="phographer_infor_fame_follow">
                        12k+ theo dõi
                    </div>
                    <div className="phographer_infor_fame_star">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div className="phographer_infor_fame_rating">
                        5.0
                    </div>
                </div>
                <div className="phographer_infor_pack">
                    (Gói FotoPRO)
                </div>
            </div>
            <div className="phographer_detail">
                <div className="phographer_detail_content">
                    <div className="phographer_detail_content_title">Nơi làm việc</div>
                    <div className="phographer_detail_content_text">Hồ Chí Minh</div>
                </div>
                <div className="phographer_detail_content">
                    <div className="phographer_detail_content_title">Đơn hàng gần nhất</div>
                    <div className="phographer_detail_content_text">1 tuần trước</div>
                </div>
                <div className="phographer_detail_content">
                    <div className="phographer_detail_content_title">Đã được kết nối với</div>
                    <div className="phographer_detail_content_text">1300 dự án</div>
                </div>
                <div className="phographer_detail_content">
                    <div className="phographer_detail_content_title">Thời gian phản hồi trung bình</div>
                    <div className="phographer_detail_content_text">2 giờ</div>
                </div>
            </div>
        </div>
    )
}

export default PhotograppherInfor