
import { quanLyPhimService } from '../../services/QuanLyPhimService'
// import { SET_DANH_SACH_PHIM } from "../../redux/types/movieType"
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType"
import {history} from '../../App'



export const layDanhSachPhimAction = (tenPhim = '') => {


    return async (dispatch) => {
        try{
            //Sử dụng tham số thamSo

            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);


            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type:SET_DANH_SACH_PHIM,
                arrFilm: result
            })

        }catch (error){
            console.log('errors',error)
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try{
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);
            // console.log(result);
            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result

            })
            

        }catch (errors){
            console.log('errors',errors)
        }
    }
}

export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try{


            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result);

            // dispatch(layDanhSachPhimAction())
            // history.push('/admin/films')
            
            
        }catch(errors) {
            console.log(errors)
        }
    }
}


export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try{


            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);

            
            
        }catch(errors) {
            console.log(errors.response?.data)
        }
    }
}







export const xoaPhimAction = (maPhim) => {


    return async (dispatch) => {
        try{
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.xoaPhim(maPhim);
            console.log('result',result.data.content)
            alert('Xóa phim thành công ! ')
            //Sau khi xóa load lại danh sách phim mới
            dispatch(layDanhSachPhimAction())
            
        }catch (errors){
            console.log('errors',errors.response?.data)
        }
    }
}

