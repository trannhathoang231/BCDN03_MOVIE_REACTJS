import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_TAI_KHOAN_ADMIN,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import swal from "sweetalert";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      dispatch({
        type: DANG_NHAP_ACTION,
        thongTinDangNhap: result,
      });
      swal("Đăng nhập thành công!", "", "success");
      if (result.maLoaiNguoiDung !== "KhachHang") {
        history.push("/admin");
      } else {
        history.push("/");
      }
    } catch (error) {}
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result,
      });
    } catch (error) {}
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
      swal("Đăng ký thành công!", "", "success");
      history.push("/login");
    } catch (error) {
      swal("Xảy ra lỗi, vui lòng kiểm tra lại thông tin!", "", "error");
    }
  };
};

export const layDanhSachNguoiDungAction = (taiKhoan = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(
        taiKhoan
      );

      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result,
      });
    } catch (error) {}
  };
};

export const themNguoiDungAction = (values) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.themNguoiDung(values);
      swal("Thêm người dùng thành công!", "", "success");
    } catch (errors) {
      swal(errors.content, "", "error");
    }
  };
};

export const layThongTinTaiKhoanAdminAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinTaiKhoanAdmin(
        taiKhoan
      );

      dispatch({
        type: SET_THONG_TIN_TAI_KHOAN_ADMIN,
        thongTinTaiKhoanAdmin: result,
      });
    } catch (error) {}
  };
};

export const capNhatThongTinNguoiDungAction = (values) => {
  return async () => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        values
      );
      swal("Cập nhật thành công!", "", "success");
    } catch (error) {
      swal(error.content, "", "success");
    }
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      swal("Xóa thành công!", "", "success");

      dispatch(layDanhSachNguoiDungAction());
    } catch (error) {
      swal(error.content, "", "error");
    }
  };
};
