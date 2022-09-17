import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GROUPID } from '../../ulti/setting';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { useDispatch } from 'react-redux';

export default function Register() {
    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            mkNhapLai: '',
            email: '',
            soDt: '',
            maNhom: GROUPID,
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được để trống'),
            hoTen: Yup.string().required('Họ tên không được để trống'),
            matKhau: Yup.string().required('Mật khẩu không được để trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/, 'Mật khẩu phải bao gồm chữ HOA, chữ thường, số và ký tự đặc biệt'),
            mkNhapLai: Yup.string().required('Mật khẩu nhập lại không được để trống').oneOf([Yup.ref('matKhau'), null], 'Mật khẩu nhập lại không đúng'),
            email: Yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
            soDt: Yup.string().required('Số điện thoại không được để trống').min(9, 'Số điện thoại có ít nhất 10 chữ số'),
        }),
        onSubmit: values => {
            let { mkNhapLai, ...restValues } = values;
            const action = dangKyAction(restValues);
            dispatch(action);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="font-sans antialiased bg-grey-lightest">
            {/* Top Nav */}
            <div className="w-full bg-green fixed shadow z-1">
                <div className="container mx-auto">
                    <div className="w-full flex justify-between items-center py-4 px-8">
                        {/* Brand */}
                        <NavLink to="/" className="text-center text-blue-700 font-bold">CYBER CINEMA</NavLink>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="w-full bg-grey-lightest" style={{ paddingTop: '4rem' }}>
                <div className="lg:mx-auto py-8 xl:container">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter text-center">Đăng ký một tài khoản miễn phí</div>

                        <div className="py-4 px-8">
                            <div className="flex mb-4">

                                <div className="w-1/2 mr-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="taiKhoan">Tài khoản</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="taiKhoan" id="taiKhoan" type="text" placeholder="Nhập tên tài khoản" />
                                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (<div className='text-red-600'>{formik.errors.taiKhoan}</div>) : null}
                                </div>

                                <div className="w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="hoTen">Họ và tên</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='hoTen' id="hoTen" type="text" placeholder="Nhập họ và tên" />
                                    {formik.touched.hoTen && formik.errors.hoTen ? (<div className='text-red-600'>{formik.errors.hoTen}</div>) : null}
                                </div>

                            </div>

                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="matKhau">Mật khẩu</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='matKhau' id="matKhau" type="password" placeholder="Nhập mật khẩu" />
                                    {formik.touched.matKhau && formik.errors.matKhau ? (<div className='text-red-600'>{formik.errors.matKhau}</div>) : null}
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="mkNhapLai">Nhập lại Mật khẩu</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='mkNhapLai' id="mkNhapLai" type="password" placeholder="Nhập lại mật khẩu" />
                                    {formik.touched.mkNhapLai && formik.errors.mkNhapLai ? (<div className='text-red-600'>{formik.errors.mkNhapLai}</div>) : null}
                                </div>
                            </div>

                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" id="email" type="email" placeholder="Nhập email" />
                                    {formik.touched.email && formik.errors.email ? (<div className='text-red-600'>{formik.errors.email}</div>) : null}
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="soDt">Số điện thoại</label>
                                    <input onChange={formik.handleChange} className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" name='soDt' id="soDt" type="text" placeholder="Nhập số điện thoại" />
                                    {formik.touched.soDt && formik.errors.soDt ? (<div className='text-red-600'>{formik.errors.soDt}</div>) : null}
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-8">
                                <button className="bg-blue hover:bg-blue-dark text-blue-700 font-bold py-2 px-4 rounded-full" type="submit">
                                    Đăng ký
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Tôi đã có tài khoản. <NavLink to="login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng nhập</NavLink>
                    </div>
                </div>
            </div>
        </form>

    )
}
