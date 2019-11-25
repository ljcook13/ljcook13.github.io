function getFiveDayForecast(cityId) {
var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            //let nextDate = new Date();
            //nextDate.setDate(nextDate.getDate() + 1);
            //let dateString = getDateString(nextDate);
            let hourString = '18:00:00';
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {
                    if (forecast.dt_txt.includes(hourString)) {

                        //add temperature
                        const tempElement = document.getElementById(`temp${counter}`);
                        tempElement.innerHTML = forecast.main.temp + '&deg;';

                        //add day of week
                        let nextDate = new Date(forecast.dt_txt);
                        const dayElement = document.getElementById(`day${counter}`);
                        dayElement.innerHTML = daysOfWeek[nextDate.getDay()];

                        //add image
                        const imageElement = document.getElementById(`img${counter}`);
                        imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png');
                        imageElement.setAttribute('alt', forecast.weather[0].description);

                        counter += 1;
                    }
            
                }
            );
        }
    );
}
