export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Xin nhập tên tài khoản';
    }
    if (!values.email) {
        errors.email = 'Xin nhập địa chỉ email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Địa chỉ email không hợp lệ';
    }
    if (!values.password) {
        errors.password = 'Xin nhập mật khẩu';
    } else if (values.password.length < 5) {
        errors.password = 'Mật khẩu phải có ít nhất 5 ký tự';
    }

    if (!values.password2) {
        errors.password2 = 'Xin nhập mật khẩu';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Không trùng khớp';
    }
    return errors;


}