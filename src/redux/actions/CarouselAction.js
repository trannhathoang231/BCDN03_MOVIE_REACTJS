
import { quanLyPhimService } from "../../services/QuanLyPhimService"

export const getCarouselAction = async (dispatch) => {
        try{
            const result = await quanLyPhimService.layDanhSachBanner();
            dispatch({
               type: 'SET_CAROUSEL',
               arrImg: result
           })
        }catch (error){
            
        }
   }