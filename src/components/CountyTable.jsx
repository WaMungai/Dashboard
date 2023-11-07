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
    <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
  <div className="shadow overflow-hidden relative flex-grow pt-6 pb-8 max-md:mt-6">
    <div className="text-slate-800 text-base font-semibold tracking-normal whitespace-nowrap ml-6 self-start max-md:ml-2.5">
      States Leaderboard
    </div>
    <div className="bg-slate-100 w-[387px] h-px mt-6 self-start" />
    <div className="relative bg-slate-50 bg-opacity-50 self-stretch flex flex-col items-start gap-5 pl-7 pr-6 py-4 max-md:px-5">
      <div className="self-stretch flex items-start justify-between gap-5">
        <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
          County
        </div>
        <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
          Positive Cases
        </div>
        <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
          Negative Cases
        </div>
      </div>
      {countyData.map((county) => (
        <div
          className="self-stretch flex items-start justify-between gap-5"
          key={county.county}
        >
          <div className="text-black text-xs self-stretch">
            {county.county}
          </div>
          <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
            {county.positiveCases}
          </div>
          <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
            {county.negativeCases}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  
  );
}

export default CountyTable;
