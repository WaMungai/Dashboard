import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighchartTable = () => {
  useEffect(() => {
    
    const table = document.getElementById('data-table');

    const categories = [];
    const seriesData = [];

    if (table) {
      const rows = table.getElementsByTagName('tr');
      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        if (cells.length === 2) {
          categories.push(cells[0].textContent);
          seriesData.push(parseFloat(cells[1].textContent));
        }
      }
    }

    
    const chartData = {
      chart: {
        type: 'column', // You can use other chart types as needed
      },
      title: {
        text: 'Covid-19 Cases',
      },
      xAxis: {
        categories: categories,
      },
      series: [
        {
          name: 'Series Name',
          data: seriesData,
        },
      ],
    };

    //render the Highcharts chart
    Highcharts.chart('highcharts-container', chartData);
  }, []);

  return (
    <div>
      <table id="data-table">
       
        <tbody>
          <tr>
            <td>Category 1</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Category 2</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Category 3</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>

      <div id="highcharts-container"></div>
    </div>
  );
};

export default HighchartTable;
