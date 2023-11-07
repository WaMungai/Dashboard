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
    <div className="flex flex-row items-stretch max-w-full max-md:flex-col max-md:w-full max-md:ml-0">
  <div className="w-[33%] max-md:w-full max-md:ml-0">
    <div className="flex-col justify-center items-center shadow overflow-hidden relative flex aspect-[1.0418848167539267] grow mt-6 py-7 max-md:mt-10">
      <div className="relative flex w-[398px] max-w-full flex-col self-start">
        <div className="text-slate-800 text-base font-semibold tracking-normal whitespace-nowrap ml-6 self-start max-md:ml-2.5">
          Laboratories Leaderboard
        </div>
        <div className="bg-slate-100 w-full h-px mt-6 self-start" />
      </div>
      <div className="relative bg-slate-50 bg-opacity-50 flex w-[398px] max-w-full items-start justify-between gap-5 pl-7 pr-16 py-4 self-start max-md:px-5">
        <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase flex-1">
          Laboratory
        </div>
        <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase self-stretch">
          Total Tests
        </div>
      </div>
      {labData.map((lab) => (
        <div
          className="relative bg-slate-50 bg-opacity-50 self-stretch flex w-full items-start justify-between gap-5 pl-7 pr-6 py-4 max-md:px-5"
          key={lab.lab}
        >
          <div className="text-black text-xs self-stretch">{lab.name}</div>
          <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
            {lab.value}
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="w-[67%] ml-5 max-md:w-full max-md:ml-0 pb-4">
    <HighCharts />
  </div>
</div>

  );
}

export default LabTable;
