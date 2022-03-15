import React from "react";
import { Link } from "react-router-dom";
import { useFormik, Field } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống!")
        .email("Vui lòng nhập đúng định dạng email"),
      password: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu từ 6 đến 32 ký tự"),
      rePassword: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6 đến 32 ký tự")
        .max(32, "Mật khẩu từ 6 đến 32 ký tự")
        .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không đúng"),
    }),

    onSubmit: (values) => {
      console.log("value", values);
      console.log("first", 123);
    },
  });
  return (
    <div className="card">
      <div className="card-header">
        <h3>Sign Up</h3>
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user" />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-key" />
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="rePassword"
              name="rePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger">{formik.errors.rePassword}</div>
          ) : null}
          <div className="form-group d-flex justify-content-center">
            <button
              // disabled={!formik.isValid}
              type="submit"
              className="btn login_btn"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Bạn đã có tài khoản?<Link to="/auth/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
