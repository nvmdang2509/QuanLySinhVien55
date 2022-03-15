import React from "react";

const TableBenchMark = () => {
  const dataShow = [
    {
      benchmark: "S&P 500 index",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
    {
      benchmark: "Bekshire Hathaway Portfloid",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
    {
      benchmark: "US 10 year Treasy",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
    {
      benchmark: "VN index",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
    {
      benchmark: "Viet come bak",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
    {
      benchmark: "S&P 500 index",
      note: "text",
      roi_1month: 100,
      roi_3month: 100,
      roi_6month: 100,
      roi_12month: 100,
    },
  ];

  const renderData = (data) =>
    data.map((item, index) => (
      <tr key={index} className="text-center">
        <td className="bg-secondary text-white bold">{item.benchmark}</td>
        <td>{item.note}</td>
        <td>{`${item.roi_3month} %`}</td>
        <td>{`${item.roi_3month} %`}</td>
        <td>{`${item.roi_6month} %`}</td>
        <td>{`${item.roi_12month} %`}</td>
      </tr>
    ));

  return (
    <div>
      <h2 className="text-uppercase bold mb-4">benchmark</h2>
      <table className="table table-bordered table-white">
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
    </div>
  );
};

export default TableBenchMark;
