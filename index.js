var weather = require("./module");
const http = require('http');

var locations = [
  'London',
  'Lviv, Ukraine',
  'Kyiv, Ukraine'
];
var count = Math.floor((Math.random() * locations.length) + 1) -1;
console.log(locations[count]);
console.log(count);

var CurrentWather = "";
CurrentWather += "\n" + "Current Wather:";
var ForecastWather = "";
ForecastWather += "\n" + "Forecast Wather:";
var RelevantLocations = "";
RelevantLocations += "\n" + "Relevant Locations:";

var a = weather.getCurrentWeather(locations[count],1,function (data) {
   CurrentWather += "\n" + JSON.stringify(data);

});

weather.getWeatherForecast(locations[count],1,function (data) {
   ForecastWather += "\n" + JSON.stringify(data);
});

weather.getRelevantLocations(locations[count],1,function (data) {
   RelevantLocations += "\n" + JSON.stringify(data);
});



setTimeout(function() {

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(CurrentWather);
    res.write(ForecastWather);
    res.write(RelevantLocations);
    res.end();
});

server.listen(8080);

}, 1000);