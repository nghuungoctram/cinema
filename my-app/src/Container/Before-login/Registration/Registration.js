import React from 'react'
import './Registration.css'
import hinh from '../Img/Backgroud/VN-vi-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import useRegistration from './useRegistration'
import validate from './validateInfo';

const Registration = () => {

    const { handleChange, handleSubmit, values, errors } = useRegistration(validate);


    return (
        < div className="wapper-user" >
            <div className="header-wapper">

                <div className="header-story">
                    <h2>NETFLIX</h2>
                </div>
            </div>
            <div className='header-wapper1'>
                <div className="wapper-content-header-login">

                    <h1>Đăng Ký</h1>
                    <form onSubmit={handleSubmit} className='form' noValidate>
                        <div className='form-inputs'>
                            <input
                                className='inp-text'
                                type='text'
                                name='username'
                                placeholder='Tên tài khoản'
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </div>

                        <div className='form-inputs'>

                            <input
                                className='inp-text'
                                type='email'
                                name='email'
                                placeholder='Địa chỉ email'
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
                        <div className='form-inputs'>

                            <input
                                className='inp-text'
                                type='password'
                                name='password2'
                                placeholder='Nhập lại mật khẩu'
                                value={values.password2}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        {/* <button className='form-input-btn' type='submit'>
                            Sign up
                </button> */}
                        <input className='inp-submit' type='submit' value='Đăng ký' />
                    </form>
                    <div className='loginfb-linkSignup'>
                        <button><i className="fab fa-facebook-square"></i><span>Đăng nhập bằng tài khoản facebook</span></button>
                        <p className='content'>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. </p>
                    </div>
                </div>
            </div>
            <div className='img-wapper-user'>
                <img src={hinh} />
            </div>
        </div >

    )

    // return (
    //     <div className='form-content-right'>
    //         <form onSubmit={handleSubmit} className='form' noValidate>
    //             <h1>
    //                 Get started with us today! Create your account by filling out the
    //                 information below.
    //         </h1>
    //             <div className='form-inputs'>
    //                 <label className='form-label'>Username</label>
    //                 <input
    //                     className='form-input'
    //                     type='text'
    //                     name='username'
    //                     placeholder='Enter your username'
    //                     value={values.username}
    //                     onChange={handleChange}
    //                 />
    //                 {errors.username && <p>{errors.username}</p>}
    //             </div>
    //             <div className='form-inputs'>
    //                 <label className='form-label'>Email</label>
    //                 <input
    //                     className='form-input'
    //                     type='email'
    //                     name='email'
    //                     placeholder='Enter your email'
    //                     value={values.email}
    //                     onChange={handleChange}
    //                 />
    //                 {errors.email && <p>{errors.email}</p>}
    //             </div>
    //             <div className='form-inputs'>
    //                 <label className='form-label'>Password</label>
    //                 <input
    //                     className='form-input'
    //                     type='password'
    //                     name='password'
    //                     placeholder='Enter your password'
    //                     value={values.password}
    //                     onChange={handleChange}
    //                 />
    //                 {errors.password && <p>{errors.password}</p>}
    //             </div>
    //             <div className='form-inputs'>
    //                 <label className='form-label'>Confirm Password</label>
    //                 <input
    //                     className='form-input'
    //                     type='password'
    //                     name='password2'
    //                     placeholder='Confirm your password'
    //                     value={values.password2}
    //                     onChange={handleChange}
    //                 />
    //                 {errors.password2 && <p>{errors.password2}</p>}
    //             </div>
    //             <button className='form-input-btn' type='submit'>
    //                 Sign up
    //         </button>
    //             <span className='form-input-login'>
    //                 Already have an account? Login <a href='#'>here</a>
    //             </span>
    //         </form>
    //     </div>
    // );


}

export default Registration
