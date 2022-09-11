import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { capNhatPhimUploadAction, layThongTinPhimAction, themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimAction";
import { GROUPID } from "../../../../ulti/setting";
import axios from "axios";

const Edit = (props) => {

  const [componentSize, setComponentSize] = useState("default");
  const {thongTinPhim} = useSelector(state => state.QuanLyPhimReducer)
  console.log('thongTinPhim',thongTinPhim);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    let {id} = props.match.params;

    dispatch(layThongTinPhimAction(id));
    

  }, [])


  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      maPhim: thongTinPhim.maPhim, //*đưa props vào formik rồi từ formik hiển thị dữ liệu để edit
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      maNhom:GROUPID,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null,
    },

    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if(values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);

          }
        }
      }
     //Cập nhật phim upload hình
      dispatch(capNhatPhimUploadAction(formData));

    },
  });

  const handleChangeDatePicker = (value) => {
    // console.log('datePickerChange',)
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);

  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    if ( file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/gif" || file.type === "image/png"
    ) {
      // Đem dữ liệu file lưu vào formik
      await formik.setFieldValue("hinhAnh", file);
      //Tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result)
      setImgSrc(e.target.result); //hinh base64
    };

    }
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
        <h3>Thêm mới phim</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu}/>
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu}/>
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("hot")} checked={formik.values.hot}/>
        </Form.Item>

        <Form.Item label="Số sao">
          <InputNumber onChange={handleChangeInputNumber("danhGia")} value={formik.values.danhGia} />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleChangeFile}  />
          <img style={{ width: 150, height: 150 }} src={imgSrc ==='' ? thongTinPhim.hinhAnh : imgSrc} alt="..." />
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

export default Edit;

//chưa làm Validation, dùng formik.setErrors() để làm validation
