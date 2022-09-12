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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();