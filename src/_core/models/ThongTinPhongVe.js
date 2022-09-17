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

