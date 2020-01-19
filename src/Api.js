const api = {
  key: "3f2e5dbaf5cf57927bf90f6b1acf3206",
  base: "https://api.openweathermap.org/data/2.5/"
};
//current weather
export function getCurrentWeather(query) {
  return fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  ).then(res => res.json());
}

//five days weather
//https://openweathermap.org/forecast5
export function getFiveDaysWeather(query) {
  return fetch(
    `${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`
  ).then(res => res.json());
}
