import * as React from "react";
import HighchartTable from "./HighCharts";

function Graph() {
  return (
    <div className="flex-col justify-center items-center overflow-hidden relative flex min-h-[370px] w-[805px] pl-6 pr-8 max-md:px-5">
      <div className="relative flex w-[291px] max-w-full items-start gap-0 self-start">
        <div className="flex mr-0 flex-col mt-6 self-end">
          <div className="text-slate-800 text-base font-semibold tracking-normal self-stretch whitespace-nowrap">
            Covid-19 Cases
          </div>
          <div className="text-slate-400 text-sm tracking-normal self-stretch whitespace-nowrap mt-16 max-md:mt-10">
            2,000
          </div>
        </div>
        <div className="flex-col overflow-hidden relative flex aspect-[1.625] w-[195px] max-w-full pl-10 pr-10 pt-1.5 pb-14 self-end max-md:px-5">
          <img
            loading="lazy"
            src=""
            className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          />
          <div className="relative text-slate-800 text-base leading-6 tracking-normal self-center whitespace-nowrap">
            Mar
          </div>
          <div className="relative self-stretch flex w-full items-start justify-between gap-5 mt-4">
            <div className="self-stretch flex items-start justify-between gap-1.5">
              <div className="self-center flex flex-col w-2 my-auto">
                <div className="self-stretch flex w-full h-2 flex-col rounded-[50%]" />
                <div className="self-stretch flex w-full h-2 flex-col mt-3.5 rounded-[50%]" />
              </div>
              <div className="self-stretch flex flex-col">
                <div className="text-slate-500 text-sm leading-5 tracking-normal self-stretch whitespace-nowrap">
                  Positive
                </div>
                <div className="text-slate-500 text-sm leading-5 tracking-normal self-stretch whitespace-nowrap mt-1">
                  Negative
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col">
              <div className="text-slate-500 text-right text-sm tracking-normal whitespace-nowrap ml-2.5 self-start">
                204
              </div>
              <div className="text-slate-500 text-right text-sm tracking-normal whitespace-nowrap mt-3.5 self-start">
                1,846
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative self-stretch flex items-start justify-between gap-3.5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-slate-400 text-sm tracking-normal self-stretch">
          1,000
        </div>
        <div className="bg-slate-200 self-center w-[707px] h-px grow shrink basis-auto my-auto max-md:max-w-full" />
      </div>
      <div className="relative self-stretch flex w-full items-start justify-between gap-5 mt-16 max-md:flex-wrap max-md:mt-10">
        <div className="text-slate-400 text-sm tracking-normal self-stretch">
          500
        </div>
        <div className="bg-white flex grow flex-col w-full mx-auto pt-6 pb-3.5 rounded-lg max-md:max-w-full max-md:mt-10">
      
        </div>
        
      </div>
      <div className="relative bg-slate-200 self-stretch w-full h-px mt-16 max-md:max-w-full max-md:mt-10" />
      <HighchartTable/>
    </div>
  );
}


export default Graph