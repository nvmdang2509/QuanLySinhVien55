import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { dataPortfolio } from "../../assets/fakeData/portfolio";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartTotalProfit = (props) => {
  const { dataShow } = props;

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Total Profit",
        position: "top",
      },
    },
  };

  const data = {
    labels: dataShow.map((item) => {
      return moment(item.dates.report_date).format("MMM YYYY");
    }),
    datasets: [
      {
        label: "Total Profit",
        data: dataShow.map((item) => {
          return item.fund.current;
        }),

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartTotalProfit;
