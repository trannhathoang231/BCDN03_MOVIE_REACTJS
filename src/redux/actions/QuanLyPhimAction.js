
import { quanLyPhimService} from '../../services/QuanLyPhimService'
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType';
// import { SET_DANH_SACH_PHIM } from "../../redux/reducers/QuanLyPhimReducer"



export const layDanhSachPhimAction = () => {


    return async (dispatch) => {
        try{
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachPhim();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type:SET_DANH_SACH_PHIM,
                arrFilm: result
            })
            console.log(result)
        }catch (errors){
            console.log('errors',errors)
        }
    }
}
