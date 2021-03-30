import React from 'react'
import '../Conten3/Conten3.css'
import device from '../Img/img-content/device-pile.png'
function Conten3() {
    return (
        <div className='wapper-container-conten3'>
            <div className='container-conten3'>
                <div className='conten3'>
                    <div className='conten3-title'>
                        <h1>Xem ở mọi nơi.</h1>
                        <p>Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV mà không phải trả thêm phí.</p>
                    </div>
                    <div className='conten3-img'>
                        <div className='container3-img'>
                            <img src={device} alt="" />
                        </div>
                        <div className='conten3-video'>
                            <video loop autoPlay muted playsInline>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type='video/mp4' />
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Conten3
