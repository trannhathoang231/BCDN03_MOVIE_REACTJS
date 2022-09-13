import { quanLyRapService } from "../../services/QuanLyRapService";
import {SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU} from './types/QuanLyRapType';



export const layDanhSachHeThongRapAction = async (dispatch) => {
    
        try{
            const result = await quanLyRapService.layDanhSachHeThongRap();
            if(result.length) {
                dispatch({
                    type:SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result
                })
            }
            console.log(result,'result')
        }catch(errors) {
            console.log('errors',errors)
        }

    
    
} 

export const layThongTinChiTietPhim = (id) =>{

    return async dispatch =>{
            try {
                const result = await quanLyRapService.layThongtinLichChieu(id);

                dispatch({
                    type : SET_CHI_TIET_PHIM,
                    filmDetail: result
                })
                console.log(result)
            } catch (error) {
                console.log(error)
            }
    }

}