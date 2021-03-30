import React from 'react'
import '../HomePageMenu/HomePageMenu.css'
import hinh from '../ImgHP/ImgHP-backgroud/Backgroud-homepage.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HomePageMenu() {
    return (
        <div className='HomePageMenu'>
            <div className='HomePageMenu-Container'>
                <div className='Img-homepage'>
                    <div className='homepage-menu'>
                        <h2>NETFLIX</h2>
                    </div>
                    <img src={hinh} />
                    <div className='wapper-title-menu'>
                        <div className='title-menu w7'>
                            <div className='title-menu-h1'>
                                <h1>N</h1>
                            </div>
                            <div className='container-title-menu-icon'>
                                <div className='title-menu-icon'>
                                    <i class="fab fa-facebook-square"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                    <i class="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                        <div className='title-menu w86'>
                            <div className='title-hpage'>
                                <h1>PELICULA</h1>
                                <p>A MODERN THEME FOR THE FILM INDUSTRY AND VIDEO PRODUCTION</p>
                                <div className='title-button'>
                                    <button class="ex-tb">VIEW MORE</button>
                                    <button class="ex-tb" class=" ex-bt"> GET PELICULA</button>
                                </div>
                            </div>
                        </div>
                        <div className='title-menu w7'> </div>
                    </div >

                </div>

            </div>
        </div >
    )
}

export default HomePageMenu
