<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";
=======
import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

const Chart = () =>  {

    const [dailyData, setDailyData] = useState([])

    useEffect( () => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    })

    const lineChart = (
        dailyData.length
        ? (
            <Line 
            data={{
                labels: dailyData.map(({ date }) => date ),
                datasets: [ {
                    data: dailyData.map(({ confirmed }) => confirmed ),
                    label: 'Infected',
                    borderColor: '#333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,

                } ],
            }}
        />) : null 
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>

    )
>>>>>>> 34eb4b6275e492494df20772a0c65c72c8fcfdd0

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = fetchDailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          }
        ],
      }}
    />
  ) : null;

  const barChart = ( 
      confirmed  
        ? (
            <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                {
                    label: "People",
                    backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                    ],
                    data: [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
            />
        ) : null
    );

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
