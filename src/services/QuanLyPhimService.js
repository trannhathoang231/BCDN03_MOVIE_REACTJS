<<<<<<< HEAD
// import React from 'react'
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
=======
//? từ test
import  BaseServices  from "./baseServices"
import { GROUPID  } from "../ulti/setting"
export class QuanLyPhimService extends BaseServices {

    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }

    layDanhSachPhim = (tenPhim='') => {
        if(tenPhim.trim()!=''){
            return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`) 
        }
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }

    themPhimUploadHinh = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData)
    }

    capNhatPhimUpload = (formData) => {
        return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData)
    } 


    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }
>>>>>>> main

}


<<<<<<< HEAD
export const quanLyPhimService = new QuanLyPhimService();
 
=======

export const quanLyPhimService = new QuanLyPhimService();
>>>>>>> main
