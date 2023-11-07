import * as React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import HealthCare from "../components/HealthCare";
import Cases from "../components/Cases";
import LabTable from "../components/LabTable";
import Map from "../components/Map";

function Dashboard() {
  return (
    <div className="bg-slate-200 flex flex-col px-20 max-md:px-5">
      <div className="self-center flex w-full max-w-[1225px] flex-col mt-11 mb-16 max-md:max-w-full max-md:my-10">
        <BreadCrumbs />
        <div className="shadow bg-white self-center w-full mt-4 pl-7 pr-12 rounded-lg max-md:max-w-full max-md:px-5">
          <HealthCare />
        </div>
        <div className="self-center w-full mt-7 max-md:max-w-full">
          <Cases />
        </div>
        <div className="self-center w-full mt-6 pr-2.5 max-md:max-w-full">
         <Map/>
        </div>
        <div className="self-center w-full mt-6 pr-2.5 max-md:max-w-full">
          <LabTable />
        </div>
      </div>
    </div>
  );
}


export default Dashboard