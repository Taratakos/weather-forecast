/*
// Remove feature that was build in last task
let weather = {
  paris: {
    temp: 20,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  'san francisco': {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 240,
  },
};

// write your code here
let cityName = prompt('Enter a city');
cityName = cityName.toLowerCase();
if (weather[cityName] !== undefined) {
  let temperature = weather[cityName].temp;
  let humidity = weather[cityName].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${cityName} with a humidity ${humidity}% `
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
  );
}
*/
