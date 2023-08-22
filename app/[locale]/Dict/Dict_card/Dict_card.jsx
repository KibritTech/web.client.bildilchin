import React from "react";

const Dict_card = ({ name, author }) => {
  return (
    <div className="bg-[#2e3e70] my-4 py-4 px-6 rounded-md flex justify-between cursor-pointer">
      <div>
        <p className="text-white text-sm">{name}</p>
        <p className="text-gray-500 text-xs">{author}</p>
      </div>

      <div className="flex items-center">
        <img className="h-5 w-5" src="/i.png" alt="i_icon" />
      </div>





    </div>
  );
};

export default Dict_card;
