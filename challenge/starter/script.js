// url bases

var baseurl="https://api.openweathermap.org/data/2.5/forecast?lat="
var api = "40f343e5b497d011a80df65f7260a8ff"
var lat =""
var lonprefix="&lon="
var lon=""

// geocoder
var geobase="http://api.openweathermap.org/geo/1.0/direct?q="
var geobase2= "&limit=5&appid="


var queryurl= baseurl+lat+lonprefix+lon


// declared variables


var inputclass =document.getElementsByClassName("form-input weather-search")
var inputid=document.getElementById("search-input")
var submitbutton= document.getElementById("search-button")



// functions
function formInput(){
    var geourl= geobase+ inputid.value+geobase2+api
    fetch(geourl)
    .then(function(response){
    return response.json();
    }).then(function(data){
        console.log(data)
        console.log(data[0].name)
        lat=data[0].lat
        lon=data[0].lon
        console.log(lat)
    })
    
}

function form(event){
    event.preventDefault()
    console.log(inputid.value);
}



console.log(lat)







// event listeners
submitbutton.addEventListener("click",form)
submitbutton.addEventListener("click",formInput)