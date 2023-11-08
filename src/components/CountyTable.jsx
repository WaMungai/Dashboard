import React, { useState, useEffect } from "react";

function CountyTable() {
  const [countyData, setCountyData] = useState([]);

  useEffect(() => {
    fetch("/county.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCountyData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="py-4 px-4 font-semibold rounded-lg overflow-hidden">
        <h1>States Leaderboard</h1>
      </div>

      <div className="border-b border-gray-200 pb-0"></div>

      <div className=" to-dashboard_offwhite rounded-md shadow-sm ">
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
                        County
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Postive Cases
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold "
                      >
                        Nagative Cases
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {countyData.map((county) => (
                      <tr key={county.county}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 ">
                          {county.county}
                        </td>
                        <td className=" px-3 py-4 text-sm text-gray-500 text-end">
                          {county.positiveCases}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 text-end">
                          {county.negativeCases}
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
    </>
  );
}

export default CountyTable;
