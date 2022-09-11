import { quanLyRapService } from "../../services/QuanLyRapService";
import {SET_HE_THONG_RAP_CHIEU} from './types/QuanLyRapType';



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