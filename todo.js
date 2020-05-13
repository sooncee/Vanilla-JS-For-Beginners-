const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'Todos'
let toDos = []; // 저장

function deleteToDo(event){
    const btn = event.target; // 클릭한 버튼
    const li = btn.parentNode; // 클릭한 버튼의 상위노드 (li)
    toDoList.removeChild(li); // 클릭한 li 삭제
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id); // 로컬스토레이지와 html 비교
    });
    toDos = cleanToDos; // 필터한 내용을 저장
    saveTodos();
}



function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){   //Todo 생성
    const li = document.createElement("li"); //생성
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value= ""; // 인풋창 초기화
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
       
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
          });
    }
    
    
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
    
}

init();