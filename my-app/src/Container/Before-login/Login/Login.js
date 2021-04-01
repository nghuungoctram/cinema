import React from 'react'
import '../Menu/Menu.css'
import '../Login/Login.css'
import hinh from '../Img/Backgroud/VN-vi-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import useLogin from '../Registration/useRegistration'
import validate from '../Registration/validateInfo'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Login = () => {

    const { handleChange, handleSubmit, values, errors } = useLogin(validate);
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
                    <form onSubmit={handleSubmit} className='form' noValidate>
                        <div className='form-inputs'>
                            <input
                                className='inp-text'
                                type='email'
                                name='username'
                                placeholder='Địa chỉ Email'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className='form-inputs'>

                            <input
                                className='inp-text'
                                type='password'
                                name='password'
                                placeholder='Mật khẩu'
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <input className='inp-submit' type='submit' placeholder='Đăng nhập' value='Đăng nhập'></input>
                    </form>
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
