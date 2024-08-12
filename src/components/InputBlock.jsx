import React from "react";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../store/weatherSlice";

export default function InputBlock() {
  const dispatch = useDispatch();

  let inputRef = useRef(null);

  const clickHandler = () => {
    dispatch(getWeather(inputRef.current.value));
  };

  dispatch(getWeather("London"));

  return (
    <div className="flex justify-around rounded-lg shadow-xl p-5 bg-white/40">
      <input
        className="capitalize outline-none text-xl w-3/4 rounded-lg  px-5 py-2 bg-white/40"
        ref={inputRef}
        placeholder="City Name"
      />
      <button
        className="rounded-lg px-5 py-2 bg-white/40 text-xl"
        onClick={clickHandler}
      >
        Button
      </button>
    </div>
  );
}
