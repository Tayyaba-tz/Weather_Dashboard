// Mock weather data for both cities 
var weatherData = {
    lahore: {
        current: {
            temperature: 30,
            condition: 'sunny',
            description: 'Clear sky with bright sunshine',
            high: 35,
            low: 28,
            humidity: 45,
            windSpeed: 12,
            pressure: 1013,
            uvIndex: 8
        },
        // Hourly forecast with 24 hours of data
        hourly: [
            { time: '00:00', temp: 26, condition: 'night-cloudy' },
            { time: '01:00', temp: 25, condition: 'night-cloudy' },
            { time: '02:00', temp: 24, condition: 'night-cloudy' },
            { time: '03:00', temp: 24, condition: 'night-cloudy' },
            { time: '04:00', temp: 25, condition: 'night-cloudy' },
            { time: '05:00', temp: 26, condition: 'partly-cloudy' },
            { time: '06:00', temp: 27, condition: 'partly-cloudy' },
            { time: '07:00', temp: 28, condition: 'sunny' },
            { time: '08:00', temp: 29, condition: 'sunny' },
            { time: '09:00', temp: 30, condition: 'sunny' },
            { time: '10:00', temp: 31, condition: 'sunny' },
            { time: '11:00', temp: 32, condition: 'sunny' },
            { time: '12:00', temp: 34, condition: 'sunny' },
            { time: '13:00', temp: 35, condition: 'sunny' },
            { time: '14:00', temp: 35, condition: 'sunny' },
            { time: '15:00', temp: 34, condition: 'sunny' },
            { time: '16:00', temp: 33, condition: 'sunny' },
            { time: '17:00', temp: 32, condition: 'partly-cloudy' },
            { time: '18:00', temp: 31, condition: 'partly-cloudy' },
            { time: '19:00', temp: 30, condition: 'night-cloudy' },
            { time: '20:00', temp: 29, condition: 'night-cloudy' },
            { time: '21:00', temp: 28, condition: 'night-cloudy' },
            { time: '22:00', temp: 27, condition: 'night-cloudy' },
            { time: '23:00', temp: 26, condition: 'night-cloudy' }
        ],
        daily: [
            { day: 'Today', date: ' Aug 2', high: 35, low: 28, condition: 'sunny' },
            { day: 'Tomorrow', date: ' Aug 3', high: 33, low: 26, condition: 'partly-cloudy' },
            { day: 'Monday', date: ' Aug 4', high: 31, low: 25, condition: 'cloudy' },
            { day: 'Tuesday', date: ' Aug 5', high: 29, low: 23, condition: 'rainy' },
            { day: 'Wednesday', date: ' Aug 6', high: 27, low: 21, condition: 'rainy' }
        ]
    },
    karachi: {
        current: {
            temperature: 29,
            condition: 'partly-cloudy',
            description: 'Partly cloudy with sea breeze',
            high: 31,
            low: 26,
            humidity: 68,
            windSpeed: 18,
            pressure: 1011,
            uvIndex: 6
        },
        // Hourly forecast with 24 hours of data
        hourly: [
            { time: '00:00', temp: 25, condition: 'night-cloudy' },
            { time: '01:00', temp: 24, condition: 'night-cloudy' },
            { time: '02:00', temp: 24, condition: 'night-cloudy' },
            { time: '03:00', temp: 25, condition: 'night-cloudy' },
            { time: '04:00', temp: 25, condition: 'night-cloudy' },
            { time: '05:00', temp: 26, condition: 'cloudy' },
            { time: '06:00', temp: 26, condition: 'cloudy' },
            { time: '07:00', temp: 27, condition: 'cloudy' },
            { time: '08:00', temp: 27, condition: 'partly-cloudy' },
            { time: '09:00', temp: 28, condition: 'partly-cloudy' },
            { time: '10:00', temp: 29, condition: 'partly-cloudy' },
            { time: '11:00', temp: 30, condition: 'partly-cloudy' },
            { time: '12:00', temp: 31, condition: 'partly-cloudy' },
            { time: '13:00', temp: 31, condition: 'partly-cloudy' },
            { time: '14:00', temp: 30, condition: 'partly-cloudy' },
            { time: '15:00', temp: 30, condition: 'cloudy' },
            { time: '16:00', temp: 29, condition: 'cloudy' },
            { time: '17:00', temp: 29, condition: 'cloudy' },
            { time: '18:00', temp: 28, condition: 'cloudy' },
            { time: '19:00', temp: 28, condition: 'night-cloudy' },
            { time: '20:00', temp: 27, condition: 'night-cloudy' },
            { time: '21:00', temp: 27, condition: 'night-cloudy' },
            { time: '22:00', temp: 26, condition: 'night-cloudy' },
            { time: '23:00', temp: 26, condition: 'night-cloudy' }
        ],
        daily: [
            { day: 'Today', date: ' Aug 2', high: 31, low: 26, condition: 'partly-cloudy' },
            { day: 'Tomorrow', date: ' Aug 3', high: 30, low: 25, condition: 'cloudy' },
            { day: 'Monday', date: ' Aug 4', high: 28, low: 24, condition: 'rainy' },
            { day: 'Tuesday', date: ' Aug 5', high: 26, low: 22, condition: 'rainy' },
            { day: 'Wednesday', date: ' Aug 6', high: 29, low: 24, condition: 'partly-cloudy' }
        ]
    }
};

