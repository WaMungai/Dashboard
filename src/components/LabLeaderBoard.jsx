import React from 'react'
import Graph from './Graph'

function LabLeaderBoard() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex-col justify-center items-center shadow overflow-hidden relative flex aspect-[1.0418848167539267] grow mt-6 py-7 max-md:mt-10">
                <img
                  loading="lazy"
                  src=""
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-[398px] max-w-full flex-col self-start">
                  <div className="text-slate-800 text-base font-semibold tracking-normal whitespace-nowrap ml-6 self-start max-md:ml-2.5">
                    Laboratories Leader board
                  </div>
                  <div className="bg-slate-100 w-full h-px mt-6 self-start" />
                </div>
                <div className="relative bg-slate-50 bg-opacity-50 flex w-[398px] max-w-full items-start justify-between gap-5 pl-7 pr-16 py-4 self-start max-md:px-5">
                  <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase flex-1">
                    Laboratory
                  </div>
                  <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase self-stretch">
                    TOTAL Tests
                  </div>
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[398] object-contain object-center w-full stroke-[1px] stroke-slate-100 overflow-hidden self-start"
                />
                <div className="relative flex w-[319px] max-w-full items-start justify-between gap-5 ml-6 mt-4 self-start max-md:ml-2.5">
                  <div className="text-slate-800 text-sm font-medium leading-5 tracking-normal">
                    Karis Laboratories
                  </div>
                  <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
                    2,780
                  </div>
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[398] object-contain object-center w-full stroke-[1px] stroke-slate-100 overflow-hidden mt-6 self-start"
                />
                <div className="relative flex w-[319px] max-w-full items-start justify-between gap-5 ml-6 mt-3 self-start max-md:ml-2.5">
                  <div className="text-slate-800 text-sm font-medium leading-5 tracking-normal">
                    Emu Laboratories
                  </div>
                  <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
                    20,000
                  </div>
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[398] object-contain object-center w-full stroke-[1px] stroke-slate-100 overflow-hidden mt-6 self-start"
                />
                <div className="relative flex w-[319px] max-w-full items-start justify-between gap-5 ml-6 mt-3 self-start max-md:ml-2.5">
                  <div className="text-slate-800 text-sm font-medium leading-5 tracking-normal">
                    Sandhu Laboratories
                  </div>
                  <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
                    6,700
                  </div>
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[398] object-contain object-center w-full stroke-[1px] stroke-slate-100 overflow-hidden mt-6 self-start"
                />
                <div className="relative flex w-[319px] max-w-full items-start justify-between gap-5 ml-6 mt-3 self-start max-md:ml-2.5">
                  <div className="text-slate-800 text-sm font-medium leading-5 tracking-normal">
                    Mikaa Laboratories
                  </div>
                  <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-start">
                    3,000
                  </div>
                </div>
                <img
                  loading="lazy"
                  src=""
                  className="aspect-[398] object-contain object-center w-full stroke-[1px] stroke-slate-100 overflow-hidden mt-6 self-start"
                />
                <div className="relative flex w-[319px] max-w-full items-start justify-between gap-5 ml-6 mt-3 self-start max-md:ml-2.5">
                  <div className="text-slate-800 text-sm font-medium leading-5 tracking-normal">
                    Healthy Laboratories
                  </div>
                  <div className="text-slate-800 text-right text-sm font-medium leading-5 tracking-normal self-stretch">
                    2,000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.99] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:max-w-full max-md:mt-4"
              />
            </div>
            <Graph />
          </div>
  )
}

export default LabLeaderBoard