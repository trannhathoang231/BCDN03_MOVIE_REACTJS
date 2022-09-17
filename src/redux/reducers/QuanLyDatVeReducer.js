import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import {
  DAT_VE,
  SET_CHI_TIET_PHONG_VE,
  DAT_VE_HOAN_TAT,
  CHUYEN_TAB,
} from "./../actions/types/QuanLyDatVeType";

const initialState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  tabActive: "1",
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE:
      state.chiTietPhongVe = action.chiTietPhongVe;

      return { ...state };

    case DAT_VE:
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };

    case DAT_VE_HOAN_TAT:
      state.danhSachGheDangDat = [];
      return { ...state };

    case CHUYEN_TAB:
      state.tabActive = "2";

      return { ...state };

    case "CHANGE_TAB_ACTIVE":
      state.tabActive = action.number;
      return { ...state };

    default:
      return { ...state };
  }
};