// Variables to keep track of current settings
var currentCity = 'lahore';
var isCelsius = true;

// Get all the HTML elements that need to update
var citySelect = document.getElementById('citySelect');
var tempToggle = document.getElementById('tempToggle');
var mainTemp = document.getElementById('mainTemp');
var mainWeatherIcon = document.getElementById('mainWeatherIcon');
var weatherDesc = document.getElementById('weatherDesc');
var tempRange = document.getElementById('tempRange');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('windSpeed');
var pressure = document.getElementById('pressure');
var uvIndex = document.getElementById('uvIndex');
var currentTime = document.getElementById('currentTime');
var currentDate = document.getElementById('currentDate');
var dailyForecast = document.getElementById('dailyForecast');
var hourlyForecast = document.getElementById('hourlyForecast');
var dashboard = document.querySelector('.weather-dashboard');

// Function to decide weather condition based on temperature
function getWeatherCondition(temperature) {
    if (temperature >= 30) {
        return 'sunny';
    }
    if (temperature >= 25) {
        return 'partly-cloudy';
    }
    if (temperature >= 20) {
        return 'cloudy';
    }
    return 'rainy';
}

// Function to convert temperature between Celsius and Fahrenheit
function convertTemperature(temp) {
    if (isCelsius) {
        return temp;
    } else {
        // Convert Celsius to Fahrenheit using basic math
        var fahrenheit = (temp * 9) / 5 + 32;
        return Math.round(fahrenheit);
    }
}

// Function to change the background image based on weather
function updateBackground(condition) {
    dashboard.className = 'weather-dashboard ' + condition;
}

// Function to update the weather icon
function updateWeatherIcon(element, condition) {
    element.className = 'weather-icon ' + condition;
}

// Function to update the main weather display
function updateCurrentWeather() {
    // Get the weather data for the current city
    var data = weatherData[currentCity].current;

    // Update the main temperature
    mainTemp.textContent = convertTemperature(data.temperature);

    // Update the weather icon
    updateWeatherIcon(mainWeatherIcon, data.condition);

    // Update the background image
    updateBackground(data.condition);

    // Update the weather description
    weatherDesc.textContent = data.description;

    // Update the high and low temperatures
    var highTemp = convertTemperature(data.high);
    var lowTemp = convertTemperature(data.low);
    tempRange.textContent = 'H: ' + highTemp + '° L: ' + lowTemp + '°';

    // Update all the weather details
    humidity.textContent = data.humidity + '%';
    windSpeed.textContent = data.windSpeed + ' km/h';
    pressure.textContent = data.pressure + ' mb';
    uvIndex.textContent = data.uvIndex;
}

