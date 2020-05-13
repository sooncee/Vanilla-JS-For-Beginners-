const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'Todos'

function paintToDo(text){
    const li = document.createElement("li"); //생성
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value= ""; // 인풋창 초기화
}


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);

    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit)
}

init();