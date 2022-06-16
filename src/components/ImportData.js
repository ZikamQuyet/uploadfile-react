import React, { useEffect, useState, } from 'react';
import logo from '../assets/image/React_logo_wordmark.jpg';
import * as XLSX from "xlsx";
import '../assets/css/import-data.css';
import OutTable from './OutTable';
import { UploadOutlined } from '@ant-design/icons';
const TODO_APP_STORAGE_KEY_1 = 'data';
const TODO_APP_STORAGE_KEY_2 = 'cols';
const storagedData = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY_1));
const storagedLos = JSON.parse(localStorage.getItem(TODO_APP_STORAGE_KEY_2));
const ImportData = () => {
    const [data, setData] = useState({
        dataInput: storagedData,
        cols: storagedLos
    });
    const [isClick, setIsClick] = useState(false);
    useEffect(() => {
        localStorage.setItem(TODO_APP_STORAGE_KEY_1, JSON.stringify(data.dataInput));
        localStorage.setItem(TODO_APP_STORAGE_KEY_2, JSON.stringify(data.cols));
    }, [data]);

    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();


        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const rABS = !!reader.readAsBinaryString;
            const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
            const wsName = wb.SheetNames[0];
            const ws = wb.Sheets[wsName];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            setData({
                dataInput: data,
                cols: make_cols(ws["!ref"])
            });
        };
        reader.readAsBinaryString(file);
        // -----------------------------------------------------
        // let  label	 = e.nextElementSibling,
        //  labelVal = label.innerHTML;
        // var fileName = '';
        // if (this.files && this.files.length > 1)
        //     fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        // else
        //     fileName = e.target.value.split('\\').pop();

        // if (fileName)
        //     label.querySelector('span').innerHTML = fileName;
        // else
        //     label.innerHTML = labelVal;
        // -----------------------------------------------------

        setIsClick(true);
    };
    const make_cols = (refStr) => {
        let o = [],
            C = XLSX.utils.decode_range(refStr).e.c + 1;
        for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
        return o;
    };

    return (
        <div>
            <div className="logo-img">
                <div className="img-wrapper"></div>
                <div className="img" style={{ backgroundImage: `url(${logo})` }}></div>
            </div>
            <div className="import btn">
                <label htmlFor='file' className='btn-name'><UploadOutlined style={{ marginRight: "5px" }} />Thêm File...</label>
                <span className="btn-border"></span>
                <input type="file" onChange={onChange} name="file" id="file" className="input-file" hidden />
            </div>
            <OutTable data={data.dataInput && isClick ? data.dataInput : []}></OutTable>
        </div>
    );
};

export default ImportData;