// Function to update time display
function updateTime() {
    // Get current date and time 
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    // Adding zeros at start for single digit number
    if (hours < 10) hours = "0" + hours 
    if (minutes < 10) minutes = "0" + minutes 
    if (seconds < 10) seconds = "0" + seconds 

    document.getElementById("currentTime").textContent = hours + ":" + minutes + ":" + seconds 
}

// Function to update date display
function updateDate() {
    // Get current date 
    var now = new Date() 
    // Arrays to convert day/month numbers to names
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
    var months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"] 
    // Get day name, month name, day number and year
    var dayName = days[now.getDay()]        
    var monthName = months[now.getMonth()]   
    var dayNumber = now.getDate()            
    var year = now.getFullYear()            

    document.getElementById("currentDate").textContent = dayName + ", " + monthName + " " + dayNumber + ", " + year 
}

// Main temperature display values in Celsius
var mainTempC = 25     
var rangeHighC = 35     
var rangeLowC = 28      

// Hourly forecast temperatures 
var hourlyTempsC = [
    26, 25, 24, 24, 25, 26, 27, 28, 29, 30, 31, 32, 
    34, 35, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26   
] 

// Daily forecast high temperatures 
var dailyHighTempsC = [
    35, 33, 31, 29, 27  
] 

// Daily forecast low temperatures 
var dailyLowTempsC = [
    28, 26, 25, 23, 21  
]

// Function to convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32)   // Math.round removes decimal places
}

// Function to get weather condition based on temperature
function getWeatherCondition(temperature) {
    if (temperature >= 30) {
        return { class: "sunny", description: "Clear sky with bright sunshine" } 
    } else if (temperature >= 20) {
        return { class: "partly-cloudy", description: "Partly cloudy with some sun" } 
    } else if (temperature >= 10) {
        return { class: "cloudy", description: "Overcast sky with clouds" } 
    } else {
        return { class: "rainy", description: "Rainy with scattered showers" } 
    }
}

// Function to update main weather icon and description
function updateMainWeatherDisplay(temperature) {
    var weatherIconElement = document.getElementById("mainWeatherIcon") 
    var weatherDescElement = document.getElementById("weatherDesc") 
    var dashboard = document.querySelector(".weather-dashboard") 
    // Get condition based on current main temperature
    var condition = getWeatherCondition(temperature) 
    // Remove existing icon and background classes
    weatherIconElement.classList.remove("sunny", "cloudy", "rainy", "partly-cloudy") 
    dashboard.classList.remove("sunny", "cloudy", "rainy", "partly-cloudy") 
    // Add new icon and background classes
    weatherIconElement.classList.add(condition.class) 
    dashboard.classList.add(condition.class) 
    // Update weather description text
    weatherDescElement.textContent = condition.description 
}

// Function to update main temperature display
function updateMainTemp(isC) {
    var tempElement = document.getElementById("mainTemp")      
    var rangeElement = document.getElementById("tempRange")    
    var toggleButton = document.getElementById("tempToggle")  
    // If condition to check if we should show Celsius or Fahrenheit
    if (isC) {
        // Show Celsius values
        tempElement.textContent = mainTempC   
        rangeElement.textContent = "H: " + rangeHighC + "° L: " + rangeLowC + "°"   
        toggleButton.textContent = "C"   
    } else {
        // Show Fahrenheit values (convert from Celsius)
        tempElement.textContent = toFahrenheit(mainTempC)   
        rangeElement.textContent = "H: " + toFahrenheit(rangeHighC) + "° L: " + toFahrenheit(rangeLowC) + "°"  
        toggleButton.textContent = "F"  
    }
}

// Function to update hourly temperatures
function updateHourlyTemps(isC) {
    var hourlyElements = document.querySelectorAll(".hourly-item .temp") 
    // Loop through all hourly temperature elements
    for (var i = 0 ; i < hourlyElements.length ; i++) {
        // If condition to check if we should show Celsius or Fahrenheit
        if (isC) {
            // Show Celsius: get temperature from array and add degree symbol
            hourlyElements[i].textContent = hourlyTempsC[i] + "°" 
        } else {
            // Show Fahrenheit: convert temperature from array and add degree symbol
            hourlyElements[i].textContent = toFahrenheit(hourlyTempsC[i]) + "°" 
        }
    }
}

// Function to update daily temperatures
function updateDailyTemps(isC) {
    var dailyHighElements = document.querySelectorAll(".daily-temps .high")   
    var dailyLowElements = document.querySelectorAll(".daily-temps .low")     
    // Loop through all daily temperature elements
    for (var i = 0 ; i  < dailyHighElements.length ; i++) {
        // If condition to check if we should show Celsius or Fahrenheit
        if (isC) {
            // Show Celsius: get temperatures from arrays and add degree symbol
            dailyHighElements[i].textContent = dailyHighTempsC[i] + "°" 
            dailyLowElements[i].textContent = dailyLowTempsC[i] + "°" 
        } else {
            // Show Fahrenheit: convert temperatures from arrays and add degree symbol
            dailyHighElements[i].textContent = toFahrenheit(dailyHighTempsC[i]) + "°" 
            dailyLowElements[i].textContent = toFahrenheit(dailyLowTempsC[i]) + "°" 
        }
    }
}

var currentUnitIsCelsius = true 

document.getElementById("tempToggle").addEventListener("click", function() {

    currentUnitIsCelsius = !currentUnitIsCelsius  
    // Update all temperature displays with the new unit
    updateMainTemp(currentUnitIsCelsius)     
    updateHourlyTemps(currentUnitIsCelsius)  
    updateDailyTemps(currentUnitIsCelsius)  
}) 

updateTime()                               
updateDate()                               
updateMainTemp(currentUnitIsCelsius)        
updateHourlyTemps(currentUnitIsCelsius)    
updateDailyTemps(currentUnitIsCelsius)      
updateMainWeatherDisplay(mainTempC)         
setInterval(updateTime, 1000)   

