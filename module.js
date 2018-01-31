var weather = require("weather-js");

function getCurrentWeather (location,t,callback){
	weather.find({search: location, degreeType: 'C'}, function(err, result) {
		if(err) console.log(err);
		var cur = [];
		cur.push(result[t]["location"]["name"]);
		cur.push(result[t]["current"]["date"]);
		cur.push(result[t]["current"]["temperature"]);
		callback(cur)
	});
}
function getWeatherForecast (location,t,callback){
	weather.find({search: location, degreeType: 'C'}, function(err, result) {
		if(err) console.log(err);
		var forecast = [];

		for(i=2;i<5;i++){
			var obj = {}
			obj["location"] = result[t]["location"]["name"];
			obj["date"] = result[t]["forecast"][i]["date"];
			obj["low"] = result[t]["forecast"][i]["low"];
			obj["high"] = result[t]["forecast"][i]["high"];
			forecast.push(obj);
		}
		callback(forecast);
	});
}
function getRelevantLocations (location,t,callback){
	weather.find({search: "Lviv", degreeType: 'C'}, function(err, result) {
		if(err) console.log(err);
		var locations = [];
		var l = result.length;

		for(i=0;i<l;i++){
			var obj = {}
			obj["location"] = result[i]["location"]["name"];
			obj["lat"] = result[i]["location"]["lat"];
			obj["long"] = result[i]["location"]["long"];
			locations.push(obj);
		}
		callback(locations);
	});
}

exports.getCurrentWeather = getCurrentWeather;
exports.getWeatherForecast = getWeatherForecast;
exports.getRelevantLocations = getRelevantLocations;


	