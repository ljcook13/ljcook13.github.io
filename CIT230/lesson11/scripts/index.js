const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
        .then(
            response => {
                const towns = response.towns;
              
                towns.forEach(
                    (town) => {
                        if (town.name.toLowerCase() === 'fish haven') {
                            // Fish Haven
                            document.querySelector('#fishHavenMotto')
                                .textContent = town.motto;
                            document.querySelector('#fishHavenYearFounded')
                                .textContent = town.yearFounded;
                            document.querySelector('#fishHavenPopulation')
                                .textContent = town.currentPopulation;
                            document.querySelector('#fishHavenRainFall')
                                .textContent = town.averageRainfall;
                            document.querySelector('#fishHavenImage')
                                .setAttribute('src', 'images/fishhaven.jpg');
                        }

                        else if (town.name.toLowerCase() === 'preston') {
                            // Preston
                            document.querySelector('#prestonMotto')
                                .textContent = town.motto;
                            document.querySelector('#prestonYearFounded')
                                .textContent = town.yearFounded;
                            document.querySelector('#prestonPopulation')
                                .textContent = town.currentPopulation;
                            document.querySelector('#prestonRainFall')
                                .textContent = town.averageRainfall;
                            document.querySelector('#prestonImage')
                                .setAttribute('src', 'images/preston.jpg');
                        }

                        else if (town.name.toLowerCase() === 'soda springs') {
                            // Soda Springs
                            document.querySelector('#sodaSpringsMotto')
                                .textContent = town.motto;
                            document.querySelector('#sodaSpringsYearFounded')
                                .textContent = town.yearFounded;
                            document.querySelector('#sodaSpringsPopulation')
                                .textContent = town.currentPopulation;
                            document.querySelector('#sodaSpringsRainFall')
                                .textContent = town.averageRainfall;
                            document.querySelector('#sodaSpringsImage')
                                .setAttribute('src', 'images/sodasprings.jpg');
                        }
                    }
                );
            }
        )
    });
