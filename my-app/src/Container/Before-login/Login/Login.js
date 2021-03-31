import React from 'react'
import '../Menu/Menu.css'
import '../Login/Login.css'
import hinh from '../Img/Backgroud/VN-vi-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import Footer from '../ContenBottom/ContenBottom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function Login() {
    return (

        < div className="wapper-user" >
            <div className="header-wapper">
                <div className="header-story">
                    <h2>NETFLIX</h2>
                </div>
            </div>
            <div className='header-wapper1'>
                <div className="wapper-content-header-login">
                    <h1>Đăng Nhập</h1>
                    <from>
                        <input className='inp-text' type='email' placeholder='Địa chỉ Email' required></input><br />
                        <input className='inp-text' type='password' placeholder='Mật khẩu'></input><br />
                        <Link to='/home'><input className='inp-submit' type='submit' placeholder='Đăng nhập' value='Đăng nhập'></input></Link>
                    </from>
                    <div className='loginfb-linkSignup'>
                        <Link><button><i class="fab fa-facebook-square"></i><span>Đăng nhập bằng tài khoản facebook</span></button> </Link>
                        <p className='title'>Bạn mới tham gia Netflix? <Link exact to='/'> <span className='link-Sigup'>Đăng ký ngay</span></Link></p>
                        <p className='content'>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. </p>
                    </div>
                </div>
            </div>
            <div className='img-wapper-user'>
                <img src={hinh} />
            </div>

        </div >
    )
}

export default Login
