import React from 'react'

function BreadCrumbs() {
  return (
    <div className="border flex w-[355px] max-w-full items-start gap-0 pl-3.5 pr-3.5 rounded-lg border-solid border-slate-300 self-start max-md:justify-center">
          <div className="text-slate-400 text-sm font-medium leading-5 self-center my-auto">
            Today
          </div>
          <div className="bg-slate-300 self-stretch flex w-[98px] max-w-full items-start justify-between gap-3.5 pr-4">
            <div className="bg-slate-300 self-stretch w-px h-[38px] grow shrink basis-auto" />
            <div className="text-black text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
              This week
            </div>
          </div>
          <div className="bg-slate-300 self-stretch w-px h-[38px]" />
          <div className="text-slate-400 text-sm font-medium leading-5 self-center my-auto">
            This Month
          </div>
          <div className="bg-slate-300 self-stretch w-px h-[38px]" />
          <div className="text-slate-400 text-sm font-medium leading-5 self-center whitespace-nowrap my-auto">
            This Year
          </div>
        </div>
  )
}

export default BreadCrumbs