// url bases

var baseurl="https://api.openweathermap.org/data/2.5/forecast?lat="
var apiprefix="&appid="
var api = "40f343e5b497d011a80df65f7260a8ff"
var lonprefix="&lon="
var apiunits="&units=metric"

var locationName; 
var queryurl;

// geocoder
var geobase="https://api.openweathermap.org/geo/1.0/direct?q="
var geobase2= "&limit=5&appid="

var displayId




var inputclass =document.getElementsByClassName("form-input weather-search")
var inputid=document.getElementById("search-input")
var submitbutton= document.getElementById("search-button")
var searchbuttonlist=document.getElementById("history")
const today =document.getElementById("today")
var locationName; 
var queryurl;
const locationToday=document.createElement("h1")
var tempPtag = document.createElement("p")
var windPtag = document.createElement("p")
var humidityPtag = document.createElement("p");
var img= document.createElement("img")
var impPtag=document.createElement("p")

var forecast=document.getElementById("forecast")
var forecastH1=document.createElement("h1")



function formInput(){
    var geourl= geobase+ inputid.value+geobase2+api
    fetch(geourl)
    .then(function(response){
    return response.json();
    }).then(function(data){
        locationName=(data[0].name)
        
        var lat=data[0].lat
       var lon=data[0].lon
       var queryurl=(baseurl+lat+lonprefix+lon+apiprefix+api+apiunits)
       fetch(queryurl)
        .then(function(response){
            return response.json();
        }).then(function(data){
            
            localStorage.setItem(locationName, JSON.stringify(data))
            renderTodayForcast(data)
          display5DayReport(data)
            icon(data)
            
        })
       
   

})
}
function icon(data){
    var iconUrl1 =" https://openweathermap.org/img/wn/"
    var iconId=data.list[0].weather[0].icon
    var iconUrl2="@2x.png"
    var completeUrl=iconUrl1+iconId+iconUrl2
   
   img.src=completeUrl
   tempPtag.appendChild(img)

    }
    
const displayButtonSaved =()=>{
    
    searchbuttonlist.append=''
    for (i=0;i<localStorage.length;i++){
        let cityName=(localStorage.key(i))
        createButton(cityName);
    
    

       
    }
    }
    displayButtonSaved()
function form(event){
    event.preventDefault()
    ;
   
}
function recallCity(cityName) {
    var savedData = localStorage.getItem(cityName);

    if (savedData) {
        var data = JSON.parse(savedData);
       renderTodayForcast(data)
       icon(data);
       display5DayReport(data)
    } else {
        console.log("no data found");
    }
}
function createButton(cityName,) {
     
    var newButton = document.createElement('button');
    newButton.textContent = cityName;
    searchbuttonlist.appendChild(newButton);
    newButton.addEventListener('click', function () {
        recallCity(cityName);
        
    });
}



display5DayReport=(data)=>{
    forecast.innerHTML = "";
forecastH1.textContent="5-day Forcast"
forecast.appendChild(forecastH1)
var dateArray=[data.list[1],data.list[9],data.list[17],data.list[25],data.list[33]]
var cardRow = document.createElement("div");
cardRow.classList.add("row")
for (i=0;i<dateArray.length;i++){
    var dayData = dateArray[i]
var card=document.createElement("div")
card.classList.add("col-md-2", "mb-3")
var cardBody=document.createElement("div")
cardBody.classList.add("card-body")

var date = new Date(dayData.dt_txt);
var formattedDate = date.toLocaleDateString('en-GB');
var dateP = document.createElement("p");
dateP.classList.add("card-text");
dateP.textContent = formattedDate;
cardBody.appendChild(dateP)

var iconUrl1 = "https://openweathermap.org/img/wn/";
var iconId = dayData.weather[0].icon;
var iconUrl2 = "@2x.png";
var iconImg = document.createElement("img");
iconImg.src = iconUrl1 + iconId + iconUrl2;
iconImg.alt = "Weather Icon";
cardBody.appendChild(iconImg);

var tempP = document.createElement("p");
tempP.classList.add("card-text");
tempP.textContent = "Temp: " + dayData.main.temp + " °C";
cardBody.appendChild(tempP);

var windP = document.createElement("p");
windP.classList.add("card-text");
windP.textContent = "Wind Speed: " + dayData.wind.speed + " KPH";
cardBody.appendChild(windP); 

var humidityP = document.createElement("p");
humidityP.classList.add("card-text");
humidityP.textContent = "Humidity: " + dayData.main.humidity + "%";
cardBody.appendChild(humidityP);

card.appendChild(cardBody)
forecast.appendChild(card)

}

}
renderTodayForcast=(data)=>{
    var date = new Date(data.list[0].dt_txt);
    var formattedDate = date.toLocaleDateString('en-GB')  
locationToday.textContent=data.city.name+" "+ formattedDate;
today.appendChild(locationToday)
tempPtag.textContent="Temp:"+" "+data.list[0].main.temp+" "+"°C"
today.appendChild(tempPtag)
windPtag.textContent="Wind speed"+" "+data.list[0].wind.speed+" "+"KPH"
today.appendChild(windPtag)
humidityPtag.textContent="Humidity"+" "+data.list[0].main.humidity+ " "+"%"
today.appendChild(humidityPtag)
    ;
 
  
    
}


// event listeners
submitbutton.addEventListener('click', form);
submitbutton.addEventListener('click', function (event) {
    formInput();
    createButton(locationName);
});