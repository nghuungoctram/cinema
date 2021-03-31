import React from 'react'
import Slider from 'react-slick'
import Carousel from 'react-elastic-carousel';
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import './SlideShow.css'
import hinh1 from '../SlideShow/imgslideshow/landing-inner-1.jpg'
import hinh2 from '../SlideShow/imgslideshow/landing-port-img-1-1.jpg'
import hinh3 from '../SlideShow/imgslideshow/landing-port-img-2.jpg'
import hinh4 from '../SlideShow/imgslideshow/landing-port-img-3.jpg'
import hinh5 from '../SlideShow/imgslideshow/landing-port-img-5.jpg'
import hinh6 from '../SlideShow/imgslideshow/landing-inner-2.jpg'

function SlideShowImg() {
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     cssEase: "Linear"
    // }
    // return (
    //     <Slider {...settings}>

    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh1} />
    //         </div>
    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh2} />
    //         </div>

    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh3} />
    //         </div>

    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh4} />
    //         </div>
    //         {/* <ul className='social-icons'>
    //             <li><a href="#"><i className="fa fa-facebook"></i></a></li>
    //             <li><a href="#"><i className="fa fa-instagram"></i></a></li>
    //             <li><a href="#"><i className="fa fa-twitter"></i></a></li>
    //             <li><a href="#"><i className="fa fa-dribbble "></i></a></li>
    //         </ul> */}
    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh5} />
    //         </div>
    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    // <div className='card-wapper'>
    //     <div className='card'>
    //         <div className='card-image'>
    //             <img src={hinh6} />
    //         </div>

    //         <div className='details'>
    //             <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
    //         </div>
    //     </div>
    // </div>
    //     </Slider>
    // ) state = {
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 968, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        // { width: 1500, itemsToShow: 4 }

    ]
    return (
        <div>
            <Carousel breakPoints={breakPoints} >


                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh1} />
                        </div>
                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>
                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh2} />
                        </div>

                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>
                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh3} />
                        </div>

                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>
                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh4} />
                        </div>
                        {/* <ul className='social-icons'>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble "></i></a></li>
                    </ul> */}
                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>
                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh5} />
                        </div>
                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>
                <div className='card-wapper'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={hinh6} />
                        </div>

                        <div className='details'>
                            <h2> Jone Deaea <span className='job-title'>UI dev</span></h2>
                        </div>
                    </div>
                </div>




            </Carousel>
        </div>
    )
}

export default SlideShowImg



