import BaseServices from "./baseServices";

class QuanLyNguoiDungService extends BaseServices {
  constructor() {
    super();
  }

  dangNhap = (thongTinDangNhap) => {
    return this.post("/api/QuanLyNguoiDung/DangNhap", thongTinDangNhap);
  };

  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };

  dangKy = (thongTinDangKy) => {
    return this.post("/api/QuanLyNguoiDung/DangKy", thongTinDangKy);
  };

  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return this.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      thongTinNguoiDung
    );
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
