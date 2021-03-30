import React from 'react'
import '../Menu/Menu.css'
import hinh from '../Img/Backgroud/VN-vi-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Menu() {
    return (
        < div className="wapper" >
            <div className="header-wapper">

                <div className="header-story">
                    <h2>NETFLIX</h2>
                    <div className="header-right">
                        <select class="fas fa-globe" className='language' placeholder="lang-switcher">
                            <option value="/vn/" data-language="vi" data-country="VN">Tiếng Việt</option>
                            <option selected="" value="/vn-en/" data-language="en" data-country="VN">English</option>
                        </select>
                        <Link to='/login'> <button className='login'>Đăng nhập</button></Link>
                    </div>
                </div>
            </div>

            <div className='header-wapper1'>
                <div className="wapper-content-header">
                    <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
                    <h2>Xem ở mọi nơi, huỷ bất cứ lúc nào.</h2>
                    <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoạc kích hoạt lại tư cách thành viên của bạn.</h3>
                    <input type='email' placeholder='Địa chỉ email'></input>
                    <Link to='/registration' ><button>BẮT ĐẦU ></button></Link>
                </div>

            </div>

            <div className='img-wapper'>
                <img src={hinh} />
            </div>
        </div >

    )
}

export default Menu

