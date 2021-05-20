const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=deb567b326099ba33eed07c0d030546d&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Its Currently " +
          body.current.weather_descriptions[0] +
          " out there. And the temperature is " +
          body.current.temperature +
          " degress. Having " +
          body.current.precip +
          "% chances of rain."
      );
    }
  });
};

module.exports = forecast;
