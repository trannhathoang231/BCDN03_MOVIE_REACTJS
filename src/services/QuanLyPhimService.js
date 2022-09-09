import React from 'react'
import { GROUP } from '../ulti/setting'
import BaseServices from './baseServices'

export class  QuanLyPhimService extends BaseServices {
  constructor(){
      super()
  }
  layDanhSachBanner = () =>{
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
  }

  layDanhSachPhim = () =>{
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`)
  }
}


export const quanLyPhimService = new QuanLyPhimService();
 