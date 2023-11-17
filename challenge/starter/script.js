// url bases

var baseurl="https://api.openweathermap.org/data/2.5/forecast?lat="
var api = "40f343e5b497d011a80df65f7260a8ff"
var lat ="t"
var lonprefix="&lon="
var lon="t"
var queryurl= baseurl+lat+lonprefix+lon


// declared variables


var inputclass =document.getElementsByClassName("form-input weather-search")
var inputid=document.getElementById("search-input")
var submitbutton= document.getElementById("search-button")



// functions
function form(event){
    event.preventDefault()
    console.log(inputid.value);
}















// event listeners
submitbutton.addEventListener("click",form)
