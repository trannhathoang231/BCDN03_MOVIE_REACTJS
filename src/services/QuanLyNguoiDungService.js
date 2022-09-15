import { GROUPID } from "../ulti/setting";
import BaseServices from "./baseServices";

class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => { //taiKhoan:'', matKhau:''
    return this.post('/api/QuanLyNguoiDung/DangNhap', thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
  }

  dangKy = (thongTinDangKy) => { 
    return this.post('/api/QuanLyNguoiDung/DangKy', thongTinDangKy);
   }

   layDanhSachNguoiDung = (taiKhoan='') => {
    if(taiKhoan.trim() !=''){
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${taiKhoan}`)
    }
    return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
   }

   themNguoiDung = (formData) => {
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,formData)
   }

   layThongTinTaiKhoanAdmin = (taiKhoan) => {
    return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
   }

   capNhatThongTinNguoiDung = (formData) => {
    return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,formData)
   }

   xoaNguoiDung = (taiKhoan) => {
    return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
   }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();