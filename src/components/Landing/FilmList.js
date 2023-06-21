import React from "react";
import "./Home.css";
//for data visualttion
import { Bar, Line } from "react-chartjs-2";

import Chart, {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FilmList = (props) => {
  //console.log(props.films.year);
  //console.log(props.films.total);
  //<p>{props.films.year}</p>
  //<p>{props.films.total}</p>

  const data = {
    //labels: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
    labels: [
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    datasets: [
      {
        label: "Conflict Stock Displacement",
        data: [
          "no data",
          350000,
          300000,
          350000,
          350000,
          316000,
          397241,
          450203,
          257563,
          1078429,
          2137422,
          1414395,
          2059883,
          3589421,
        ],
        tension: 0.1,
        borderColor: "green", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
      },
      {
        label: "Conflict Internal Displacements",
        data: [
          "no data",
          200000,
          "no data ",
          50000,
          "no data",
          178800,
          137073,
          55835,
          296429,
          724813,
          2894841,
          1051728,
          1691655,
          5142356,
        ],
        tension: 0.1,
        borderColor: "blue", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
      },
      {
        label: "Disaster Internal Displacements",
        data: [
          72810,
          "no data ",
          10000,
          "no data",
          20118,
          61486,
          49412,
          104011,
          347156,
          434175,
          295784,
          504367,
          663965,
          240009,
        ],
        tension: 0.1,
        borderColor: "red", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Area fill color
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <>
      <p className="SearchResult"> Year:   {props.films.year}</p>
      <p className="SearchResult">Total Displaced people In The World {props.films.total} </p>
      <div className="datavisualization">
        <h1>Ethiopia - Internally displaced persons</h1>
        <Line
          data={data}
          options={options}
          //height={100}
          // width = {100}
        ></Line>

        {/* <Bar
          data={data}
          options={options}
          //height={100}
          // width = {100}
        ></Bar> */}
      </div>
    </>
  );
};

export default FilmList;
