import { useRef } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getWeather } from "./store/weatherSlice";

function App() {
  const dispatch = useDispatch();

  let inputRef = useRef(null);

  const clickHandler = () => {
    dispatch(getWeather(inputRef.current.value));
  };

  return (
    <div>
      <input ref={inputRef} placeholder="City Name" />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
}

export default App;
