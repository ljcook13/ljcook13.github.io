const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f85f8b058eaa7f5d5efddebe56a43f9a&units=imperial';

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            console.log(currentWeather.main.temp);
            let currentTemp = currentWeather.main.temp;
            let currentIcon = currentWeather.weather[0].icon;
            let currentImage = 'https://openweathermap.org/img/w/' + currentIcon + '.png';

            document.querySelector('#current-temp')
                .textContent = currentTemp;

            document.querySelector('#imagesrc')
                .textContent = currentImage;

            document.querySelector('#weatherIcon')
                .setAttribute('src', currentImage);

            document.querySelector('#weatherIcon')
                .setAttribute('alt', currentWeather.weather[0].main);
        }
    )