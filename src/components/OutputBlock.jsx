import React from "react";
import { useSelector } from "react-redux";

export default function OutputBlock() {
  const data = useSelector((store) => store.weather.data);

  return (
    <div className="flex jusctify-startgap-x-5 gap-5 mt-10 ">
      {data?.map((item) => {
        return (
          <div
            className="  rounded-lg shadow-lg px-5 py-2  text-xl bg-white/40"
            key={item.id}
          >
            <p className="p-5 text-xl">{item.temp} °C</p>
            <hr className="border-purple-950 " />
            <p className="flex p-5 text-base justify-center">{item.time}</p>
          </div>
        );
      })}
    </div>
  );
}
