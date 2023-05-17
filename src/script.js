function formatDate(date) {
  let dateNumber = date.getDate();

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let currentHours = date.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = ` 0${currentMinutes}`;
  }

  return `${currentDay} ${currentMonth} ${dateNumber}/${currentYear} ${currentHours}:${currentMinutes}`;
}

let currentTime = new Date();
let dateListItem = document.querySelector('#date-item');

dateListItem.innerHTML = formatDate(currentTime);

/*
Challenge 2
So we basically want to say, every time I type something in city-input it should show the text which I typed
*/
function showCityName(event) {
  event.preventDefault();
  let searchCityName = document.querySelector('#search-input');
  document.querySelector('h1').innerHTML = searchCityName.value;
}

let searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', showCityName);

/*
Challenge 3
*/
function convertToFahrenheit(event) {
  event.preventDefault(); // because we don't want to link to anything
  // we want ta access to this tempElement
  let temperatureElement = document.querySelector('#temperature');
  // let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault(); // because we don't want to link to anything
  // we want ta access to this tempElement
  let temperatureElement = document.querySelector('#temperature');
  // let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = 19;
}

let temperatureElement = document.querySelector('#temperature');
let temperature = temperatureElement.innerHTML;
temperature = Number(temperature);

let fahrenheitLink = document.querySelector('#fahrenheit-link');
fahrenheitLink.addEventListener('click', convertToFahrenheit);

let celsiusLink = document.querySelector('#celsius-link');
celsiusLink.addEventListener('click', convertToCelsius);
