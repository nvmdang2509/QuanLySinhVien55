import moment from "moment";
import React from "react";
import { dataPortfolio } from "../../assets/fakeData/portfolio";
import ChartBlance from "../Chart/ChartBlance";
import ChartTotalProfit from "../Chart/ChartTotalProfit";
import TableBenchMark from "../Tables/TableBenchMark";
import TablePerforment from "../Tables/TablePerforment";

const DetailledPerformance = () => {
  const dataShow = dataPortfolio.sort((a, b) => {
    return a.report_date < b.report_date ? 1 : -1;
  });

  return (
    <div className="detailed-performance">
      <div className="detailed-performance__performance">
        <h2>performance</h2>
        <TablePerforment dataShow={dataShow} />
      </div>
      <div className="detailed-performance__chart">
        <div className="row">
          <div className="col-6">
            <div className="detailed-performance__chart__left">
              <ChartBlance dataShow={dataShow} />
            </div>
          </div>
          <div className="col-6">
            <div className="detailed-performance__chart__right">
              <ChartTotalProfit dataShow={dataShow} />
            </div>
          </div>
        </div>
      </div>
      <div className="detailed-performance__benchmark">
        <TableBenchMark />
      </div>
    </div>
  );
};

export default DetailledPerformance;
