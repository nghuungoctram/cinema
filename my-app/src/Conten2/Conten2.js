import React from 'react'
import '../Conten2/Conten2.css'
import mobile from '../Img/img-content/mobile-0819.jpg'
function Conten2() {
    return (
        <div className='wapper-container-conten2'>
            <div className='container-conten2'>
                <div className='conten2'>
                    <div className='conten2-img'>
                        <img src={mobile} alt="" />
                    </div>
                    <div className='conten2-title'>
                        <h1>Tải xuống nội dung để xem ngoại tuyến.</h1>
                        <p>Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conten2
