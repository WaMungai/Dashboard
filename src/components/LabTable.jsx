import React, { useState, useEffect } from "react";
import HighCharts from "./HighCharts";

function LabTable() {
  const [labData, setLabData] = useState([]);

  useEffect(() => {
    fetch("/lab.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setLabData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* Revised Designs  */}

      <div class="grid grid-cols-3 gap-4">
        <div class="LabBoardWrapper bg-white overflow-hidden rounded-lg">
          <div className="py-4 px-4 font-semibold">
            <h1>Laboratories Leaderboard</h1>
          </div>
          <div className="border-b border-gray-200 pb-0"></div>

          <div className=" rounded-md shadow-sm ">
            <div className="flex flex-col items-stretch ">
              <div className="shadow overflow-hidden relative flex-grow ">
                <div className="relative bg-slate-50 bg-opacity-50 self-stretch flex flex-col items-start gap-5 p-4 py-4 max-md:px-5">
                  <div class="inline-block min-w-full py-2 align-middle">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr className=" uppercase text-xs">
                          <th
                            scope="col"
                            class="py-3.5 pr-3 text-left text-sm font-semibold  "
                          >
                            LABORATORY
                          </th>
                          <th
                            scope="col"
                            class="px-3 py-3.5 text-right text-sm font-semibold "
                          >
                            TOTAL TESTS
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y">
                        {labData.map((lab) => (
                          <tr key={lab.lab}>
                            <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 ">
                              {lab.name}
                            </td>
                            <td className=" px-3 py-4 text-sm text-gray-500 text-end">
                              {lab.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 LabBoardWrapper bg-white overflow-hidden rounded-lg">
          <div className="py-4 px-4 font-semibold">Covid-19 Cases</div>
          <HighCharts />
        </div>
      </div>
    </>
  );
}

export default LabTable;