// Function to clear all child elements from a container
function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Function to create a daily forecast item element
function createDailyItem(day) {
    // Create the main container div
    var dayElement = document.createElement('div');
    dayElement.className = 'daily-item';

    // Create the daily info section
    var dailyInfo = document.createElement('div');
    dailyInfo.className = 'daily-info';

    var dayTitle = document.createElement('h4');
    dayTitle.textContent = day.day;
    dailyInfo.appendChild(dayTitle);

    var dayDate = document.createElement('p');
    dayDate.textContent = day.date;
    dailyInfo.appendChild(dayDate);

    dayElement.appendChild(dailyInfo);

    // Create the daily weather section
    var dailyWeather = document.createElement('div');
    dailyWeather.className = 'daily-weather';

    var dailyIcon = document.createElement('div');
    dailyIcon.className = 'daily-icon ' + day.condition;
    dailyWeather.appendChild(dailyIcon);

    var dailyTemps = document.createElement('div');
    dailyTemps.className = 'daily-temps';

    var highTemp = convertTemperature(day.high);
    var lowTemp = convertTemperature(day.low);

    var highDiv = document.createElement('div');
    highDiv.className = 'high';
    highDiv.textContent = highTemp + '°';
    dailyTemps.appendChild(highDiv);

    var lowDiv = document.createElement('div');
    lowDiv.className = 'low';
    lowDiv.textContent = lowTemp + '°';
    dailyTemps.appendChild(lowDiv);

    dailyWeather.appendChild(dailyTemps);
    dayElement.appendChild(dailyWeather);

    return dayElement;
}

// Function to update the 5-day forecast
function updateDailyForecast() {
    // Get the daily forecast data for the current city
    var data = weatherData[currentCity].daily;

    // Clear the existing forecast
    clearContainer(dailyForecast);

    // Loop through each day and create the forecast items
    for (var i = 0; i < data.length; i++) {
        var day = data[i];
        var dayElement = createDailyItem(day);
        dailyForecast.appendChild(dayElement);
    }
}

// Function to create an hourly forecast item element
function createHourlyItem(hour) {
    var hourlyItem = document.createElement('div');
    hourlyItem.className = 'hourly-item';

    var timeDiv = document.createElement('div');
    timeDiv.className = 'time';
    timeDiv.textContent = hour.time;
    hourlyItem.appendChild(timeDiv);

    var iconDiv = document.createElement('div');
    iconDiv.className = 'icon ' + hour.condition;
    hourlyItem.appendChild(iconDiv);

    var tempDiv = document.createElement('div');
    tempDiv.className = 'temp';
    var temp = convertTemperature(hour.temp);
    tempDiv.textContent = temp + '°';
    hourlyItem.appendChild(tempDiv);

    return hourlyItem;
}

// Function to update the hourly forecast
function updateHourlyForecast() {
    // Get the hourly forecast data for the current city
    var data = weatherData[currentCity].hourly;

    // Clear the existing hourly forecast
    clearContainer(hourlyForecast);

    // Create the hourly items container
    var hourlyItems = document.createElement('div');
    hourlyItems.className = 'hourly-items';

    // Loop through each hour and create the forecast items
    for (var i = 0; i < data.length; i++) {
        var hour = data[i];
        var hourlyItem = createHourlyItem(hour);
        hourlyItems.appendChild(hourlyItem);
    }

    // Add the hourly items container to the hourly forecast
    hourlyForecast.appendChild(hourlyItems);
}

// Function to update the current time and date
function updateDateTime() {
    var now = new Date();

    // Get the current time
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if needed
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // Update the time display
    var timeString = hours + ':' + minutes + ':' + seconds;
    currentTime.textContent = timeString;

    // Get the current date
    var days = ['Today', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dayNumber = now.getDate();
    var year = now.getFullYear();

    // Update the date display
    var dateString = dayName + ', ' + monthName + ' ' + dayNumber + ', ' + year;
    currentDate.textContent = dateString;
}

// Function to update all weather data
function updateAllWeatherData() {
    updateCurrentWeather();
    updateDailyForecast();
    updateHourlyForecast();
}

// When the city selector changes
citySelect.addEventListener('change', function () {
    currentCity = citySelect.value;
    updateAllWeatherData();
});

// When the temperature toggle button is clicked
tempToggle.addEventListener('click', function () {
    if (isCelsius) {
        isCelsius = false;
        tempToggle.textContent = 'F';
    } else {
        isCelsius = true;
        tempToggle.textContent = 'C';
    }
    updateAllWeatherData();
});

// Function to start the application
function startApp() {
    // Set the initial city
    citySelect.value = currentCity;

    // Update the time and date right away
    updateDateTime();

    // Update all the weather data
    updateAllWeatherData();

    // Update the time every second
    setInterval(updateDateTime, 1000);
}

// Start the app when the page loads
document.addEventListener('DOMContentLoaded', startApp);
