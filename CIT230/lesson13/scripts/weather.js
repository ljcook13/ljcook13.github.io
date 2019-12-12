//san diego
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5391811&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);
            let currentTemp = currentWeather.main.temp;

            document.getElementById('currentTempS').innerHTML = currentTemp + '&deg';
        }
    )

//redlands
const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5386754&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiURL1)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);
            let currentTemp = currentWeather.main.temp;
    
            document.getElementById('currentTempR').innerHTML = currentTemp + '&deg';
        }
    )

//las vegas
const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5506956&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiURL2)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);
            let currentTemp = currentWeather.main.temp;
            
            document.getElementById('currentTempL').innerHTML = currentTemp + '&deg';
        }
    )

//gilbert
const apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiURL3)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);
            let currentTemp = currentWeather.main.temp;
                    
            document.getElementById('currentTempG').innerHTML = currentTemp + '&deg';
        }
    )