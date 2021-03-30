import React from 'react'
import '../HomePageTop/HomePageTop.css'
import hinh from '../ImgHP/ImgHP-item/landing-home-1-2.jpg'
function HomePageTop() {
    return (
        <div className='Container-HomePageTop'>
            <div className='HomePageTop'>
                <div className='HomePageTop-title'>
                    <p>STUNNING HOMEPAGE COLLECTION</p>
                    <h1>LIGHTS, CAMERA, PELICULA!  </h1>
                </div>
                <div className='Container-HomePageTop-item'>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <div className='absolute'> <span>01 MAIN HOME</span></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>

                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>
                    <div className='Container-HomePageTop-item-relative'>
                        <div className='item' >
                            <img src={hinh} />
                            <span>01 MAIN HOME</span>
                            <div className='absolute'></div>
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default HomePageTop
