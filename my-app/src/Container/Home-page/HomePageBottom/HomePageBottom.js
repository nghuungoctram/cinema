import React from 'react'
import './HomePageBottom.css'
import img1 from '../HomePageSlideShow/SlideShow/imgslideshow/landing-inner-1.jpg'
import img2 from '../HomePageSlideShow/SlideShow/imgslideshow/landing-inner-2.jpg'
import img3 from '../HomePageSlideShow/SlideShow/imgslideshow/landing-home-4.jpg'

function HomePageBottom() {
    return (
        <div className="HomePageSlideShow-content">
            <div className='HomePageSlideShow-content-wapper'>
                <div className='HomePageSlideShow-content-left'>
                    <div className='HomePageSlideShow-content-left-imgtop'>
                        <div className='HomePageSlideShow-content-left-imgtop-img1'>
                            <img src={img1} />
                        </div>
                        <div className='HomePageSlideShow-content-left-imgtop-img2'>
                            <img src={img2} />
                        </div>
                        <div className='HomePageSlideShow-content-left-imgtop-img3'>
                            <img src={img3} />
                        </div>
                    </div>
                    <div className='HomePageSlideShow-content-left-textbotton'>
                        <div className='HomePageSlideShow-left-textbotton'>
                            <p>BLOG</p>
                            <h1>LAUNCH YOUR BLOG & TELL YOUR FILM STORY WITH COMPLETE EASE </h1>
                            <button class="ex-tb">VIEW MORE</button>
                        </div>
                    </div>
                </div>
                <div className='HomePageSlideShow-content-right '>
                    <div className='HomePageSlideShow-content-right-textbotton'>
                        <div className='HomePageSlideShow-right-textbotton'>
                            <p>ECOMMERCE</p>
                            <h1>SET UP A STUNNING ONLINE STORE TODAY WITH PELICULA</h1>
                            <button class="ex-tb">VIEW MORE</button>
                        </div>
                    </div>
                    <div className='HomePageSlideShow-content-right-imgtop'>
                        <div className='HomePageSlideShow-content-right-imgtop-img1'>
                            <img src={img1} />
                        </div>
                        <div className='HomePageSlideShow-content-right-imgtop-img2'>
                            <img src={img2} />
                        </div>
                        <div className='HomePageSlideShow-content-right-imgtop-img3'>
                            <img src={img3} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePageBottom
