import React, { useEffect, useState } from "react";
import { BACKEND } from "../../../utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function FinanceCharts() {
  const [chart, setChart] = useState([]);

  const getTransactionData = () => {
    const URL = BACKEND + "transactions";
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChart(data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  const expense = chart.filter(
    (categoryName) => categoryName.tCategory == "Expense"
  );

  const sumExpense = expense
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0);

  const income = chart.filter(
    (categoryName) => categoryName.tCategory == "Income"
  );

  const sumIncome = income
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0);

  console.log(sumExpense)
  console.log(sumIncome);

const data = {
  labels: ["Income", "Expense"],
  datasets: [
    {
      label: "# of Money Spent",
      data: [sumIncome, sumExpense],
      backgroundColor: ["rgba(183, 244, 216)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(3, 201, 169)", "rgba(196, 77, 86, 1)"],
      borderWidth: 1,
    },
  ],
};
  
  return (
    <div>
      <Pie data={data}/>
    </div>
  );
}
