export function dateBuilderTool(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// ISO 8601 Extended format
// `YYYY-MM-DDTHH:mm:ss:sssZ`

//2020-01-20 03:00:00
//https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
export function GetForecastDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const newDate = new Date(date);
  console.log(newDate); //Mon Jan 20 2020 00:00:00 GMT+1300 (New Zealand Daylight Time)
  const monthName = months[newDate.getMonth()];
  console.log(monthName);

  const dayName = days[newDate.getDay()]; // Thu
  console.log(dayName);

  const hour = newDate.getHours();
  let amPm = "am";
  if(hour > 12) {amPm ="pm" }else{ amPm= "am"};

  console.log(hour);

  const finalDate = monthName + " " +newDate.getDate() +  " " + dayName + " " + hour + amPm;
  return finalDate;
}

export function GroupCards(item) {
  
  let temps = [];
  let wind = [];


}






