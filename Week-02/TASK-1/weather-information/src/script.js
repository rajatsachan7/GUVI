// Fetching Codes for countries data in the card

async function getCountries() {
    let countries, data;
    try{
       
        countries = await fetch("https://restcountries.eu/rest/v2/all");
        data = await countries.json();
        
        let layout = document.createElement("div");
        layout.className = "container-lg";
        layout.style.margin = "3rem";
        layout.id = "layout";

        document.body.appendChild(layout);

        for(let i=0; i<196; i+=3)
        {

            let row = "<div class=\"row\" id=\"row" +i+ "\"></div>";
            document.getElementById("layout").innerHTML+=row;
            let cards = "";
            for(let j=0; j<3; j++)
            {
                cards = "<div class=\"card text-white bg-secondary text-center col\" style=\"max-width: 20rem; margin:4rem\"><div class=\"card-header bg-dark mb-2 text-center\">"+data[i+j].name+"</div><img class=\"card-img-top\" src=\""+data[i+j].flag+"\" alt=\"flag\"><div class=\"card-body\"><h6 class=\"card-title\" id=\"city\">Capital: "+data[i+j].capital+"</h6><h6 class=\"card-title\">Region: "+data[i+j].region+"</h6><h6 class=\"card-title\">Country Code: "+data[i+j].alpha3Code+"</h6><button onclick=\"getWeather(this)\" class=\"btn btn-primary bg-dark\">Click for Weather</button></div></div>";
                document.getElementById("row"+i).innerHTML+=cards;
            }
        } 

    } catch(error)
    {
        console.log(error);
    }
}

//Alert Box giving info after click!

function weat(weather) {
    try{
        var message = "Weather: "+weather.weather[0].main
        var message1 = "Temprature: "+weather.main.temp+" Kelvin";
        alert(message);
        alert(message1);
    } catch(error)
    {
        alert("Unable to fetch informations!")
    }
}

function errorMsg(response) {
    alert(response.message);
}

function getWeather(element){
    var text = element.parentNode.getElementsByTagName("h6")[0].innerText;
    var city = text.split("Capital: ");

    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3cb1c67a94abd0c6e88b782fcbe9d17a";

    fetch(url).then(function(resp){
    return resp.json();
    }).then(weat).catch(errorMsg);
}

getCountries();