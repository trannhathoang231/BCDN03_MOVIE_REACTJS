
import { GROUP } from '../ulti/setting';
import BaseServices from './baseServices'

export class QuanLyRapService extends BaseServices {

    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`);
    }


}


export const quanLyRapService = new QuanLyRapService();
