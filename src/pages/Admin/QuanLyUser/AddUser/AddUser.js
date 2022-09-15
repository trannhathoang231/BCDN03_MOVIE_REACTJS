import { Form, Input, Radio, Select } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GROUPID } from "../../../../ulti/setting";
import { Option } from "antd/lib/mentions";
import { themNguoiDungAction } from "../../../../redux/actions/QuanLyNguoiDungAction";

const AddUser = () => {
  const [componentSize, setComponentSize] = useState("default");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",

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
      dispatch(themNguoiDungAction(formData));
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
        <h3>Thêm người dùng mới</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="taiKhoan"
          label="Tài khoản"
          rules={[
            { required: true, message: "Please enter your tai khoan" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder="Nhập tài khoản" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          name="matKhau"
          label="Mật khẩu"
          rules={[
            { required: true, message: "Please enter your password" },
            {min:6},

          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Nhập mật khẩu"
            onChange={formik.handleChange}
          />
        </Form.Item>

        <Form.Item label="Họ tên" >
          <Input
            name="hoTen"
            placeholder="Nhập họ tên"
            onChange={formik.handleChange}
            htmlFor="hoTen"
          />
          
        </Form.Item>

        <Form.Item label="SĐT">
          <Input
            name="soDt"
            placeholder="Nhập số điện thoại"
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Nhập email" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Loại người dùng" >
          <Select
            placeholder="Chọn loại người dùng"
            onChange={handleChangeOption("maLoaiNguoiDung")}
          >
            <Select.Option value="KhachHang">Khách hàng</Select.Option>
            <Select.Option value="QuanTri">Quản trị</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Thêm người dùng
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;
