import { QuanLyPhimServices} from '../../services/QuanLyPhimService'
import { SET_DANH_SACH_PHIM } from "../../redux/types/movieType"
// import {MOVIE_START_FETCH} from '../../redux/types/movieType'



export const layDanhSachPhimAction = () => {


    return async (dispatch) => {
        try{
            //Sử dụng tham số thamSo
            const result = await QuanLyPhimServices.layDanhSachPhim();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type:SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        }catch (errors){
            console.log('errors',errors)
        }
    }
}