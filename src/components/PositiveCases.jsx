import React from 'react'
import StatesLeaderBoard from './StatesLeaderBoard'

function PositiveCases() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
      <div className="bg-white flex grow flex-col w-full mx-auto pt-6 pb-3.5 rounded-lg max-md:max-w-full max-md:mt-6">
        <div className="text-slate-800 text-base font-semibold tracking-normal whitespace-nowrap ml-7 self-start max-md:ml-2.5">
          Covid-19 Positive Cases by County
        </div>
        <div className="bg-slate-100 w-[804px] h-px mt-6 self-start max-md:max-w-full" />
        <div className="bg-zinc-50 flex w-[787px] max-w-full flex-col ml-2.5 mt-3 px-20 py-7 rounded-lg self-start max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.87] object-contain object-center w-[294px] overflow-hidden self-center max-w-full"
          />
        </div>
      </div>
    </div>
    <StatesLeaderBoard />
  </div>
  )
}

export default PositiveCases