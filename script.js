// Mock weather data for all cities 
var weatherData = {
    lahore: {
        current: {
            temperature: 32,
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
            { day: 'Today', date: 'Jul 30', high: 35, low: 28, condition: 'sunny' },
            { day: 'Tomorrow', date: 'Jul 31', high: 33, low: 26, condition: 'partly-cloudy' },
            { day: 'Thursday', date: 'Aug 1', high: 31, low: 25, condition: 'cloudy' },
            { day: 'Friday', date: 'Aug 2', high: 29, low: 23, condition: 'rainy' },
            { day: 'Saturday', date: 'Aug 3', high: 27, low: 21, condition: 'rainy' }
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
            { day: 'Today', date: 'Jul 30', high: 31, low: 26, condition: 'partly-cloudy' },
            { day: 'Tomorrow', date: 'Jul 31', high: 30, low: 25, condition: 'cloudy' },
            { day: 'Thursday', date: 'Aug 1', high: 28, low: 24, condition: 'rainy' },
            { day: 'Friday', date: 'Aug 2', high: 26, low: 22, condition: 'rainy' },
            { day: 'Saturday', date: 'Aug 3', high: 29, low: 24, condition: 'partly-cloudy' }
        ]
    },
    islamabad: {
        current: {
            temperature: 28,
            condition: 'partly-cloudy',
            description: 'Pleasant weather with scattered clouds',
            high: 30,
            low: 22,
            humidity: 55,
            windSpeed: 8,
            pressure: 1015,
            uvIndex: 7
        },
        hourly: [
            { time: '00:00', temp: 20, condition: 'night-clear' },
            { time: '01:00', temp: 19, condition: 'night-clear' },
            { time: '02:00', temp: 18, condition: 'night-clear' },
            { time: '03:00', temp: 18, condition: 'night-clear' },
            { time: '04:00', temp: 19, condition: 'night-clear' },
            { time: '05:00', temp: 20, condition: 'partly-cloudy' },
            { time: '06:00', temp: 22, condition: 'partly-cloudy' },
            { time: '07:00', temp: 24, condition: 'sunny' },
            { time: '08:00', temp: 25, condition: 'sunny' },
            { time: '09:00', temp: 26, condition: 'sunny' },
            { time: '10:00', temp: 27, condition: 'sunny' },
            { time: '11:00', temp: 28, condition: 'partly-cloudy' },
            { time: '12:00', temp: 29, condition: 'partly-cloudy' },
            { time: '13:00', temp: 30, condition: 'partly-cloudy' },
            { time: '14:00', temp: 30, condition: 'partly-cloudy' },
            { time: '15:00', temp: 29, condition: 'partly-cloudy' },
            { time: '16:00', temp: 28, condition: 'partly-cloudy' },
            { time: '17:00', temp: 27, condition: 'cloudy' },
            { time: '18:00', temp: 26, condition: 'cloudy' },
            { time: '19:00', temp: 24, condition: 'night-cloudy' },
            { time: '20:00', temp: 23, condition: 'night-cloudy' },
            { time: '21:00', temp: 22, condition: 'night-cloudy' },
            { time: '22:00', temp: 21, condition: 'night-cloudy' },
            { time: '23:00', temp: 20, condition: 'night-cloudy' }
        ],
        daily: [
            { day: 'Today', date: 'Jul 30', high: 30, low: 22, condition: 'partly-cloudy' },
            { day: 'Tomorrow', date: 'Jul 31', high: 28, low: 20, condition: 'cloudy' },
            { day: 'Thursday', date: 'Aug 1', high: 26, low: 18, condition: 'rainy' },
            { day: 'Friday', date: 'Aug 2', high: 24, low: 16, condition: 'thunderstorm' },
            { day: 'Saturday', date: 'Aug 3', high: 27, low: 19, condition: 'partly-cloudy' }
        ]
    },
    peshawar: {
        current: {
            temperature: 35,
            condition: 'sunny',
            description: 'Hot and dry with clear skies',
            high: 38,
            low: 30,
            humidity: 35,
            windSpeed: 15,
            pressure: 1010,
            uvIndex: 9
        },
        hourly: [
            { time: '00:00', temp: 28, condition: 'night-clear' },
            { time: '01:00', temp: 27, condition: 'night-clear' },
            { time: '02:00', temp: 26, condition: 'night-clear' },
            { time: '03:00', temp: 26, condition: 'night-clear' },
            { time: '04:00', temp: 27, condition: 'night-clear' },
            { time: '05:00', temp: 28, condition: 'sunny' },
            { time: '06:00', temp: 30, condition: 'sunny' },
            { time: '07:00', temp: 32, condition: 'sunny' },
            { time: '08:00', temp: 33, condition: 'sunny' },
            { time: '09:00', temp: 34, condition: 'sunny' },
            { time: '10:00', temp: 35, condition: 'sunny' },
            { time: '11:00', temp: 36, condition: 'sunny' },
            { time: '12:00', temp: 37, condition: 'sunny' },
            { time: '13:00', temp: 38, condition: 'sunny' },
            { time: '14:00', temp: 38, condition: 'sunny' },
            { time: '15:00', temp: 37, condition: 'sunny' },
            { time: '16:00', temp: 36, condition: 'sunny' },
            { time: '17:00', temp: 35, condition: 'sunny' },
            { time: '18:00', temp: 34, condition: 'partly-cloudy' },
            { time: '19:00', temp: 32, condition: 'night-clear' },
            { time: '20:00', temp: 31, condition: 'night-clear' },
            { time: '21:00', temp: 30, condition: 'night-clear' },
            { time: '22:00', temp: 29, condition: 'night-clear' },
            { time: '23:00', temp: 28, condition: 'night-clear' }
        ],
        daily: [
            { day: 'Today', date: 'Jul 30', high: 38, low: 30, condition: 'sunny' },
            { day: 'Tomorrow', date: 'Jul 31', high: 36, low: 28, condition: 'sunny' },
            { day: 'Thursday', date: 'Aug 1', high: 34, low: 26, condition: 'partly-cloudy' },
            { day: 'Friday', date: 'Aug 2', high: 32, low: 24, condition: 'windy' },
            { day: 'Saturday', date: 'Aug 3', high: 35, low: 27, condition: 'sunny' }
        ]
    },
    quetta: {
        current: {
            temperature: 22,
            condition: 'cloudy',
            description: 'Cool and cloudy mountain weather',
            high: 25,
            low: 15,
            humidity: 60,
            windSpeed: 20,
            pressure: 1018,
            uvIndex: 4
        },
        hourly: [
            { time: '00:00', temp: 12, condition: 'night-clear' },
            { time: '01:00', temp: 11, condition: 'night-clear' },
            { time: '02:00', temp: 10, condition: 'night-clear' },
            { time: '03:00', temp: 10, condition: 'night-clear' },
            { time: '04:00', temp: 11, condition: 'night-clear' },
            { time: '05:00', temp: 13, condition: 'cloudy' },
            { time: '06:00', temp: 15, condition: 'cloudy' },
            { time: '07:00', temp: 17, condition: 'cloudy' },
            { time: '08:00', temp: 18, condition: 'cloudy' },
            { time: '09:00', temp: 19, condition: 'cloudy' },
            { time: '10:00', temp: 20, condition: 'cloudy' },
            { time: '11:00', temp: 21, condition: 'cloudy' },
            { time: '12:00', temp: 22, condition: 'cloudy' },
            { time: '13:00', temp: 24, condition: 'partly-cloudy' },
            { time: '14:00', temp: 25, condition: 'partly-cloudy' },
            { time: '15:00', temp: 24, condition: 'cloudy' },
            { time: '16:00', temp: 23, condition: 'cloudy' },
            { time: '17:00', temp: 22, condition: 'cloudy' },
            { time: '18:00', temp: 20, condition: 'cloudy' },
            { time: '19:00', temp: 18, condition: 'night-cloudy' },
            { time: '20:00', temp: 16, condition: 'night-cloudy' },
            { time: '21:00', temp: 15, condition: 'night-cloudy' },
            { time: '22:00', temp: 14, condition: 'night-cloudy' },
            { time: '23:00', temp: 13, condition: 'night-cloudy' }
        ],
        daily: [
            { day: 'Today', date: 'Jul 30', high: 25, low: 15, condition: 'cloudy' },
            { day: 'Tomorrow', date: 'Jul 31', high: 23, low: 13, condition: 'rainy' },
            { day: 'Thursday', date: 'Aug 1', high: 20, low: 10, condition: 'thunderstorm' },
            { day: 'Friday', date: 'Aug 2', high: 18, low: 8, condition: 'windy' },
            { day: 'Saturday', date: 'Aug 3', high: 22, low: 12, condition: 'partly-cloudy' }
        ]
    },
    gilgit: {
        current: {
            temperature: 18,
            condition: 'partly-cloudy',
            description: 'Cool mountain air with scattered clouds',
            high: 20,
            low: 8,
            humidity: 65,
            windSpeed: 12,
            pressure: 1020,
            uvIndex: 5
        },
        hourly: [
            { time: '00:00', temp: 6, condition: 'night-clear' },
            { time: '01:00', temp: 5, condition: 'night-clear' },
            { time: '02:00', temp: 4, condition: 'night-clear' },
            { time: '03:00', temp: 4, condition: 'night-clear' },
            { time: '04:00', temp: 5, condition: 'night-clear' },
            { time: '05:00', temp: 7, condition: 'partly-cloudy' },
            { time: '06:00', temp: 9, condition: 'partly-cloudy' },
            { time: '07:00', temp: 11, condition: 'partly-cloudy' },
            { time: '08:00', temp: 13, condition: 'partly-cloudy' },
            { time: '09:00', temp: 15, condition: 'partly-cloudy' },
            { time: '10:00', temp: 16, condition: 'partly-cloudy' },
            { time: '11:00', temp: 17, condition: 'partly-cloudy' },
            { time: '12:00', temp: 18, condition: 'partly-cloudy' },
            { time: '13:00', temp: 19, condition: 'partly-cloudy' },
            { time: '14:00', temp: 20, condition: 'partly-cloudy' },
            { time: '15:00', temp: 19, condition: 'partly-cloudy' },
            { time: '16:00', temp: 18, condition: 'partly-cloudy' },
            { time: '17:00', temp: 16, condition: 'cloudy' },
            { time: '18:00', temp: 14, condition: 'cloudy' },
            { time: '19:00', temp: 12, condition: 'night-cloudy' },
            { time: '20:00', temp: 10, condition: 'night-cloudy' },
            { time: '21:00', temp: 9, condition: 'night-cloudy' },
            { time: '22:00', temp: 8, condition: 'night-cloudy' },
            { time: '23:00', temp: 7, condition: 'night-cloudy' }
        ],
        daily: [
            { day: 'Today', date: 'Jul 30', high: 20, low: 8, condition: 'partly-cloudy' },
            { day: 'Tomorrow', date: 'Jul 31', high: 18, low: 6, condition: 'cloudy' },
            { day: 'Thursday', date: 'Aug 1', high: 15, low: 3, condition: 'rainy' },
            { day: 'Friday', date: 'Aug 2', high: 12, low: 0, condition: 'windy' },
            { day: 'Saturday', date: 'Aug 3', high: 17, low: 5, condition: 'partly-cloudy' }
        ]
    },
    muzaffarabad: {
        current: {
            temperature: 25,
            condition: 'rainy',
            description: 'Light rain with cool mountain breeze',
            high: 27,
            low: 18,
            humidity: 75,
            windSpeed: 10,
            pressure: 1016,
            uvIndex: 3
        },
        hourly: [
            { time: '00:00', temp: 16, condition: 'night-rainy' },
            { time: '01:00', temp: 15, condition: 'night-rainy' },
            { time: '02:00', temp: 15, condition: 'night-rainy' },
            { time: '03:00', temp: 15, condition: 'night-rainy' },
            { time: '04:00', temp: 16, condition: 'night-rainy' },
            { time: '05:00', temp: 17, condition: 'rainy' },
            { time: '06:00', temp: 18, condition: 'rainy' },
            { time: '07:00', temp: 19, condition: 'rainy' },
            { time: '08:00', temp: 20, condition: 'rainy' },
            { time: '09:00', temp: 22, condition: 'rainy' },
            { time: '10:00', temp: 23, condition: 'rainy' },
            { time: '11:00', temp: 24, condition: 'rainy' },
            { time: '12:00', temp: 25, condition: 'rainy' },
            { time: '13:00', temp: 26, condition: 'thunderstorm' },
            { time: '14:00', temp: 27, condition: 'thunderstorm' },
            { time: '15:00', temp: 26, condition: 'rainy' },
            { time: '16:00', temp: 25, condition: 'rainy' },
            { time: '17:00', temp: 24, condition: 'rainy' },
            { time: '18:00', temp: 22, condition: 'rainy' },
            { time: '19:00', temp: 21, condition: 'night-rainy' },
            { time: '20:00', temp: 20, condition: 'night-rainy' },
            { time: '21:00', temp: 19, condition: 'night-rainy' },
            { time: '22:00', temp: 18, condition: 'night-rainy' },
            { time: '23:00', temp: 17, condition: 'night-rainy' }
        ],
        daily: [
            { day: 'Today', date: 'Jul 30', high: 27, low: 18, condition: 'rainy' },
            { day: 'Tomorrow', date: 'Jul 31', high: 25, low: 16, condition: 'thunderstorm' },
            { day: 'Thursday', date: 'Aug 1', high: 22, low: 14, condition: 'thunderstorm' },
            { day: 'Friday', date: 'Aug 2', high: 20, low: 12, condition: 'rainy' },
            { day: 'Saturday', date: 'Aug 3', high: 24, low: 15, condition: 'cloudy' }
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

// Function to get time-based weather condition
function getTimeBasedCondition(baseCondition, hour) {
    // Night time is from 19:00 to 5:00 (7 PM to 5 AM)
    var isNightTime = hour >= 19 || hour < 5;
    
    if (!isNightTime) {
        // Day time - return original condition
        return baseCondition;
    }
    
    // Night time - convert to night version
    switch (baseCondition) {
        case 'sunny':
        case 'partly-cloudy':
            return 'night-clear';
        case 'cloudy':
            return 'night-cloudy';
        case 'rainy':
        case 'thunderstorm':
            return 'night-rainy';
        case 'windy':
            return 'night-clear';
        default:
            return baseCondition;
    }
}

// Function to update hourly forecast with time-based conditions
function updateHourlyConditions() {
    for (var cityKey in weatherData) {
        var cityData = weatherData[cityKey];
        for (var i = 0; i < cityData.hourly.length; i++) {
            var hourData = cityData.hourly[i];
            var hour = parseInt(hourData.time.split(':')[0]);
            
            // Get base condition from original data or determine from temperature
            var baseCondition = hourData.originalCondition || hourData.condition;
            
            // Store original condition if not already stored
            if (!hourData.originalCondition) {
                hourData.originalCondition = hourData.condition;
            }
            
            // Update condition based on time
            hourData.condition = getTimeBasedCondition(baseCondition, hour);
        }
    }
}

// Function to get weather description based on condition
function getWeatherDescription(condition, temperature) {
    var descriptions = {
        'sunny': 'Clear sky with bright sunshine',
        'partly-cloudy': 'Partly cloudy with scattered clouds',
        'cloudy': 'Overcast with thick cloud cover',
        'rainy': 'Light to moderate rainfall',
        'thunderstorm': 'Thunderstorms with heavy rain and lightning',
        'windy': 'Strong winds with clear to partly cloudy skies',
        'night-clear': 'Clear night sky with stars visible',
        'night-cloudy': 'Cloudy night with overcast skies',
        'night-rainy': 'Rainy night with light to moderate precipitation'
    };
    
    var baseDescription = descriptions[condition] || 'Weather conditions';
    
    // Add temperature context
    if (temperature >= 35) {
        return baseDescription + ' - Very hot weather';
    } else if (temperature >= 30) {
        return baseDescription + ' - Hot weather';
    } else if (temperature >= 25) {
        return baseDescription + ' - Warm weather';
    } else if (temperature >= 20) {
        return baseDescription + ' - Pleasant weather';
    } else if (temperature >= 15) {
        return baseDescription + ' - Cool weather';
    } else if (temperature >= 10) {
        return baseDescription + ' - Cold weather';
    } else {
        return baseDescription + ' - Very cold weather';
    }
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
    
    // Get current hour for time-based condition
    var now = new Date();
    var currentHour = now.getHours();
    
    // Get time-based condition
    var timeBasedCondition = getTimeBasedCondition(data.condition, currentHour);

    // Update the main temperature
    mainTemp.textContent = convertTemperature(data.temperature);

    // Update the weather icon with time-based condition
    updateWeatherIcon(mainWeatherIcon, timeBasedCondition);

    // Update the background image with time-based condition
    updateBackground(timeBasedCondition);

    // Update the weather description
    weatherDesc.textContent = getWeatherDescription(timeBasedCondition, data.temperature);

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
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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

// Function to update forecast dates and days automatically
function updateForecastDates() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Update daily forecast dates for all cities
    for (var cityKey in weatherData) {
        var cityData = weatherData[cityKey];
        for (var i = 0; i < cityData.daily.length; i++) {
            var forecastDate = new Date(now);
            forecastDate.setDate(now.getDate() + i);
            
            var dayName = '';
            if (i === 0) {
                dayName = 'Today';
            } else if (i === 1) {
                dayName = 'Tomorrow';
            } else {
                dayName = days[forecastDate.getDay()];
            }
            
            var monthName = months[forecastDate.getMonth()];
            var dayNumber = forecastDate.getDate();
            
            cityData.daily[i].day = dayName;
            cityData.daily[i].date = monthName + ' ' + dayNumber;
        }
    }
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

    // Update hourly conditions based on time
    updateHourlyConditions();

    // Update forecast dates first
    updateForecastDates();

    // Update the time and date right away
    updateDateTime();

    // Update all the weather data
    updateAllWeatherData();

    // Update the time every second
    setInterval(updateDateTime, 1000);
    
    // Update forecast dates every hour (3600000 milliseconds)
    setInterval(updateForecastDates, 3600000);
    
    // Update hourly conditions every hour to reflect time changes
    setInterval(updateHourlyConditions, 3600000);
}

// Start the app when the page loads
document.addEventListener('DOMContentLoaded', startApp);
