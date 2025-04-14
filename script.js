const input = document.getElementById("input-city")
const search = document.querySelector(".btn")
const icon = document.querySelector(".icon")
const temprature = document.querySelector(".temp")
const description = document.querySelector(".description")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const apiKey = "15a4de0be8596f99adf282b3897bc80d"

search.addEventListener("click",()=>{
    const city = input.value
    getWeatherData(city)
})

async function getWeatherData(city){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    let data = await response.json()
    try{
        const temp = Math.floor(data.main.temp);
        const  humi = data.main.humidity
        const desc = data.weather[0].description
        const img = data.weather[0].icon
        const windSpeed = data.wind.speed
        if(!response.ok){
            throw new Error("Network Respose is not ok..!")
        }
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${img}@2x.png" alt="">`
        temprature.textContent = `${temp}°c`
        humidity.textContent = `Humidity : ${humi}`
        description.textContent = `${desc}`
        wind.textContent = `Wind Speed : ${windSpeed} m/s`
    }
    catch(err){
        icon.innerHTML = `<img src="https://static.vecteezy.com/system/resources/previews/013/468/689/non_2x/alert-exclamation-notice-icon-emergency-alert-cartoon-something-went-wrong-free-vector.jpg" >` 
        temprature.textContent = "Something went Wrog...!"
    }
     
}