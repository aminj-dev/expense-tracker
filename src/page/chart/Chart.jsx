import React, { useContext, useState } from "react";
import {  Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { GlobalContext } from "../../context/GlobalState";
import {Balance} from '../../component/Balance';

export const Chart = () => {
  const { transactions } = useContext(GlobalContext);
  const [data, setData] = useState({
    labels: transactions?.map((data) => data.text),
    datasets: [
      {
        label: "user amounts ",
        data: transactions.map((data) => data.amounts)
      },
    ],
  });

  return (
    <div className="chart">
    <Balance/>
    <Line data={data}/>
    </div>
  )
};

