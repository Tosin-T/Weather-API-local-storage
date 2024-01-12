// url bases

var baseurl="http://api.openweathermap.org/data/2.5/forecast?lat="
var apiprefix="&appid="
var api = "40f343e5b497d011a80df65f7260a8ff"
var lonprefix="&lon="
var apiunits="&units=metric"

var locationName; 
var queryurl;

// geocoder
var geobase="http://api.openweathermap.org/geo/1.0/direct?q="
var geobase2= "&limit=5&appid="

var displayId
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.
// declared variables
// test///////
var testapi= "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=40f343e5b497d011a80df65f7260a8ff&&&units=metric"
fetch(testapi)
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
})
// icon/////
var img= document.createElement("img")
var inputclass =document.getElementsByClassName("form-input weather-search")
var inputid=document.getElementById("search-input")
var submitbutton= document.getElementById("search-button")
var searchbuttonlist=document.getElementById("history")
const today =document.getElementById("today")
var locationName; 
var queryurl;
var tempPtag = document.createElement("p")
var windPtag = document.createElement("p")
var humidityPtag = document.createElement("p");
const h1=document.createElement("h1")
const p1=document.createElement("p1")
const p2=document.createElement("p2")
const p3=document.createElement("p3")
// 1 9 17 25 33
// functions

function formInput(){
    var geourl= geobase+ inputid.value+geobase2+api
    fetch(geourl)
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log(data)
        locationName=(data[0].name)
        
        var lat=data[0].lat
       var lon=data[0].lon
       var queryurl=(baseurl+lat+lonprefix+lon+apiprefix+api+apiunits)
       fetch(queryurl)
        .then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data)
            localStorage.setItem(locationName, JSON.stringify(data))
            renderTodayForcast(data)
          
            icon(data)
            console.log()
        })
       
   

})
}
function icon(data){
    var iconUrl1 =" https://openweathermap.org/img/wn/"
    var iconId=data.list[0].weather[0].icon
    var iconUrl2="@2x.png"
    var completeUrl=iconUrl1+iconId+iconUrl2
   
   img.src=completeUrl
   p2.appendChild(img)

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

function createButton(cityName,) {
     
    var newButton = document.createElement('button');
    newButton.textContent = cityName;
    searchbuttonlist.appendChild(newButton);
    newButton.addEventListener('click', function () {
        recallCity(cityName);
        
    });
}

function recallCity(cityName) {
    var savedData = localStorage.getItem(cityName);

    if (savedData) {
        var data = JSON.parse(savedData);
       renderTodayForcast(data)
       icon(data);
       console.log(data)
    } else {
        console.log("no data found");
    }
}

display5DayReport=()=>{
var displayInfo=data.list[0].main

}
renderTodayForcast=(data)=>{
    
h1.textContent=data.city.name +" " +data.list[0].dt_txt;
today.appendChild(h1)
tempPtag.textContent="Temp:"+" "+data.list[0].main.temp+" "+"°C"
today.appendChild(tempPtag)
windPtag.textContent="Wind speed"+" "+data.list[0].wind.speed+" "+"KPH"
today.appendChild(windPtag)
humidityPtag.textContent="Humidity"+" "+data.list[0].main.humidity+ " "+"%"
today.appendChild(humidityPtag)
    ;
    // today.append(h1,p1,p2,p3)
  
    
}
// localStorage.setItem("lastname", "Smith")

// http://api.openweathermap.org/data/2.5/forecast/daily?lat51.5073219&lon=-0.1276474&appid=40f343e5b497d011a80df65f7260a8ff&units=metric
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


// time intervals in array 0,9,18,27,36




// event listeners
submitbutton.addEventListener('click', form);
submitbutton.addEventListener('click', function (event) {
    formInput();
    createButton(locationName);
});