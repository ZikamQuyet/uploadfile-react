import React from 'react';
import '../assets/css/nav-bar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <ul>
                <li className='btn'>
                    <Link className='btn-name' to="/">Thêm danh sách học sinh</Link>
                    <span className="btn-border"></span>
                </li>
                <li className='btn'>
                    <Link className='btn-name' to="/search">Tìm kiếm học sinh</Link>
                    <span className="btn-border"></span>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;