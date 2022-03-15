import React from "react";
import numberWithCommas from "../../utils/numberWithCommas";

const TablePerforment = (props) => {
  const dataShow = props.dataShow;

  const renderTable = (item, index) => {
    return (
      <tr className="text-right" key={index}>
        <td>{item.dates.injection_date}</td>
        <td>{item.dates.report_date}</td>
        <td>{numberWithCommas(item.fund.initial)}</td>
        <td>{numberWithCommas(item.fund.current)}</td>
        <td>{numberWithCommas(item.fund.profit)}</td>
        <td>{`${item.performance.roi} %`}</td>
        <td>{`${item.performance.annulized_roi} %`}</td>
        <td>{`${item.asset_structure.cryptocurrency} %`}</td>
        <td>{`${item.asset_structure.stock} %`}</td>
        <td>{`${item.asset_structure.commodity} %`}</td>
        <td>{`${item.asset_structure.flat_case} %`}</td>
        <td>{`${item.asset_structure.other_derivative} %`}</td>
      </tr>
    );
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th colSpan={2} className="text-center table-secondary">
            Dates
          </th>
          <th colSpan={3} className="text-center table-secondary">
            Fund
          </th>
          <th colSpan={2} className="text-center table-secondary">
            Performance
          </th>
          <th colSpan={5} className="text-center table-secondary">
            Asset Structure
          </th>
        </tr>
        <tr>
          <th className="table-success">Injection</th>
          <th className="table-success">Report Date</th>
          <th className="table-info">Innitial</th>
          <th className="table-info">Current</th>
          <th className="table-info">Profit</th>
          <th className="table-primary">ROI</th>
          <th className="table-primary">Anuallized ROI</th>
          <th className="table-warning">Cryptocurrency</th>
          <th className="table-warning">Stock</th>
          <th className="table-warning">Commondily</th>
          <th className="table-warning">Flat cash</th>
          <th className="table-warning">Other Derivatives</th>
        </tr>
      </thead>
      <tbody>{dataShow.map((item, index) => renderTable(item, index))}</tbody>
    </table>
  );
};

export default TablePerforment;
