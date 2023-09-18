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

    weather.innerHTML += `${korRegion}날씨` // korRegion + "날씨";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}kr&appid=0bc93ab707044ce12e60a520cf7d807e`)
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


// 정적 서비스 : html, css, js
//              고정된 결과만 보여줌

// 동적 서비스 : 요청할 때보내는 값에 따라 결과가 달라짐
//              localhost:8080?inputName=홍길동 
//              이 쿼리 스트링에 따라 보여주는 결과가 다름
//             * 오늘날의 동적 서비스는 동적 + 정적 모두 제공(아파치 톰캣)

// 둘의 서버가 다름
// 정적(웹서버) : ex) 아파치, NginX
// 동적(WAS Web Application Server, Servlet Container) : ex) 톰캣


// 아파치톰캣 == WAS == Sevlet Container


// 이클립스 설정

// 인코딩 검색 -> General -> content Type 
             // Text의 디폴트 인코딩 UTF-8 입력
             // web도 utf-8입력

// 1. 서버 종류 선택
// server -> runtime environment -> add -> apache -> 9.0 -> directory에서 폴더 선택 
// package Explore, console, servers만 필요


// 2. 사용할 서버 설정
// servers -> new server 에서 서버 만들기

// 3. 프로젝트 만들기
// dynamic web project 만들기
// web module version은 4.0
// web module의 context root(최상위 주소 = /)
// web module의 content directory(웹 배포 폴더, webapp 폴더) -> 실제 배포되는 파일이 모여있는 곳
// generate web.xml deployment descriptor 반드시 체크 -> 서버 돌릴때 제일 먼저 찾는 것 

// src/main/java : 자바 코드 작성 폴더
// src/main/webapp (==content directory) : 배포할 코드 작성 폴더(html, css, js, jsp, .class 등)
