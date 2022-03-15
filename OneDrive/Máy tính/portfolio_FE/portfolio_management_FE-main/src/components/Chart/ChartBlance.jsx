import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import moment from "moment";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartBlance = (props) => {
  const { dataShow } = props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        display: false,
      },
      title: {
        display: true,
        text: "Accumulated Blance",
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
        label: "Accumulated Blance",
        data: dataShow.map((item) => {
          return item.fund.current;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartBlance;
