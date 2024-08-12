import React from "react";
import { useSelector } from "react-redux";
import { IconType } from "../utils/IconType";

import {
  WiDayShowers,
  WiDayRain,
  WiDayRainMix,
  WiCloud,
  WiCloudy,
  WiDaySunny,
} from "react-icons/wi";

function Icon({ iconType }) {
  let className = "w-full my-5 text-[6rem]";

  switch (iconType) {
    case IconType.LIGHT_RAIN:
      return <WiDayShowers className={className} />;
    case IconType.MODERATE_RAIN:
      return <WiDayRain className={className} />;
    case IconType.HEAVY_RAIN:
      return <WiDayRainMix className={className} />;
    case IconType.LIGHT_CLOUD:
      return <WiDaySunny className={className} />;
    case IconType.MODERATE_CLOUD:
      return <WiCloud className={className} />;
    case IconType.HEAVY_CLOUD:
      return <WiCloudy className={className} />;
    default:
      break;
  }
  return <></>;
}

export default function OutputBlock() {
  const data = useSelector((store) => store.weather.data);

  return (
    <div className="flex jusctify-startgap-x-5 gap-5  ">
      {data?.map((item) => {
        return (
          <div
            className="  rounded-lg shadow-lg px-5 py-2  text-xl bg-white/40"
            key={item.id}
          >
            <Icon iconType={item.iconType} />
            <p className="p-5  pt-0 text-xl">{item.temp} °C</p>
            <hr className="border-purple-950 " />
            <p className="flex p-5 text-base justify-center">{item.time}</p>
          </div>
        );
      })}
    </div>
  );
}
