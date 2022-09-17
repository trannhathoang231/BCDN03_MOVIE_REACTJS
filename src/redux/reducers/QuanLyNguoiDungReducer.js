import { USER_LOGIN } from "../../ulti/setting";
import {
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_TAI_KHOAN_ADMIN,
} from "./../actions/types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  arrUser: [],
  arrUserDefault: [],
  userLogin: user,

  thongTinNguoiDung: {},
  thongTinTaiKhoanAdmin: {},
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION:
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem("accessToken", thongTinDangNhap.accessToken);

      return { ...state, userLogin: thongTinDangNhap };

    case SET_THONG_TIN_NGUOI_DUNG:
      const cloneState = { ...state };
      cloneState.thongTinNguoiDung = action.thongTinNguoiDung;

      return { ...cloneState };

    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUser = action.arrUser;
      state.arrUserDefault = state.arrUser;

      return { ...state };
    }

    case SET_THONG_TIN_TAI_KHOAN_ADMIN: {
      state.thongTinTaiKhoanAdmin = action.thongTinTaiKhoanAdmin;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
