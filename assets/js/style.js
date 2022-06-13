var APIKey = "62df97dad542aecffdabda6ba9e1ae5f";
var listBoxEl = document.getElementById("cityList");
var cityInputEl = document.getElementById("citySearch")
var searchButtonEl = document.getElementById("searchButton")
var displayBoxEl = document.getElementById("display");
var forecastBoxEl = document.getElementById("forecast");
var city;

//to get location of city
var getLocation = function (city) {
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

//to get previous searched cities
var retrieveCities = function () {
    var retrievedCity = localStorage.getItem("newCty");
    console.log(retrievedCity);
    if(retrievedCity){
    addCity(retrievedCity);
    }
  };
