import React from 'react';

const OutTable = (props) => {
    // const cols = JSON.parse(localStorage.getItem('cols'));

    return (
        <div className="table-responsive">
            <table className={`table table-striped ${props.data ? "show" : ""}`}>
            {/* <thead>
                    <tr>
                        {cols.map((c) => (
                            <th key={c.key}>{c.name}</th>
                        ))}
                    </tr>
                </thead> */}
            {/* <tbody>
                {props.data.map((r, i) => (
                    <tr key={i}>
                        {cols.map((c) => (
                            <td key={c.key}>{r[c.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody> */}

            <tbody>
                    {
                        props.data.filter(data => data.length > 0).map((r, i) => (
                            <tr key={i}>
                                {r.filter(x => x !== null).map((a, i) => (
                                    <td key={i}
                                        colSpan={
                                            a==='SỞ GDĐT HÀ NỘI'? 6 :
                                                a === "DANH SÁCH HỌC SINH ĐĂNG KÝ DỰ TUYỂN VÒNG 2" ? 17 :
                                                    a === "TRƯỜNG THPT Nguyễn Trãi" ? 6 :
                                                        a === "NĂM HỌC 2022-2023" ? 17 :
                                                            a === "Ngày sinh" ? 3 :
                                                                a === "Điểm sơ tuyển vòng 1" ? 8 : null

                                        }
                                        rowSpan={
                                            a === "STT" || a === "Trường Tiểu học" || a === "Quận/Huyện" || a === "Mã học sinh" || a === "Lớp" || a === "Họ và tên" || a === "Giới" || a === "Nơi sinh" || a === "Dân tộc" || a === "Hộ khẩu thường trú" || a === "Điện thoại liên hệ" || a === "Ghi chú" ? 2 : ""
                                        }
                                    >{a}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
        </table>
        </div>
    );
};

export default OutTable;