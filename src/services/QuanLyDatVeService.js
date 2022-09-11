import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import BaseServices from "./baseServices";

class QuanLyDatVeService extends BaseServices {
  constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
   }
}

export const quanLyDatVeService = new QuanLyDatVeService();