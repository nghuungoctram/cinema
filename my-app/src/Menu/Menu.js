import React, { useState } from 'react'
import '../Menu/Menu.css'

function Menu() {
    const [click, setClick] = useState(false);
    const hanleClick = () => setClick(!click)
        ;
    return (
        <div className="wapper">
            <div className="header-wapper">
                <div className="header-story">
                    <h2>NETFLIX</h2>
                    <div className="header-right">

                        <button onClick={hanleClick} className='language'><span><i class="fas fa-globe"></i></span>Tiếng việt<i class="fas fa-angle-down"></i></button>
                        <i onClick={click ?
                            <div className='language'>
                                <button>Tiếng việt</button>
                                <button>Tiếng anh</button>
                            </div> :
                            null


                        } />




                        <button className='login'>Đăng nhập</button>
                    </div>
                </div>
            </div>
            <div className='header-wapper'>
                <div className="wapper-content-header">
                    <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.</h1>
                    <h2>Xem ở mọi nơi, huỷ bất cứ lúc nào.</h2>
                    <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoạc kích hoạt lại tư cách thành viên của bạn.</h3>
                    <input type='email' placeholder='Địa chỉ email'></input>
                    <button>BẮT ĐẦU ></button>
                </div>
            </div>
            <div className='img-wapper'>
            </div>
        </div>

    )
}

export default Menu

