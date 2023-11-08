import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighCharts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      Highcharts.chart(chartRef.current, {
        chart: {
          type: "column",
          height: 400,
        },
        title: {
          text: "",
          align: "left",
        },
        subtitle: {
          text: "",
          align: "left",
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          crosshair: true,
          accessibility: {
            description: "Months",
          },
        },
        yAxis: {
          min: 0,
          max: 2000,
          title: {
            text: "",
          },
        },
        tooltip: {
          valueSuffix: "",
        },
        plotOptions: {},
        series: [
          {
            name: "Positive",
            data: [500, 300, 800, 400, 100, 200, 150, 600, 700, 500, 300, 800],
            color: "#D13F4A",
          },
          {
            name: "Negative",
            data: [
              1000, 700, 1700, 600, 350, 350, 650, 1200, 1400, 1000, 700, 2100,
            ],
            color: "#D2DDEC",
          },
        ],
      });
    }
  }, []);

  return (
    <div>
      <div ref={chartRef} id="container" />
      <HighchartsReact options={{}} />
    </div>
  );
};

export default HighCharts;
