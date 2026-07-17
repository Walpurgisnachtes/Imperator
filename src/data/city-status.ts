import CityStatusDayGood from "../assets/city-status/day/casa-optima.svg?react";
import CityStatusDayBad from "../assets/city-status/day/casa-vetus.svg?react";
import CityStatusDayRuin from "../assets/city-status/day/casa-ignea.svg?react";

import CityStatusNightGood from "../assets/city-status/night/casa-optima.svg?react";
import CityStatusNightBad from "../assets/city-status/night/casa-vetus.svg?react";
import CityStatusNightRuin from "../assets/city-status/night/casa-ignea.svg?react";

export const cityStatusImages = {
  day: {
    good: CityStatusDayGood,
    bad: CityStatusDayBad,
    ruin: CityStatusDayRuin,
  },
  night: { 
    good: CityStatusNightGood,
    bad: CityStatusNightBad,
    ruin: CityStatusNightRuin,
  },
};

export function getCityStatusImage(status: "good" | "bad" | "ruin", isDarkMode: Boolean) {
  const timeOfDay = isDarkMode ? "night" : "day";
  return cityStatusImages[timeOfDay][status];
}


