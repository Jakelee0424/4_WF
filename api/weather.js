const weatherInSeoul = document.getElementById('weatherInSeoul');
const weatherInBusan = document.getElementById('weatherInBusan');
const weatherInDaejeon = document.getElementById('weatherInDaejeon');
const weatherJeju = document.getElementById('weatherJeju');
const weatherGwangju = document.getElementById('weatherGwangju');
const weatherInWonju = document.getElementById('weatherInWonju');
const weatherInIncheon = document.getElementById('weatherInIncheon');

const cloud = document.getElementById("cloud");

(function getWeatherSeoul(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=seoul,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherInSeoul.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherInSeoul.innerHTML += `<br>${data.weather[0].main}`;
      });
})();


(function getWeatherBusan(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=busan,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherInBusan.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherInBusan.innerHTML += `<br>${data.weather[0].main}`;
      });
})();


(function getWeatherDaejeon(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Daejeon,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherInDaejeon.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherInDaejeon.innerHTML += `<br>${data.weather[0].main}`;
      });
})();

(function getWeatherjeju(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=jeju,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherJeju.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherJeju.innerHTML += `<br>${data.weather[0].main}`;
      });
})();

(function getWeathergwangju(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=gwangju,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherGwangju.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherGwangju.innerHTML += `<br>${data.weather[0].main}`;
      });
})();

(function getWeatherWonju(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=wonju,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherInWonju.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherInWonju.innerHTML += `<br>${data.weather[0].main}`;
      });
})();

(function getWeatherIncheon(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=incheon,kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        weatherInIncheon.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weatherInIncheon.innerHTML += `<br>${data.weather[0].main}`;
      });
})();


// 0bc93ab707044ce12e60a520cf7d807e


let num = 0;
let region = 'seoul';
let korRegion = '';
const weather = document.getElementById("weather");

function getWeather(){
    
    weather.innerHTML = '';
    switch (num) {
        case 0: korRegion = '서울'; break;
        case 1: korRegion = '부산'; break;
        case 2: korRegion = '대전'; break;
        case 3: korRegion = '제주'; break;
        case 4: korRegion = '광주'; break;
        case 5: korRegion = '원주'; break;
        case 6: korRegion = '인천'; break;
    }; 

    weather.innerHTML += `${korRegion}날씨`

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region},kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
    .then(response => response.json())
    .then(data => {
        
        weather.innerHTML += `<br>${Math.round(Number(data.main.temp) - 273.15)}°C`;
        weather.innerHTML += `<br>${data.weather[0].main}`;
    });

    num++;
    
    switch (num) {
        case 1: region = 'busan'; break;
        case 2: region = 'daejeon'; break;
        case 3: region = 'jeju'; break;
        case 4: region = 'gwangju'; break;
        case 5: region = 'wonju'; break;
        case 6: region = 'incheon'; break;
        case 7: region = 'seoul'; num = 0; break;
    };   
}

setInterval(getWeather, 3000);