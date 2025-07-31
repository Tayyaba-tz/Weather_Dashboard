// Simple variables to keep track of current settings
var isCelsius = true;

// Get the HTML elements we need to update
var mainTemp = document.getElementById("mainTemp");
var tempRange = document.getElementById("tempRange");
var tempToggle = document.getElementById("tempToggle");

// Hardcoded temperatures for Lahore (Celsius)
var lahoreTemps = {
    main: 32,
    rangeHigh: 35,
    rangeLow: 28,
    hourly: [
        26, 25, 24, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        34, 35, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26
    ],
    dailyHigh: [
        35, 33, 31, 29, 27
    ],
    dailyLow: [
        28, 26, 25, 23, 21
    ]
};

// Function to convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
}

// Function to update all displayed temperatures
function updateTemperatures() {
    // Update main temperature
    if (isCelsius) {
        mainTemp.textContent = lahoreTemps.main;
        tempRange.textContent = "H: " + lahoreTemps.rangeHigh + "° L: " + lahoreTemps.rangeLow + "°";
    } else {
        mainTemp.textContent = toFahrenheit(lahoreTemps.main);
        tempRange.textContent = "H: " + toFahrenheit(lahoreTemps.rangeHigh) + "° L: " + toFahrenheit(lahoreTemps.rangeLow) + "°";
    }
    
    // Update hourly temperatures
    var hourlyTempElements = document.querySelectorAll('.hourly-item .temp');
    for (var i = 0; i < hourlyTempElements.length && i < lahoreTemps.hourly.length; i++) {
        if (isCelsius) {
            hourlyTempElements[i].textContent = lahoreTemps.hourly[i] + "°";
        } else {
            hourlyTempElements[i].textContent = toFahrenheit(lahoreTemps.hourly[i]) + "°";
        }
    }
    
    // Update daily temperatures
    var dailyHighElements = document.querySelectorAll('.daily-temps .high');
    var dailyLowElements = document.querySelectorAll('.daily-temps .low');
    
    for (var i = 0; i < dailyHighElements.length && i < lahoreTemps.dailyHigh.length; i++) {
        if (isCelsius) {
            dailyHighElements[i].textContent = lahoreTemps.dailyHigh[i] + "°";
            dailyLowElements[i].textContent = lahoreTemps.dailyLow[i] + "°";
        } else {
            dailyHighElements[i].textContent = toFahrenheit(lahoreTemps.dailyHigh[i]) + "°";
            dailyLowElements[i].textContent = toFahrenheit(lahoreTemps.dailyLow[i]) + "°";
        }
    }
}

// When the temperature toggle button is clicked
tempToggle.addEventListener("click", function() {
    if (isCelsius) {
        isCelsius = false;
        tempToggle.textContent = "F";
    } else {
        isCelsius = true;
        tempToggle.textContent = "C";
    }
    updateTemperatures();
});

// Function to update the current time and date
function updateDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("currentTime").textContent = hours + ":" + minutes + ":" + seconds;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dayNumber = now.getDate();
    var year = now.getFullYear();

    document.getElementById("currentDate").textContent = dayName + ", " + monthName + " " + dayNumber + ", " + year;
}

// Start the app when the page loads
document.addEventListener("DOMContentLoaded", function() {
    updateTemperatures();
    updateDateTime(); // Initial call to set time and date
    setInterval(updateDateTime, 1000); // Update time every second
});

