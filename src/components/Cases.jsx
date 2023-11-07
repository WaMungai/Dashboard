import React from "react";
import IMAGES from "../images/Images";

function Cases() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div className="items-start shadow bg-white flex w-full max-w-[392px] grow flex-col mx-auto pt-6 rounded-lg max-md:mt-5">
          <div className="items-start self-center flex w-[344px] max-w-full gap-5">
            <div className="justify-center items-center bg-blue-500 self-center flex w-12 max-w-full flex-col my-auto p-3 rounded-md">
              <img
                loading="lazy"
                src={IMAGES.image5}
                alt={"logo"}
                className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
              />
            </div>
            <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
              <div className="text-gray-500 text-sm font-medium leading-5 self-start">
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
          <div className="justify-center items-start self-stretch bg-gray-50 flex w-full h-[52px] flex-col mt-6" />
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col max-md:max-w-full max-md:mt-5">
          <div className="self-stretch pr-2.5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-start bg-white flex w-full max-w-[392px] grow justify-between gap-5 mx-auto p-6 rounded-lg max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-center bg-red-500 self-center flex w-12 max-w-full flex-col my-auto p-3 rounded-md">
                    <img
                      loading="lazy"
                      src={IMAGES.image6}
                      alt={"logo"}
                      className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    />
                  </div>
                  <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                    <div className="self-stretch text-gray-500 text-sm font-medium leading-5">
                      Positive Cases
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-2 pr-16 max-md:pr-5">
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
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start bg-white flex w-full max-w-[392px] grow justify-between gap-5 mx-auto p-6 rounded-lg max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-center bg-lime-500 self-center flex w-12 max-w-full flex-col my-auto p-3 rounded-md">
                    <img
                      loading="lazy"
                      src={IMAGES.image7}
                      alt={"logo"}
                      className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                    />
                  </div>
                  <div className="items-start self-stretch flex flex-col grow shrink-0 basis-auto">
                    <div className="self-stretch text-gray-500 text-sm font-medium leading-5">
                      Negative Cases
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-2 pr-12 max-md:pr-5">
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
            </div>
          </div>
          <div className="self-stretch flex items-start justify-between gap-5 pr-2.5 max-md:max-w-full max-md:flex-wrap">
            <div className="bg-gray-50 flex grow shrink basis-auto items-start justify-between gap-5 flex-1 pl-7 pr-20 py-5 rounded-none max-md:px-5">
              <div className="self-stretch flex items-start justify-between gap-0.5">
                <div className="text-gray-500 text-xs font-bold leading-5 uppercase self-start">
                  Males:
                </div>
                <div className="text-zinc-800 text-xs font-medium leading-5 uppercase whitespace-nowrap self-start">
                  <span className="text-black"> 1</span>
                  <span className="text-zinc-800">,932</span>
                </div>
              </div>
              <div className="self-stretch flex items-start justify-between gap-0.5">
                <div className="text-gray-500 text-xs font-bold leading-5 uppercase self-stretch">
                  Females:
                </div>
                <div className="text-gray-500 text-xs font-medium leading-5 uppercase self-stretch whitespace-nowrap">
                  {" "}
                  518
                </div>
              </div>
            </div>
            <div className="bg-gray-50 flex grow shrink basis-auto items-start justify-between gap-5 flex-1 pl-7 pr-14 py-5 rounded-none max-md:px-5">
              <div className="self-stretch flex items-start justify-between gap-2">
                <div className="text-gray-500 text-xs font-bold leading-5 uppercase self-start">
                  Males:
                </div>
                <div className="text-gray-500 text-xs font-medium leading-5 uppercase whitespace-nowrap self-start">
                  42,054
                </div>
              </div>
              <div className="self-stretch flex items-start justify-between gap-2">
                <div className="text-gray-500 text-xs font-bold leading-5 uppercase self-start">
                  Females:
                </div>
                <div className="text-gray-500 text-xs font-medium leading-5 uppercase whitespace-nowrap self-start">
                  51,371
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cases;
