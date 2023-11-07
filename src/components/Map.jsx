import React from "react";
import CountyTable from "./CountyTable";
import HighChartMap from "./HighChartMap";

function Map() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
          <div className="text-slate-800 text-base font-semibold tracking-normal whitespace-nowrap ml-7 self-start max-md:ml-2.5">
            Covid-19 Positive Cases by County
            <div className="bg-slate-100 w-[804px] h-px mt-6 self-start max-md:max-w-full" >
            <div>
              <HighChartMap />
            </div>
              </div>
          </div>
      </div>
      <CountyTable />
    </div>
  );
}

export default Map;
