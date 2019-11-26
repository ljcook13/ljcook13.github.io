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
                            document.querySelector('#prestonEvents1')
                                .textContent = eventTown.events[0];
                            document.querySelector('#prestonEvents2')
                                .textContent = eventTown.events[1];
                            document.querySelector('#prestonEvents3')
                                .textContent = eventTown.events[2];
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
                            document.querySelector('#fishHavenEvents1')
                                .textContent = eventTown.events[0];
                            document.querySelector('#fishHavenEvents2')
                                .textContent = eventTown.events[1];
                            document.querySelector('#fishHavenEvents3')
                                .textContent = eventTown.events[2];
                            document.querySelector('#fishHavenEvents4')
                                .textContent = eventTown.events[3];
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
                            document.querySelector('#sodaSpringsEvents1')
                                .textContent = eventTown.events[0];
                            document.querySelector('#sodaSpringsEvents2')
                                .textContent = eventTown.events[1];
                            document.querySelector('#sodaSpringsEvents3')
                                .textContent = eventTown.events[2];
                        }
                    }
                )
            }
        )
    }

);

