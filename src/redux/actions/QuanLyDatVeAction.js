
import { quanLyDatVeService } from './../../services/QuanLyDatVeService';
import { SET_CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB } from './types/QuanLyDatVeType';
import { ThongTinDatVe } from './../../_core/models/ThongTinDatVe';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';

export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => { 
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            // console.log(result);
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result,
            })
        } catch (error) {
            console.log(error);
        }
     }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => { 
        try {
            dispatch(displayLoadingAction);

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log(result);
            // Đặt vé thành công gọi API load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
            await dispatch({
                type: DAT_VE_HOAN_TAT,
            });
            await dispatch(hideLoadingAction);
            dispatch({type: CHUYEN_TAB});

        } catch (error) {
            dispatch(hideLoadingAction);
            console.log(error);
        }
     }
}