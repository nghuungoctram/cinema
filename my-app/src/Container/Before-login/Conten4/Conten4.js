import React, { Component } from 'react'
import '../Conten4/Conten4.css'


class Conten4 extends Component {
    constructor() {
        super()
        this.state = {
            showMe: false,
            showMe1: false,
            showMe2: false,
            showMe3: false,
            showMe4: false,
        }
    }

    operation() {
        this.setState({
            showMe: !this.state.showMe,
        })
    }
    operation1() {
        this.setState({
            showMe1: !this.state.showMe1
        })
    }
    operation2() {
        this.setState({
            showMe2: !this.state.showMe2
        })
    }
    operation3() {
        this.setState({
            showMe3: !this.state.showMe3
        })
    }
    operation4() {
        this.setState({
            showMe4: !this.state.showMe4
        })
    }

    render() {
        return (
            <div className='wapper-container-conten4' >
                <div className='container-conten4'>
                    <div className='conten4'>
                        <h1>Câu hỏi thường gặp</h1>
                        <ul>
                            <li>

                                <button className='button-coslapse' onClick={() => this.operation()}>Netflix là gì?</button>
                                {
                                    this.state.showMe ?
                                        <div>
                                            <p>Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.</p>
                                            <p>Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!
</p>
                                        </div>
                                        : null
                                }
                            </li>
                            <li>
                                <button className='button-coslapse' onClick={() => this.operation1()}>Tôi phải trả bao nhiêu tiền để xem Netflix</button>
                                {
                                    this.state.showMe1 ?
                                        <div>
                                            <p>Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 180.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.</p>
                                        </div>
                                        : null
                                }
                            </li>
                            <li>
                                <button className='button-coslapse' onClick={() => this.operation2()}>Tôi có thể xem ở đâu</button>
                                {
                                    this.state.showMe2 ?
                                        <div>
                                            <p>Xem mọi lúc, mọi nơi và không bị giới hạn số lượng thiết bị. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.</p>
                                            <p>Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.</p>
                                        </div>

                                        : null
                                }
                            </li>
                            <li>
                                <button className='button-coslapse' onClick={() => this.operation3()}>Làm thế nào để huỷ</button>
                                {
                                    this.state.showMe3 ?
                                        <div>
                                            <p>Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.</p>

                                        </div>

                                        : null
                                }
                            </li>
                            <li>
                                <button className='button-coslapse' onClick={() => this.operation4()}>Tôi có gì để xem trên Netflix</button>
                                {
                                    this.state.showMe4 ?
                                        <div>
                                            <p>Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.</p>

                                        </div>

                                        : null
                                }
                            </li>
                        </ul>
                        <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoạc kích hoạt lại tư cách thành viên của bạn.</h3>
                        <from className="input-email">

                            <input type='email' placeholder='Địa chỉ email'></input>
                            <button>BẮT ĐẦU ></button>
                        </from>

                    </div>
                </div>
            </div>
        )
    }
}






export default Conten4



