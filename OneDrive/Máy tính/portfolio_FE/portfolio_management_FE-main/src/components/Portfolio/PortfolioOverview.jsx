import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import numberWithCommas from "../../utils/numberWithCommas";

ChartJS.register(ArcElement, Tooltip, Legend);

const PortfolioOverview = (props) => {
  let id = props.id;
  // dataShow = dataPortfolio[id];
  const dataShow = {
    dates: {
      injection_date: "2012/12/26",
      report_date: "2020/12/3",
    },
    fund: {
      initial: 2083300,
      current: 2529100,
      profit: 603500,
    },
    performance: {
      roi: 28.4,
      annulized_roi: 160.16,
    },
    asset_structure: {
      cryptocurrency: 89.0,
      stock: 0,
      commodity: 11.0,
      flat_case: 0,
      other_derivative: 0,
    },
  };

  const dataCollumn = [];
  for (let key in dataShow.asset_structure) {
    dataCollumn.push(dataShow.asset_structure[key]);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels: Object.keys(dataShow.asset_structure),
    datasets: [
      {
        data: dataCollumn,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="portfolio-overview">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="portfolio-overview__left">
              <h2>Asset Distribution</h2>
              <div className="portfolio-overview__left__chart">
                <Pie data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="portfolio-overview__right">
              <h2>Assets Summary</h2>
              <div className="portfolio-overview__right__item">
                <p>{`${numberWithCommas(dataShow.fund.current)} USD`}</p>
                <span>
                  Accumulated Revernue till{" "}
                  <small>{dataShow.dates.injection_date}</small>
                </span>
              </div>
              <div className="portfolio-overview__right__item">
                <p>{`${numberWithCommas(dataShow.fund.current)} USD`}</p>
                <span>
                  TotalProfit till <small>{dataShow.dates.report_date}</small>
                </span>
              </div>
              <div className="portfolio-overview__right__item">
                <p>{`${dataShow.performance.annulized_roi} %`}</p>
                <span>Current ROD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
