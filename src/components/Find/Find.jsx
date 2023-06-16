import React from "react";
import "../Find/find.css"

import { useLocalStore } from "mobx-react-lite";
import { CheckboxDropdown } from "../CheckboxDropdown/CheckboxDropdown";
import SelectionDropdown from "../SelectionDropdown/SelectionDropdown";

const locate = [
    {
        city : "Hồ Chí Minh",
        district : [
            "Quận 1",
            "Quận 2",
            "Quận 3",
            "Quận 4",
            "Quận 5",
            "Quận 6",
            "Quận 7",
        ]
    },
    {
        city : "Đà Lạt",
        district : [

        ]
    },
    {
        city : "Vũng Tàu",
        district : [

        ]
    },
    {
        city : "Cần Thơ",
        district : [

        ]
    },
]

const Find = () => {

    const state = useLocalStore(() => ({
        items: [
            { id: "em", label: "Sinh nhật", checked: false },
            { id: "f", label: "Profile", checked: false },
            { id: "mw", label: "Đám cưới", checked: false },
            { id: "cp1", label: "Chân dung", checked: false },
            { id: "cp2", label: "Phong cảnh", checked: false },
            { id: "cp3", label: "Sự kiện", checked: false },
            { id: "cp4", label: "Gia đình", checked: false },
            { id: "cp5", label: "Sản phẩm", checked: false },
            { id: "cp6", label: "Trẻ nhỏ", checked: false },
            { id: "cp7", label: "Khác", checked: false }
        ]
    }));

    return (
        <div className="find">
            <div className="find_section">
                <div>Chủ đề chụp</div>
                <CheckboxDropdown items={state.items} />
            </div>
            <div className="find_section">
                <div>Vị trí chụp</div>
            </div>
            <div className="find_section">
                <div>Ngân sách</div>
            </div>
            <div className="find_button">
                <div>Tìm kiếm</div>
            </div>
        </div>
    )
}

export default Find