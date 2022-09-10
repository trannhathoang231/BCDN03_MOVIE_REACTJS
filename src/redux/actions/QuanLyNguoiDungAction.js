
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung';
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from './types/QuanLyNguoiDungType';
import { history } from '../../App';

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