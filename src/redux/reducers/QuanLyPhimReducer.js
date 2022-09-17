import {
  SET_DANH_SACH_PHIM,
  SET_FILM_SAP_CHIEU,
  SET_FILM_DANG_CHIEU,
} from "../actions/types/QuanLyPhimType";
import { SET_THONG_TIN_PHIM } from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 9662,
      tenPhim: "The Tomorrow War 3",
      biDanh: "the-tomorrow-war-3",
      trailer: "",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/the-tomorrow-war-3_gp01.jpg",
      moTa: "Good movie",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-08-31T07:14:08.377",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},

  thongTinPhim: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
