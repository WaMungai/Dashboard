import React from "react";
import CountyTable from "./CountyTable";
import HighChartMap from "./HighChartMap";

function Map() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="MapWrapper col-span-2 bg-white rounded-lg overflow-hidden">
          <div className="py-4 px-4 font-semibold">
            <h1> Covid-19 Positive Cases by County</h1>
          </div>

          <div className="border-b border-gray-200 pb-0"></div>

          <div className=" to-dashboard_offwhite rounded-md shadow-sm p-4">
            <HighChartMap />
          </div>
        </div>
        <div className="StatesDataWrapper bg-white rounded-lg overflow-hidden">
          <CountyTable />
        </div>
      </div>
    </>
  );
}

export default Map;
