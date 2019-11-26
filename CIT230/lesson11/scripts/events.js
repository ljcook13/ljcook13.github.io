const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(response => {
        response.json()
        .then(
            response => {
                const eventTowns = response.towns;
                eventTowns.forEach(
                    (eventTown) => {
                        if (eventTown.name.toLowerCase() === 'preston') {
                            document.querySelector('#prestonEvents')
                                .textContent = eventTown.events;
                        }
                    }
                )
            }
        )
    }

);

fetch(eventURL)
    .then(response => {
        response.json()
        .then(
            response => {
                const eventTowns = response.towns;
                eventTowns.forEach(
                    (eventTown) => {
                        if (eventTown.name.toLowerCase() === 'fish haven') {
                            document.querySelector('#fishHavenEvents')
                                .textContent = eventTown.events;
                        }
                    }
                )
            }
        )
    }

);

fetch(eventURL)
    .then(response => {
        response.json()
        .then(
            response => {
                const eventTowns = response.towns;
                eventTowns.forEach(
                    (eventTown) => {
                        if (eventTown.name.toLowerCase() === 'soda springs') {
                            document.querySelector('#sodaSpringsEvents')
                                .textContent = eventTown.events;
                        }
                    }
                )
            }
        )
    }

);

