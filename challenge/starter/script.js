// url bases

var baseurl="http://api.openweathermap.org/data/2.5/forecast?lat="
var apiprefix="&appid="
var api = "40f343e5b497d011a80df65f7260a8ff"
var lonprefix="&lon="
var apiunits="&units=metric"


// geocoder
var geobase="http://api.openweathermap.org/geo/1.0/direct?q="
var geobase2= "&limit=5&appid="


https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.
// declared variables


var inputclass =document.getElementsByClassName("form-input weather-search")
var inputid=document.getElementById("search-input")
var submitbutton= document.getElementById("search-button")
var searchbuttonlist=document.getElementById("history")
var locationName; 

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
            localStorage.setItem(locationName,queryurl)
            var tempLocation=[data.list[0].main.temp]
            
            
            console.log(data.list[0].weather[0].icon)
        })
       
   
    })
}

function form(event){
    event.preventDefault()
    ;
   
}

function createButton(){
var newButton= document.createElement('button')
newButton.textContent=inputid.value
searchbuttonlist.appendChild(newButton)
newButton.addEventListener("click",recallCity)

}
recallCity=()=>{
    
const test=localStorage.getItem(locationName)
console.log(test)

}
// localStorage.setItem("lastname", "Smith")

// http://api.openweathermap.org/data/2.5/forecast/daily?lat51.5073219&lon=-0.1276474&appid=40f343e5b497d011a80df65f7260a8ff&units=metric
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


// time intervals in array 0,9,18,27,36




// event listeners
submitbutton.addEventListener("click",form)
submitbutton.addEventListener("click",formInput)
submitbutton.addEventListener("click", createButton)
