import { Button } from "antd";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const dataServe = {
  investor_code: "NEUIND00001",
  investor_name: "Thanh Tu",
  investor_date: "2012/2/12",
  contact_status: true,
  contact_end_date: "12/12/2012",
  last_update: "12/12/2012",
  total_injection: 123456,
  withdraw: 123456,
  current: 25291,
  profit: 4458,
  roi: 21.4,
  anulized_roi: 223.16,
  cryptocurrency: 89.0,
  stock: 0,
  commodity: 11.0,
  flat_case: 0,
  other_derivative: 0,
};

const PerformanceForm = (props) => {
  const { isData, reportDate, investorId } = props;
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    if (isData && reportDate == "newDate") {
      setDataShow([]);
      // console.log("perform newdate");
    } else if (isData && reportDate != "newDate") {
      //lay du lieu tu server theo id va date
      console.log("perform reportDate");
      //test
      setDataShow(dataServe);
    }
  }, [isData]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      investor_code: dataShow ? dataShow.investor_code : "",
      investor_name: dataShow ? dataShow.investor_name : "",
      investor_date: dataShow ? dataShow.investor_date : "",
      contact_status: dataShow ? dataShow.contact_status : false,
      contact_end_date: dataShow ? dataShow.contact_end_date : "",
      last_update: dataShow ? dataShow.last_update : "",
      total_injection: dataShow ? dataShow.total_injection : 0,
      withdraw: dataShow ? dataShow.withdraw : 0,
      current: dataShow ? dataShow.current : 0,
      profit: dataShow ? dataShow.profit : 0,
      roi: dataShow ? dataShow.roi : 0,
      anulized_roi: dataShow ? dataShow.anulized_roi : 0,
      cryptocurrency: dataShow ? dataShow.cryptocurrency : 0,
      stock: dataShow ? dataShow.stock : 0,
      commodity: dataShow ? dataShow.commodity : 0,
      flat_case: dataShow ? dataShow.flat_case : 0,
      other_derivative: dataShow ? dataShow.other_derivative : 0,
    },
    // validationSchema: Yup.object().shape({
    //   name: Yup.string().required("Tên không được bõ trống"),
    //   description: Yup.string().required("Mô tả không được bỏ trống"),
    // }),
    onSubmit: (values) => {
      if (isData && reportDate == "newDate") {
        //tao du lieu moi
        console.log("create data performanceData for today");
      } else if (isData && reportDate != "newDate") {
        //chinh sua du lieu cu
        console.log("update data performanceData for reportDate");
      }
    },
  });
  return (
    <form className="edit-page__performance" onSubmit={formik.handleSubmit}>
      <h2>performance</h2>
      <table className="table-bordered">
        <tbody>
          <tr>
            <td rowSpan="3"></td>
            <td style={{ backgroundColor: "gray" }}>Investor Code</td>
            <td>
              <input
                type="text"
                name="investor_code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.investor_code}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "gray" }}>Investor Name</td>
            <td>
              <input
                type="text"
                name="investor_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.investor_name}
              />
            </td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "gray" }}>Investor date</td>
            <td>
              <input
                type="text"
                name="investor_date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.investor_date}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="3" className="table-success">
              Status
            </td>
            <td>Contract Status</td>
            <td>
              <input
                type="text"
                name="contact_status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_status}
              />
            </td>
          </tr>
          <tr>
            <td>Contract End date</td>
            <td>
              <input
                type="text"
                name="contact_end_date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_end_date}
              />
            </td>
          </tr>
          <tr>
            <td>Late update</td>
            <td>
              <input
                type="text"
                name="last_update"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_update}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="4" className="table-info">
              Fund (USD)
            </td>
            <td>Total injection</td>
            <td>
              <input
                type="text"
                name="total_injection"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.total_injection}
              />
            </td>
          </tr>
          <tr>
            <td>Withdraw</td>
            <td>
              <input
                type="text"
                name="withdraw"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.withdraw}
              />
            </td>
          </tr>
          <tr>
            <td>Current</td>
            <td>
              <input
                type="text"
                name="current"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.current}
              />
            </td>
          </tr>
          <tr>
            <td>Profit</td>
            <td>
              <input
                type="text"
                name="profit"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.profit}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="2" className="table-secondary">
              Performance
            </td>
            <td>ROI</td>
            <td>
              <input
                type="text"
                name="roi"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.roi}
              />
            </td>
          </tr>
          <tr>
            <td>Anualized</td>
            <td>
              <input
                type="text"
                name="anulized_roi"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.anulized_roi}
              />
            </td>
          </tr>
          <tr>
            <td rowSpan="5" className="table-danger">
              Assets Structure
            </td>
            <td>Cryptocurrency</td>
            <td>
              <input
                type="text"
                name="cryptocurrency"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cryptocurrency}
              />
            </td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>
              <input
                type="text"
                name="stock"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.stock}
              />
            </td>
          </tr>
          <tr>
            <td>Commondity</td>
            <td>
              <input
                type="text"
                name="commodity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.commodity}
              />
            </td>
          </tr>
          <tr>
            <td>Flat cash</td>
            <td>
              <input
                type="text"
                name="flat_case"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.flat_case}
              />
            </td>
          </tr>
          <tr>
            <td>Other Derivatives</td>
            <td>
              <input
                type="text"
                name="other_derivative"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.other_derivative}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="edit-page__btns mt-3 text-right">
        <Button type="primary" size="large" className="mr-3" htmlType="submit">
          Save draft
        </Button>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={() => {
            console.log("Publish performance");
          }}
        >
          Public
        </Button>
      </div>
    </form>
  );
};

export default PerformanceForm;
