import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";

function HighChartMap() {
  useEffect(() => {
    const fetchDataAndInitializeChart = async () => {
      const topologyResponse = await fetch(
        "https://code.highcharts.com/mapdata/countries/ke/ke-all.topo.json"
      );
      const topology = await topologyResponse.json();

      const data = [];

      Highcharts.mapChart("container", {
        chart: {
          map: topology,
          zoomType: "none",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        mapNavigation: {
          enabled: false,
        },
        rangeSelector: {
          enabled: false,
        },
        colorAxis: {
          min: 0,
        },
        series: [
          {
            data: data,
            name: "Random data",
            states: {
              hover: {
                color: "#E5ECF4",
              },
            },
            dataLabels: {
              enabled: false,
            },
          },
        ],
      });
    };

    fetchDataAndInitializeChart();
  }, []);

  return <div id="container"></div>;
}

export default HighChartMap;
