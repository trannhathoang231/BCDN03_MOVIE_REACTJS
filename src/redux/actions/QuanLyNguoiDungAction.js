
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDungService';
import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, SET_THONG_TIN_TAI_KHOAN_ADMIN } from './types/QuanLyNguoiDungType';
import { history } from '../../App';
import { QuanLyNguoiDungReducer } from '../reducers/QuanLyNguoiDungReducer';

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            dispatch({
                type: DANG_NHAP_ACTION,
                thongTinDangNhap: result,
            })

            alert("Đăng nhập thành công!");
            history.push("/");
            // console.log('result', result);

            // console.log("result", result);
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();

            dispatch({
                type: SET_THONG_TIN_NGUOI_DUNG,
                thongTinNguoiDung: result,
            })

            // console.log("result", result.thongTinDatVe);
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);

            // console.log(result);
            alert("Đăng ký thành công!");
            history.push("/login");

        } catch (error) {
            console.log(error);
            alert("Xảy ra lỗi, vui lòng kiểm tra lại thông tin!");
        }
    }
}


export const layDanhSachNguoiDungAction = (taiKhoan='') => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(taiKhoan);

            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                arrUser: result,
            })

            // console.log("result", result);
        } catch (error) {
            console.log("error", error);
        }
    }
}


export const themNguoiDungAction = (formData) => {
    return async (dispatch) => {
        try{
            let result = await quanLyNguoiDungService.themNguoiDung(formData);
            alert("Thêm người dùng thành công!")
            console.log('result',result);

        }catch(errors) {
            console.log('errors',errors)
        }
    }
}


export const layThongTinTaiKhoanAdminAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinTaiKhoanAdmin(taiKhoan);

            // console.log("result", result);

              dispatch({
                type: SET_THONG_TIN_TAI_KHOAN_ADMIN,
                thongTinTaiKhoanAdmin: result,
            })
        } catch (error) {
            console.log("error", error);
        }
    }
}

export const capNhatThongTinNguoiDungAction = (formData) => {
    return async () => {
        try{
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(formData);
            alert("Cập nhật thành công")

            console.log('result' , result)

        }catch (error){
            console.log('error',error);
        }
    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            console.log('result',result)
            alert("Xóa thành công")

            //Sau khi xóa load lại danh sách người dùng
            dispatch(layDanhSachNguoiDungAction())
        }catch (error) {
            console.log('error',error);
        }
    }
}