import {
    Form,
    Input,
    Radio,
    Select,
  } from "antd";
  import { useFormik } from "formik";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { GROUPID } from "../../../../ulti/setting";
  import { Option } from "antd/lib/mentions";
  import { capNhatThongTinNguoiDungAction, layThongTinTaiKhoanAdminAction, themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";
  
  const EditUser = (props) => {
    const [componentSize, setComponentSize] = useState("default");
    const {thongTinTaiKhoanAdmin} = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log('thongTinTaiKhoanAdmin' , thongTinTaiKhoanAdmin);
    const dispatch = useDispatch();

    useEffect(() => {
        let {id} = props.match.params

        dispatch(layThongTinTaiKhoanAdminAction(id))
    },[])
  
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          taiKhoan:thongTinTaiKhoanAdmin.taiKhoan,
          matKhau:thongTinTaiKhoanAdmin.matKhau,
          hoTen:thongTinTaiKhoanAdmin.hoTen,
          soDT:thongTinTaiKhoanAdmin.soDT,
          email:thongTinTaiKhoanAdmin.email,
          maLoaiNguoiDung:thongTinTaiKhoanAdmin.maLoaiNguoiDung,
  
        maNhom: GROUPID,
      },
  
      onSubmit: (values) => {
        console.log("values", values);
        values.maNhom = GROUPID;
        //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formData
        let formData = new FormData();
        for (let key in values) {
          // if (key !== "hinhAnh") {
            formData.append(key, values[key]);
        
          // } else {
          //   formData.append("File", values.hinhAnh, values.hinhAnh.name);
          // }
        }
        //Gọi api gửi các giá trị formData về backend xử lý
      //   console.log('formik',formData.get(values));
        dispatch(capNhatThongTinNguoiDungAction(formData));
      },
    });
  
  
  
    const handleChangeOption = (name) => {
      return (value) => {
        formik.setFieldValue(name, value);
      };
    };
  
  
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  
    return (
      <>
        <Form
          onSubmitCapture={formik.handleSubmit}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <h3>Thêm mới người dùng</h3>
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tài khoản">
            <Input name="taiKhoan" onChange={formik.handleChange} value={formik.values.taiKhoan}/>
          </Form.Item>
          <Form.Item label="Mật khẩu">
            <Input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau}/>
          </Form.Item>
          <Form.Item label="Họ tên">
            <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen}/>
          </Form.Item>

          <Form.Item label="SĐT">
            <Input name="soDT" onChange={formik.handleChange} value={formik.values.soDT}/>
          </Form.Item>

          <Form.Item label="Email">
            <Input name="email" onChange={formik.handleChange} value={formik.values.email}/>
          </Form.Item>
  
          <Form.Item label="Loại người dùng" >
              <Select defaultValue="" onChange={handleChangeOption("maLoaiNguoiDung")} value={formik.values.maLoaiNguoiDung}>
                  <Select.Option value="KhachHang">Khách hàng</Select.Option>
                  <Select.Option value="QuanTri">Quản trị</Select.Option>
              </Select>
          </Form.Item>
  
          <Form.Item label="Tác vụ">
            <button type="submit" className="bg-blue-300 text-white p-2">
              Cập nhật
            </button>
          </Form.Item>
        </Form>
      </>
    );
  };
  
  export default EditUser;
  