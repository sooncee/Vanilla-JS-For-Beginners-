


const form = document.querySelector(".js-form"),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings')

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
    // localstorage에 이름 저장
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // 인풋 전송이벤트 
    event.preventDefault(); // 상위 이벤트 중지
    const currentValue = input.value; // 인풋값 저장
    paintGreeting(currentValue); // 폼 문구 출력 이벤트
    saveName(currentValue); // localstorage 저장 이벤트
}

function askForName(){
    form.classList.add(SHOWING_CN); // 폼애 showing 클래스 추가
    form.addEventListener("submit", handleSubmit) // 인풋 전송이벤트 실행
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //showing 클래스 삭제
    greeting.classList.add(SHOWING_CN); // SHOWING 클래스 추가
    greeting.innerText = `Hello ${text}`; // 문구 출력
}

function LoadName(){
    const currentUser = localStorage.getItem(USER_LS); // currentUser변수에 유저이름 저장
    if(currentUser === null){ 
        // 유저값이 없을때
        console.log("없다");
        // 인풋을 보여주고 이후 handleSubmit 실행
        askForName();
    }
    else{
        // 유저값이 있을때
        console.log("있다");
        // 폼을 보여주고 문구 출력
        paintGreeting(currentUser);
    }
}

function init(){
    LoadName();
}

init();