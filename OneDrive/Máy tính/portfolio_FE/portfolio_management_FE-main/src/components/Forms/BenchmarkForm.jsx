import { Button } from "antd";
import React, { useState, useEffect } from "react";

const dataServe = [
  {
    id: 1,
    benchmark: "S&P 500 index",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
  {
    id: 2,
    benchmark: "Bekshire Hathaway Portfloid",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
  {
    id: 3,
    benchmark: "US 1100 year Treasy",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
  {
    id: 4,
    benchmark: "VN index",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
  {
    id: 5,
    benchmark: "Viet come bak",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
  {
    id: 6,
    benchmark: "S&P 5100 index",
    note: "text",
    roi_1month: 100,
    roi_3month: 100,
    roi_6month: 100,
    roi_12month: 100,
  },
];

const BenchmarkForm = (props) => {
  const { isData, reportDate, investorId } = props;
  const [dataShow, setDataShow] = useState([]);
  const [dataUpdate, setDataUpdate] = useState(dataShow);

  const renderData = (data) =>
    data?.map((item) => (
      <tr key={item.id}>
        <td className="bg-secondary text-white bold">{item.benchmark}</td>
        <td>
          <input id={item.id} name="note" defaultValue={item.note} />
        </td>
        <td>
          <input
            id={item.id}
            name="roi_1month"
            defaultValue={item.roi_1month}
          />
        </td>
        <td>
          <input
            id={item.id}
            name="roi_3month"
            defaultValue={item.roi_3month}
          />
        </td>
        <td>
          <input
            id={item.id}
            name="roi_6month"
            defaultValue={item.roi_6month}
          />
        </td>
        <td>
          <input
            id={item.id} //thêm id để xác định phần tử năm thứ mấy trong mảng index từ 1 ->
            name="roi_12month"
            defaultValue={item.roi_12month}
          />
        </td>
      </tr>
    ));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isData && reportDate == "newDate") {
      console.log("update benchmark newDate");
    } else if (isData && reportDate != "newDate") {
      console.log("update benchmark reprot date");
    }
  };

  const handleChange = (e) => {
    const { name, value, id } = e.target;

    const itemUpdate = { ...dataUpdate[id - 1], [name]: value };

    dataUpdate?.forEach((element, index) => {
      if (element.id === itemUpdate.id) {
        dataUpdate[index] = itemUpdate;
      }
    });

    setDataUpdate([...dataUpdate]);
  };

  useEffect(() => {
    if (isData && reportDate == "newDate") {
      // console.log("update benchmark reprot date");
      setDataShow(dataServe);
    }
  }, [isData]);

  return (
    <form
      className="edit-page__benchmark-form"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <h2>benchmark</h2>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-warning">
            <th>Benchmark</th>
            <th>note</th>
            <th>1-month ROI</th>
            <th>3-month ROI</th>
            <th>6-month ROI</th>
            <th>12-month ROI</th>
          </tr>
        </thead>
        <tbody>{renderData(dataShow)}</tbody>
      </table>
      <div className="edit-page__btns mt-3 text-right">
        <Button type="primary" size="large" className="mr-3" htmlType="submit">
          Save draft
        </Button>
        <Button type="primary" size="large" htmlType="button">
          Public
        </Button>
      </div>
    </form>
  );
};

export default BenchmarkForm;
