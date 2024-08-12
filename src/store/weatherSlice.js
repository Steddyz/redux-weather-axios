import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async function (cityName) {
    try {
      const coordinates = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );

      let { latitude, longitude } = coordinates.data.results[0];

      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&timezone=auto&forecast_days=1`
      );
      let { temperature_2m, rain, cloud_cover } = response.data.hourly;
      let temperature = [];

      const getIconType = (rain, cloud_cover) => {
        let iconType = "";
        iconType =
          cloud_cover > 50
            ? "heavy cloud"
            : cloud_cover > 30
            ? "moderate cloud"
            : "light cloud";
        iconType =
          rain > 7.6
            ? "heavy rain"
            : rain > 2.5
            ? "moderate rain"
            : rain > 1
            ? "light_rain"
            : iconType;
        return iconType;
      };

      for (let i = 6; i <= 21; i += 3) {
        temperature.push({
          id: cityName + i,
          time: `${i}:00`,
          temp: temperature_2m[i],
          iconType: getIconType(rain[i], cloud_cover[i]),
        });
      }

      return temperature;
    } catch (e) {
      throw new Error("Check the city name is correct");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
  },

  extraReducers(builder) {
    builder.addCase(getWeather.pending, (state, action) => {
      console.log("loading...");
    });
    builder.addCase(getWeather.fulfilled, (state, action) => {
      console.log("End loading");
      state.data = action.payload;
    });

    builder.addCase(getWeather.rejected, (state, action) => {
      console.log("End loading");
      alert(action.error.message);
    });
  },
});

export const weatherReducer = weatherSlice.reducer;
