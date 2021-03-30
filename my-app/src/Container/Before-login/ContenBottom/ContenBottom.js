import React from 'react'
import '../ContenBottom/ContenBottom.css'

function ContenBottom() {
    return (
        <div className='Container-wapper'>
            <div className='Container'>
                <h3>Bạn có câu hỏi? liên hệ với chúng tôi.</h3>
                <div className='Container-ContentBottom'>
                    <div className='Container-ContentBottom-item'>
                        <ul>
                            <li>
                                <a>Câu hỏi thường gặp</a>
                            </li>
                            <li>
                                <a>Quan hệ với nhà đầu tư</a>
                            </li>
                            <li>
                                <a>Quyền riêng tư</a>
                            </li>
                            <li>
                                <a>Kiểm tra tốc độ</a>
                            </li>
                        </ul>
                    </div>
                    <div className='Container-ContentBottom-item'>
                        <ul>
                            <li>
                                <a>Trung tâm trợ giúp</a>
                            </li>
                            <li>
                                <a>Việc làm</a>
                            </li>
                            <li>
                                <a>Tuỳ chọn cookie</a>
                            </li>
                            <li>
                                <a>Thông báo pháp lí</a>
                            </li>
                        </ul>
                    </div>
                    <div className='Container-ContentBottom-item'>
                        <ul>
                            <li>
                                <a>Tài khoản</a>
                            </li>
                            <li>
                                <a>Các cách xem</a>
                            </li>
                            <li>
                                <a>Thông tin doanh nghiệp</a>
                            </li>
                            <li>
                                <a>Tác phẩm của Netlfix</a>
                            </li>
                        </ul>
                    </div>
                    <div className='Container-ContentBottom-item'>
                        <ul>
                            <li>
                                <a>Trung tâm đa phương tiện</a>
                            </li>
                            <li>
                                <a>Điều khoản để sử dụng</a>
                            </li>
                            <li>
                                <a>Liên hệ với chúng tôi</a>
                            </li>
                            <li>
                                <a>Kiểm tra tốc độ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='button-p'>
                    <select class="fas fa-globe" className='button-p1' placeholder="lang-switcher">
                        <option value="/vn/" data-language="vi" data-country="VN">Tiếng Việt</option>
                        <option selected="" value="/vn-en/" data-language="en" data-country="VN">English</option>
                    </select>
                    <p>Netflix Việt Nam</p>
                </div>
            </div>
        </div>

    )
}

export default ContenBottom
