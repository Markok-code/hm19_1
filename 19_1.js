const btn = document.querySelector('.btn')
async function fetchWeather() {
    const API = '2697509d54d66f850f65e49c1955db98';
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API}`);
    const data = await response.json()
        const tem = document.getElementById('temp')
        const des = document.getElementById('desc')
        const h = document.getElementById('hum')
        const wind = document.getElementById('wind')
        const time = document.getElementById('time')
        const date = new Date(data.dt * 1000).toLocaleString()

        tem.innerText = `Температура: ${data.main.temp} °C`
        des.innerText = `Описание: ${data.weather[0].description}`
        h.innerText = `Влажность: ${data.main.humidity}%`
        wind.innerText = `Ветер: ${data.wind.speed} м/с`
        time.innerText = `Время: ${date}`


}
fetchWeather()
btn.addEventListener('click', () =>{
    fetchWeather()
})