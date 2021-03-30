import React, { Fragment } from 'react'
import '../HomePageSlideShow/HomePageSlideShow.css'
import hinh1 from '../ImgHP/ImgHP-backgroud/landing-img-4.png'
import hinh2 from '../ImgHP/ImgHP-backgroud/landing-background-img-2-scaled.jpg'
import Slider from '../HomePageSlideShow/SlideShow/SlideShow'

function HomePageSlideShow() {
    return (
        <div className='HomePageSlideShow'>
            <div className='HomePageSlideShow-Container HomePageTop' >
                <div className='HomePageSlideShow-img'>
                    <img src={hinh1} />
                    <div className='HomePageSlideShow-Container-img-1'>
                        <img src={hinh2} />
                        <div className='HomePageSlideShow-Container-title-item'>
                            <div className='HomePageSlideShow-title'>
                                <div className='HomePageSlideShow-title-item'>
                                    <p>PORTFOLIO LISTS AND SINGLES</p>
                                    <h1>SHOWCASE YOUR WORK </h1>
                                </div>
                            </div>
                            <div className='HomePageSlideShow-SlideShow'>
                                <div className='HomePageSlideShow-SlideShow-item'>
                                    <div className='HomePageSlideShow-border'>
                                        <div className='border'></div>
                                    </div>
                                    <div className='HomePageSlideShow-item'>
                                        {/* <Slider /> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}




export default HomePageSlideShow
















