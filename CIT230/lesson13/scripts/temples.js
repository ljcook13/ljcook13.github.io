const requestTemples = ".../json/temples.json"

fetch(requestTemples) 
    .then(response => {
        response.json()
        .then(
            response => {
                const temples = response.temples;

                temples.forEach(
                    (temple) => {
                        //DEBUG:
                        console.log(temple);

                        let article = document.createElement('article');
                        let h2 = document.createElement('h2');

                        h2.textContent = temple.templeName;

                        article.appendChild(h2);

                        //address
                        let addressDiv = document.createElement('div');
                        
                        let addressLabel = document.createElement('label');
                        addressLabel.textContent = 'Address: '

                        let addressSpan = document.createElement('span');
                        addressSpan.textContent = temple.address;

                        addressDiv.appendChild(addressLabel);
                        addressDiv.appendChild(addressSpan);

                        article.appendChild(addressDiv);

                        //telephone
                        let telephoneDiv = document.createElement('div');
                        
                        let telephoneLabel = document.createElement('label');
                        telephoneLabel.textContent = 'Phone Number: '

                        let telephoneSpan = document.createElement('span');
                        telephoneSpan.textContent = temple.telephone;

                        telephoneDiv.appendChild(telephoneLabel);
                        telephoneDiv.appendChild(telephoneSpan);

                        article.appendChild(telephoneDiv);

                        //email
                        let emailDiv = document.createElement('div');
                        
                        let emailLabel = document.createElement('label');
                        emailLabel.textContent = 'Email: '

                        let emailSpan = document.createElement('span');
                        emailSpan.textContent = temple.email;

                        emailDiv.appendChild(emailLabel);
                        emailDiv.appendChild(emailSpan);

                        article.appendChild(emailDiv);

                        //services
                        let servicesDiv = document.createElement('div');
                        
                        let servicesLabel = document.createElement('label');
                        servicesLabel.textContent = 'Services: '

                        let servicesSpan1 = document.createElement('span');
                        servicesSpan1.textContent = temple.services[0];
                        let servicesSpan2 = document.createElement('span');
                        servicesSpan2.textContent = temple.services[1];
                        let servicesSpan3 = document.createElement('span');
                        servicesSpan3.textContent = temple.services[2];
                        let servicesSpan4 = document.createElement('span');
                        servicesSpan4.textContent = temple.services[3];

                        servicesDiv.appendChild(servicesLabel);
                        servicesDiv.appendChild(servicesSpan1);
                        servicesDiv.appendChild(servicesSpan2);
                        servicesDiv.appendChild(servicesSpan3);
                        servicesDiv.appendChild(servicesSpan4);

                        article.appendChild(servicesDiv);
                        
                        //history
                        let historyDiv = document.createElement('div');
                        
                        let historyLabel = document.createElement('label');
                        historyLabel.textContent = 'History: '

                        let historySpan1 = document.createElement('span');
                        historySpan1.textContent = temple.history[0];
                        let historySpan2 = document.createElement('span');
                        historySpan2.textContent = temple.history[1];
                        let historySpan3 = document.createElement('span');
                        historySpan3.textContent = temple.history[2];

                        historyDiv.appendChild(historyLabel);
                        historyDiv.appendChild(historySpan1);
                        historyDiv.appendChild(historySpan2);
                        historyDiv.appendChild(historySpan3);

                        article.appendChild(historyDiv);

                        //ordinance
                        let ordinanceDiv = document.createElement('div');
                        
                        let ordinanceLabel = document.createElement('label');
                        ordinanceLabel.textContent = 'Ordinances: '

                        let ordinanceSpan1 = document.createElement('span');
                        ordinanceSpan1.textContent = temple.ordinance[0];
                        let ordinanceSpan2 = document.createElement('span');
                        ordinanceSpan2.textContent = temple.ordinance[1];
                        let ordinanceSpan3 = document.createElement('span');
                        ordinanceSpan3.textContent = temple.ordinance[2];
                        let ordinanceSpan4 = document.createElement('span');
                        ordinanceSpan4.textContent = temple.ordinance[3];

                        ordinanceDiv.appendChild(ordinanceLabel);
                        ordinanceDiv.appendChild(ordinanceSpan1);
                        ordinanceDiv.appendChild(ordinanceSpan2);
                        ordinanceDiv.appendChild(ordinanceSpan3);
                        ordinanceDiv.appendChild(ordinanceSpan4);

                        article.appendChild(ordinanceDiv);

                        //sessions
                        let sessionsDiv = document.createElement('div');
                        
                        let sessionsLabel = document.createElement('label');
                        sessionsLabel.textContent = 'Session Times: '

                        let sessionsSpan = document.createElement('span');
                        sessionsSpan.textContent = temple.sessions;

                        sessionsDiv.appendChild(sessionsLabel);
                        sessionsDiv.appendChild(sessionsSpan);

                        article.appendChild(sessionsDiv);

                        //closures
                        let closuresDiv = document.createElement('div');
                        
                        let closuresLabel = document.createElement('label');
                        closuresLabel.textContent = 'Closures: '

                        let closuresSpan1 = document.createElement('span');
                        closuresSpan1.textContent = temple.closures[0];
                        let closuresSpan2 = document.createElement('span');
                        closuresSpan2.textContent = temple.closures[1];
                        let closuresSpan3 = document.createElement('span');
                        closuresSpan3.textContent = temple.closures[2];

                        closuresDiv.appendChild(closuresLabel);
                        closuresDiv.appendChild(closuresSpan1);
                        closuresDiv.appendChild(closuresSpan2);
                        closuresDiv.appendChild(closuresSpan3);

                        article.appendChild(closuresDiv);

                        //image
                        let imageDiv = document.createElement('div');
                        let image = document.createElement('img');

                        image.setAttribute('src', temple.image);
                        image.setAttribute('alt', temple.templeName)

                        imageDiv.appendChild(image);

                        article.appendChild(imageDiv);

                        document.querySelector('section.temples').appendChild(article);
                    }
                )
            }
        )
    })