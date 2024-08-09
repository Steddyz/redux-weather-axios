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

  return (
    <div className="main-gradient p-3 ">
      <input ref={inputRef} placeholder="City Name" />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
}
