const weather =document.querySelector(".js-weather");

const API_KEY = "f49a146ef8c7975b1c5134b82c374a81";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
            
        });
    // then 데이터가 완전히 들어온 후 함수 호출
}

function saveCoords(geoPosition){
    // 로컬스토레이지 저장
    localStorage.setItem(COORDS, JSON.stringify(geoPosition));
}

function handleGeoSucess(position){
    // 위도 경도 구해서 saveCoords로 넘기기
    console.log(position);
    console.log("온거니")
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoPosition = {
        latitude,
        longitude    
    };
    
    saveCoords(geoPosition);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    // 실패시 문구
    console.log("Can't access geo location")
}

function askForCoords(){
    // 네비게이터 인증 코드 허용시 handlegeosucess, 실패시 handlegeoerror
    navigator.geolocation.getCurrentPosition(handleGeoSucess,handleGeoError);
}

function loadCoords(){
    // getItem 네비게이터 인증 받은경우 안받은 경우
    const loadedCord = localStorage.getItem(COORDS);
    
    if(loadedCord === null){
        // 값이 없을경우
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCord);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();