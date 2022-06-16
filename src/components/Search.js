import React, { useEffect, useState } from 'react';
import OutTable from './OutTable';
import '../assets/css/search.css'

const Search = () => {
    const [data, setData] = useState([]);
    const [txtName, setTxtName] = useState("");
    const [txtID, setTxtID] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const [dataFind, setDataFind] = useState([]);
    useEffect(() => {
        const storagedData = JSON.parse(localStorage.getItem('data'));
        setData(storagedData);
    }, [])
    const onTextNameInputChange = (e) => {
        setTxtName(e.target.value.trim());
    }
    const onTextIDInputChange = (e) => {
        setTxtID(e.target.value.trim());
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (data) {
            let newData = [...data];
            newData.splice(5);
            for (let i = 0; i < data.length; i++) {
                if (i >= 5 && data[i][3].includes(txtID) && txtID !== "") {
                    newData.push(data[i]);
                }
                else if (i >= 5 && data[i][5].includes(txtName) && txtName !== "") {
                    newData.push(data[i]);
                }
                // }
                if (newData.length > 5) {
                    setDataFind((prev) => (prev = newData));
                }
                else {
                    setDataFind((prev) => (prev = []));
                }
                if (txtName || txtID) {
                    setIsEmpty(false);
                }
                else setIsEmpty(true)
            }
        }
    }
    return (
        <div>
            <form action="" >
                <div className="form-item">
                    <input type="text" name="" id="name" required="required" value={txtName} onChange={onTextNameInputChange} />
                    <label htmlFor="name">Họ tên</label>
                </div>
                <div className="form-item">
                    <input type="text" name="" id="student-code" required="required" value={txtID} onChange={onTextIDInputChange} />
                    <label htmlFor="student-code">Mã học sinh</label>
                </div>
                <button className='btn' onClick={handleClick}><p className='btn-name'>Tìm kiếm</p>
                    <span className="btn-border"></span>
                </button>
            </form>
            <p className={`notify ${isEmpty || dataFind.length < 1 ? "show" : ""}`}>Không có thông tin tìm kiếm...</p>
            <OutTable data={!isEmpty ? dataFind : []}></OutTable>
        </div>
    );
};
export default Search;