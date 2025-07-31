// Simple timer function to update time
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("currentTime").textContent = hours + ":" + minutes + ":" + seconds;
}

// Simple timer function to update date
function updateDate() {
    var now = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var dayNumber = now.getDate();
    var year = now.getFullYear();

    document.getElementById("currentDate").textContent = dayName + ", " + monthName + " " + dayNumber + ", " + year;
}

// Start timer when page loads
updateTime();
updateDate();
setInterval(updateTime, 1000);

