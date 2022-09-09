
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

            history.goBack()

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

            // console.log("result", result);
        } catch (error) {
            console.log("error", error);
        }
     }
}