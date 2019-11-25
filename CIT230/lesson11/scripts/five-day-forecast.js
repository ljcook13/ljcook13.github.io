// get day of week
var today = new Date();
var currentDateString;
var weekDayNumber = today.getDay()

var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];
currentDateString = weekDay + ', ';
currentDateString = currentDateString + today.getDate();

// create five-day forecast
let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    //add one day to current day
    currentDay++;

    // if current day is greater than 6 (Saturday), reset it to 0
    if (currentDay > 6) {
        currentDay = 0;
    }

    //assign value to placeholder
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            let nextDate = new Date();
            //nextDate.setDate(nextDate.getDate() + 1);
            let dateString = getDateString(nextDate);
            let hourString = '18:00:00';
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {
                    if (forecast.dt_txt.includes(dateString) && 
                        forecast.dt_txt.includes(hourString)) {

                        const element = document.getElementById(`temp${counter}`);
                        element.innerHTML = forecast.main.temp + '&deg;';

                        counter += 1;
                        nextDate.setDate(nextDate.getDate() + 1);
                        dateString = getDateString(nextDate);
                    }
            
                }
            );
        }
    );

function getDateString(date) {
    let dateString = 
    //get full year
    date.getFullYear() + '-' +

    //get month
    (date.getMonth() + 1) + '-' +

    //get day
    date.getDate();

    return dateString;
}