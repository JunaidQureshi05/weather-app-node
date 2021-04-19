const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=2aa329e04171513327c052b5c57aa514&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    const { current } = response.body;
    console.log(
      `It is currently ${current.temperature} degree out.It feels like ${current.feelslike} degree out.`
    );
  }
});
const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianVuYWlkcXVyZXNoaTAwNyIsImEiOiJja2Q3MXJ6NmIwYzU3MnF0Z2k2dzM3Y3NmIn0.ECgO7Qquqj9CIMgYMJ-INA&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location.Try another search');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
