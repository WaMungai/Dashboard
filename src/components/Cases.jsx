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
            <div className="bg-dashboard_bg w-full p-4">Footer</div>
          </div>
        </div>

        {/* Postive Cases */}

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
            <div className="bg-dashboard_bg w-full p-4">Footer</div>
          </div>
        </div>

        {/* Negative Cases */}

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
            <div className="bg-dashboard_bg w-full p-4">Footer</div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Cases;
