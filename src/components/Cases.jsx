import React from "react";
import IMAGES from "../images/Images";

function Cases() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-6 ">
        {/* Registered Labs Card */}
        <div className="CardWrapper bg-white rounded-lg overflow-hidden">
          <div className=" CardItems items-start shadow flex w-full max-w-[392px] grow flex-col mx-auto  max-md:mt-5 p-6">
            <div className="flex space-x-2">
              <div className="justify-center items-center  self-center flex w-12 max-w-full flex-col my-auto rounded-md">
                <img
                  loading="lazy"
                  src={IMAGES.image5}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-full overflow-hidden self-stretch "
                />
              </div>
              <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                <div className="text-gray-500 text-sm leading-5 self-start">
                  Registered Labs
                </div>
                <div className="items-start flex w-[68px] max-w-full gap-2 self-start">
                  <div className="text-gray-900 text-2xl font-semibold leading-8 self-start">
                    20
                  </div>
                  <div className="items-start flex gap-0 mt-3 self-start">
                    <img
                      loading="lazy"
                      src={IMAGES.image8}
                      alt={"logo"}
                      className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                    />
                    <div className="text-emerald-600 text-sm font-semibold leading-5 self-stretch whitespace-nowrap">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-dashboard_bg w-full p-4"></div>
          </div>
        </div>

        {/* Postive Cases */}

        <div className="CardWrapper bg-white rounded-lg overflow-hidden">
          <div className=" CardItems items-start shadow flex w-full max-w-[392px] grow flex-col mx-auto  max-md:mt-5 p-6">
            <div className="flex space-x-2">
              <div className="justify-center items-center  self-center flex w-12 max-w-full flex-col my-auto rounded-md">
                <img
                  loading="lazy"
                  src={IMAGES.image6}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-full overflow-hidden self-stretch "
                />
              </div>
              <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                <div className="text-gray-500 text-sm leading-5 self-start">
                  Positive Cases
                </div>
                <div className="items-start flex w-[68px] max-w-full gap-2 self-start">
                  <div className="text-gray-900 text-2xl font-semibold leading-8 self-start">
                    2,450
                  </div>
                  <div className="items-start flex gap-0 mt-3 self-start">
                    <img
                      loading="lazy"
                      src={IMAGES.image8}
                      alt={"logo"}
                      className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                    />
                    <div className="text-emerald-600 text-sm font-semibold leading-5 self-stretch whitespace-nowrap">
                      5.4%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="bg-dashboard_bg w-full p-4">
              <div className="flex items-center gap-2 justify-evenly">
                <div className="Left_stat w-1/2">
                <p className="text-zinc-800 text-xs font-medium ">Males:  <span className="text-black"> 1,932</span></p>
                  
                </div>
                <div className="Right_stat">
                <p className="text-zinc-800 text-xs font-medium "> Females::  <span className="text-black">518</span></p>

                </div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Negative Cases */}

        <div className="CardWrapper bg-white rounded-lg overflow-hidden">
          <div className=" CardItems items-start shadow flex w-full max-w-[392px] grow flex-col mx-auto  max-md:mt-5 p-6">
            <div className="flex space-x-2">
              <div className="justify-center items-center  self-center flex w-12 max-w-full flex-col my-auto rounded-md">
                <img
                  loading="lazy"
                  src={IMAGES.image7}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-full overflow-hidden self-stretch "
                />
              </div>
              <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                <div className="text-gray-500 text-sm leading-5 self-start">
                  Negative Cases
                </div>
                <div className="items-start flex w-[68px] max-w-full gap-2 self-start">
                  <div className="text-gray-900 text-2xl font-semibold leading-8 self-start">
                    93,425
                  </div>
                  <div className="items-start flex gap-0 mt-3 self-start">
                    <img
                      loading="lazy"
                      src={IMAGES.image8}
                      alt={"logo"}
                      className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                    />
                    <div className="text-emerald-600 text-sm font-semibold leading-5 self-stretch whitespace-nowrap">
                      5.4%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-dashboard_bg w-full p-4">
              <div className="flex items-center gap-2 justify-evenly">
                <div className="Left_stat w-1/2">
                <p className="text-zinc-800 text-xs font-medium ">Males:  <span className="text-black"> 42,054</span></p>
                  
                </div>
                <div className="Right_stat">
                <p className="text-zinc-800 text-xs font-medium "> Females::  <span className="text-black">51,371</span></p>

                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cases;
