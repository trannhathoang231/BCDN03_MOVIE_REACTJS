export class ThongTinLichChieu {
    thongTinPhim = new ThongTinPhim();
    danhSachGhe = [{ ghe: new Ghe() }];
}

export class ThongTinPhim {
    maLichChieu = '';
    tenCumRap = '';
    tenRap = '';
    diaChi = '';
    tenPhim = '';
    hinhAnh = '';
    ngayChieu = '';
    gioChieu = '';
}

export class Ghe {
    maGhe = '';
    tenGhe = '';
    maRap = '';
    loaiGhe = '';
    stt = '';
    giaVe = '';
    daDat = '';
    taiKhoanNguoiDat = '';
}

// export const valueDefault = {
//     "thongTinDatVe": [{
//         "danhSachGhe": [{
//             "maHeThongRap": "CGV",
//             "tenHeThongRap": "CGV - Parkson Đồng Khởi",
//             "maCumRap": "Rạp 2",
//             "tenCumRap": "Rạp 2",
//             "maRap": 632,
//             "tenRap": "Rạp 2",
//             "maGhe": 76366,
//             "tenGhe": "06",
//         }]
//     }]
// }