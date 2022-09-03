import React from "react";
import search from "../../assets/icons/search.svg";

export default function SearchBar({ placeholder, onChange, value, widthSize = "100%" }) {
  return (
    <div className={`relative w-[${widthSize}] border border-[#DADADA] rounded-lg`}>
      <img src={search} alt="search" className="absolute ml-[2%] top-3" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 w-full bg-BACKGROUND_WHITE px-[11%] rounded-xl outline-none"
      />
    </div>
  );
}
