fetch('json/temples.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (temples) {
        //DEBUG:
        console.log(temples);

        //San Diego
        document.querySelector("#nameS")
            .innerHTML = temples[0].name;

        document.querySelector("#addressStreetS")
            .innerHTML = temples[0].address.street;
        document.querySelector("#addressCityS")
            .innerHTML = temples[0].address.city + ",";
        document.querySelector("#addressStateS")
            .innerHTML = temples[0].address.state;
        document.querySelector("#addressZipS")
            .innerHTML = temples[0].address.zipCode;
        
        document.querySelector("#phoneS")
            .innerHTML = temples[0].telephone; 
        
        document.querySelector("#emailS")
            .innerHTML = temples[0].email;

        document.querySelector("#serviceS1")
            .innerHTML = temples[0].services[0];
        document.querySelector("#serviceS2")
            .innerHTML = temples[0].services[1];
        document.querySelector("#serviceS3")
            .innerHTML = temples[0].services[2];
        document.querySelector("#serviceS4")
            .innerHTML = temples[0].services[3];

        document.querySelector("#historyS1")
            .innerHTML = temples[0].history[0];
        document.querySelector("#historyS2")
            .innerHTML = temples[0].history[1];
        document.querySelector("#historyS3")
            .innerHTML = temples[0].history[2];

        document.querySelector("#ordinanceS1")
            .innerHTML = temples[0].ordinances[0];
        document.querySelector("#ordinanceS2")
            .innerHTML = temples[0].ordinances[1];
        document.querySelector("#ordinanceS3")
            .innerHTML = temples[0].ordinances[2];
        document.querySelector("#ordinanceS4")
            .innerHTML = temples[0].ordinances[3];

        document.querySelector("#sessionS")
            .innerHTML = temples[0].sessionschedule;
        
        document.querySelector("#closedS1")
            .innerHTML = temples[0].templeclosureschedule[0];
        document.querySelector("#closedS2")
            .innerHTML = temples[0].templeclosureschedule[1];

        //redlands
        document.querySelector("#nameR")
            .innerHTML = temples[1].name;

        document.querySelector("#addressStreetR")
            .innerHTML = temples[1].address.street;
        document.querySelector("#addressCityR")
            .innerHTML = temples[1].address.city + ",";
        document.querySelector("#addressStateR")
            .innerHTML = temples[1].address.state;
        document.querySelector("#addressZipR")
            .innerHTML = temples[1].address.zipCode;
        
        document.querySelector("#phoneR")
            .innerHTML = temples[1].telephone; 
        
        document.querySelector("#emailR")
            .innerHTML = temples[1].email;

        document.querySelector("#serviceR1")
            .innerHTML = temples[1].services[0];
        document.querySelector("#serviceR2")
            .innerHTML = temples[1].services[1];
        document.querySelector("#serviceR3")
            .innerHTML = temples[1].services[2];
        document.querySelector("#serviceR4")
            .innerHTML = temples[1].services[3];

        document.querySelector("#historyR1")
            .innerHTML = temples[1].history[0];
        document.querySelector("#historyR2")
            .innerHTML = temples[1].history[1];
        document.querySelector("#historyR3")
            .innerHTML = temples[1].history[2];

        document.querySelector("#ordinanceR1")
            .innerHTML = temples[1].ordinances[0];
        document.querySelector("#ordinanceR2")
            .innerHTML = temples[1].ordinances[1];
        document.querySelector("#ordinanceR3")
            .innerHTML = temples[1].ordinances[2];
        document.querySelector("#ordinanceR4")
            .innerHTML = temples[1].ordinances[3];

        document.querySelector("#sessionR")
            .innerHTML = temples[1].sessionschedule;
        
        document.querySelector("#closedR1")
            .innerHTML = temples[1].templeclosureshedule[0];
        document.querySelector("#closedR2")
            .innerHTML = temples[1].templeclosureshedule[1];

        //las vegas
        document.querySelector("#nameL")
            .innerHTML = temples[2].name;

        document.querySelector("#addressStreetL")
            .innerHTML = temples[2].address.street;
        document.querySelector("#addressCityL")
            .innerHTML = temples[2].address.city + ",";
        document.querySelector("#addressStateL")
            .innerHTML = temples[2].address.state;
        document.querySelector("#addressZipL")
            .innerHTML = temples[2].address.zipCode;
        
        document.querySelector("#phoneL")
            .innerHTML = temples[2].telephone; 
        
        document.querySelector("#emailL")
            .innerHTML = temples[2].email;

        document.querySelector("#serviceL1")
            .innerHTML = temples[2].services[0];
        document.querySelector("#serviceL2")
            .innerHTML = temples[2].services[1];
        document.querySelector("#serviceL3")
            .innerHTML = temples[2].services[2];
        document.querySelector("#serviceL4")
            .innerHTML = temples[2].services[3];

        document.querySelector("#historyL1")
            .innerHTML = temples[2].history[0];
        document.querySelector("#historyL2")
            .innerHTML = temples[2].history[1];
        document.querySelector("#historyL3")
            .innerHTML = temples[2].history[2];

        document.querySelector("#ordinanceL1")
            .innerHTML = temples[2].ordinances[0];
        document.querySelector("#ordinanceL2")
            .innerHTML = temples[2].ordinances[1];
        document.querySelector("#ordinanceL3")
            .innerHTML = temples[2].ordinances[2];
        document.querySelector("#ordinanceL4")
            .innerHTML = temples[2].ordinances[3];

        document.querySelector("#sessionL")
            .innerHTML = temples[2].sessionschedule;
        
        document.querySelector("#closedL1")
            .innerHTML = temples[2].templeclosureschedule[0];
        document.querySelector("#closedL2")
            .innerHTML = temples[2].templeclosureschedule[1];

        //gilbert
        document.querySelector("#nameG")
            .innerHTML = temples[3].name;

        document.querySelector("#addressStreetG")
            .innerHTML = temples[3].address.street;
        document.querySelector("#addressCityG")
            .innerHTML = temples[3].address.city + ",";
        document.querySelector("#addressStateG")
            .innerHTML = temples[3].address.state;
        document.querySelector("#addressZipG")
            .innerHTML = temples[3].address.zipCode;
        
        document.querySelector("#phoneG")
            .innerHTML = temples[3].telephone; 
        
        document.querySelector("#emailG")
            .innerHTML = temples[3].email;

        document.querySelector("#serviceG1")
            .innerHTML = temples[3].services[0];
        document.querySelector("#serviceG2")
            .innerHTML = temples[3].services[1];
        document.querySelector("#serviceG3")
            .innerHTML = temples[3].services[2];
        document.querySelector("#serviceG4")
            .innerHTML = temples[3].services[3];

        document.querySelector("#historyG1")
            .innerHTML = temples[3].history[0];
        document.querySelector("#historyG2")
            .innerHTML = temples[3].history[1];
        document.querySelector("#historyG3")
            .innerHTML = temples[3].history[2];

        document.querySelector("#ordinanceG1")
            .innerHTML = temples[3].ordinances[0];
        document.querySelector("#ordinanceG2")
            .innerHTML = temples[3].ordinances[1];
        document.querySelector("#ordinanceG3")
            .innerHTML = temples[3].ordinances[2];
        document.querySelector("#ordinanceG4")
            .innerHTML = temples[3].ordinances[3];

        document.querySelector("#sessionG")
            .innerHTML = temples[3].sessionschedule;
        
        document.querySelector("#closedG1")
            .innerHTML = temples[3].templeclosureschedule[0];
        document.querySelector("#closedG2")
            .innerHTML = temples[3].templeclosureschedule[1];
    });