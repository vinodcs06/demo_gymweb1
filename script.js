

const apiKey="1aab05d9786654bd2618847f26bc3f9c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?"

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
async function checkWeather(city){
    const response= await fetch(apiUrl +city+ '&appid=${apiKey}')
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}
else{
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ '°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity +'%';
    document.querySelector(".wind").innerHTML=data.wind.speed + 'km/hr';
    

    if(data.weather[0]=="clouds"){
        weatherIcon.src="image/clouds.png"}
        else if (data.weather[0]=="rain"){
            weatherIcon.src="image/raining.png"}
        else if (data.weather[0]=="drizziling"){
        weatherIcon.src="image/cloudy.png"}
        else if (data.weather[0]=="clear"){
            weatherIcon.src="image/sun.png"}
            document.querySelector(".weather").style.display="block"
            document.querySelector(".error").style.display="block"
    }

}

    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
