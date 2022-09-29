import React from "react";

type Props = {};

const WaveCard = (props: Props) => {
  return (
    <div className="border-secondary/80 border-2 w-full p-3 grid grid-cols-12  text-text overflow-hidden">
      <div className="flex flex-col gap-2 col-span-11">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          From{" "}
          <span className="bg-text/10 text-xs font-mono p-1 rounded cursor-pointer">
            0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
          </span>
        </div>
        <div className="text-sm sm:text-sm md:text-lg lg:text-2xl flex items-center justify-between">
          <span>0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 waved at you!</span>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <span className="text-xl md:text-4xl">👋</span>
      </div>
    </div>
  );
};

export default WaveCard;
