import React from 'react'
import '../Content1/Conten1.css'
import car from '../Img/img-content/tv.png'

function Conten1() {
    return (
        <div className='wapper-container-conten1'>
            <div className='container-conten1'>
                <div className='conten1'>
                    <div className='conten1-title'>
                        <h1>Thưởng thức trên TV của bạn.</h1>
                        <p>Xem TV thông minh, PlayStation, Xbox, Chromecacst, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.</p>
                    </div>
                    <div className='conten1-img'>
                        <div className='container-img'>
                            <img src={car} alt="" />
                        </div>
                        <div className='conten1-video'>
                            <video loop autoPlay muted playsInline>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4' />
                            </video>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Conten1
