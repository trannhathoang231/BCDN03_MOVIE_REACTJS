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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();