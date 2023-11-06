import React from "react";
import IMAGES from "../images/Images";

function HealthCare() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
        <div className="flex grow items-start justify-between gap-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <img
            loading="lazy"
            src={IMAGES.image1}
            alt={"logo"}
            className="aspect-[0.8] object-contain object-center w-11 overflow-hidden self-center max-w-full my-auto"
          />
          <div className="text-sky-700 text-3xl font-black my-auto">
            Health Care
          </div>
          <div className="bg-zinc-300 self-stretch w-px h-[114px] grow shrink basis-auto" />
          <div className="self-center flex flex-col my-auto">
            <div className="text-gray-500 text-sm font-medium leading-5 self-stretch whitespace-nowrap">
              Total Tested
            </div>
            <div className="text-gray-900 text-2xl font-bold leading-9 self-stretch whitespace-nowrap">
              171,897
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-5 uppercase self-stretch whitespace-nowrap mt-3">
              <span className="text-gray-500">Travel </span>
              <span className="text-zinc-800">123,932</span>
            </div>
          </div>
          <div className="flex flex-col mt-11 self-end max-md:mt-10">
            <img
              loading="lazy"
              src={IMAGES.image2}
              alt={"logo"}
              className="aspect-[4.34] object-contain object-center w-full overflow-hidden self-stretch"
            />
            <div className="text-zinc-800 text-xs font-medium leading-5 uppercase self-stretch whitespace-nowrap mt-2">
              <span className="text-gray-500">Screening </span>
              <span className="text-zinc-800">47,965</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
        <div className="grow max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[3%] max-md:w-full max-md:ml-0">
              <div className="bg-zinc-300 w-px h-[114px] mx-auto max-md:mt-6" />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:mt-10">
                <div className="text-gray-500 text-sm font-medium leading-5 self-stretch whitespace-nowrap">
                  Citizens Tested{" "}
                </div>
                <div className="self-stretch flex items-start justify-between gap-4 mt-3 pr-1">
                  <div className="text-gray-900 text-2xl font-bold leading-9 self-start">
                    21,800
                  </div>
                  <img
                    loading="lazy"
                    src={IMAGES.image3}
                    alt={"logo"}
                    className="aspect-[4.31] object-contain object-center w-[125px] overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="self-stretch flex items-start justify-between gap-px mt-2.5 max-md:justify-center">
                  <div className="bg-rose-300 flex w-16 max-w-full items-start gap-1 pl-0.5 pr-2 py-0.5 rounded-3xl self-start">
                    <div className="stroke-[2px] self-stretch flex w-2 h-2 flex-col rounded-[50%]" />
                    <div className="text-red-500 text-xs font-medium uppercase self-stretch whitespace-nowrap">
                      Positive
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xs font-medium leading-5 uppercase self-start">
                    <span className="text-gray-500"> </span>
                    <span className="text-zinc-800">123,932</span>
                  </div>
                  <div className="bg-lime-200 flex w-16 max-w-full items-start gap-1 pl-0.5 pr-1 py-0.5 rounded-3xl self-start">
                    <div className="stroke-[2px] self-stretch flex w-2 h-2 flex-col rounded-[50%]" />
                    <div className="text-lime-500 text-xs font-medium uppercase self-stretch whitespace-nowrap">
                      Negative
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xs font-medium leading-5 uppercase whitespace-nowrap self-start">
                    <span className="text-gray-500"> </span>
                    <span className="text-zinc-800">123,932</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[0%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-zinc-300 w-px h-[114px] mx-auto max-md:mt-6" />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:mt-10">
                <div className="text-gray-500 text-sm font-medium leading-5 self-stretch whitespace-nowrap">
                  Foreigners Tested{" "}
                </div>
                <div className="self-stretch flex items-start justify-between gap-2 mt-2.5 pr-px">
                  <div className="text-gray-900 text-2xl font-bold leading-9">
                    150,097
                  </div>
                  <img
                    loading="lazy"
                    src={IMAGES.image4}
                    alt={"logo"}
                    className="aspect-[4.31] object-contain object-center w-[125px] overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="self-stretch flex items-start justify-between gap-px mt-2.5 max-md:justify-center">
                  <div className="bg-rose-300 flex w-16 max-w-full items-start gap-1 pl-0.5 pr-2 py-0.5 rounded-3xl self-start">
                    <div className="stroke-[2px] self-stretch flex w-2 h-2 flex-col rounded-[50%]" />
                    <div className="text-red-500 text-xs font-medium uppercase self-stretch whitespace-nowrap">
                      Positive
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xs font-medium leading-5 uppercase self-start">
                    <span className="text-gray-500"> </span>
                    <span className="text-zinc-800">123,932</span>
                  </div>
                  <div className="bg-lime-200 flex w-16 max-w-full items-start gap-1 pl-0.5 pr-1 py-0.5 rounded-3xl self-start">
                    <div className="stroke-[2px] self-stretch flex w-2 h-2 flex-col rounded-[50%]" />
                    <div className="text-lime-500 text-xs font-medium uppercase self-stretch whitespace-nowrap">
                      NEGAtive
                    </div>
                  </div>
                  <div className="text-zinc-800 text-xs font-medium leading-5 uppercase whitespace-nowrap self-start">
                    <span className="text-gray-500"> </span>
                    <span className="text-zinc-800">123,932</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCare;
