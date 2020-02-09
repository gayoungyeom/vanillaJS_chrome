const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    delAll = document.querySelector(".js-deleteAll");

const TODO_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function deleteAll(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const size = toDos.length;
    for(i=0; i<size; i++){
        toDoList.remove(li);
    }
    const cleanAll = toDos.filter(function(toDo){
      return toDo.id === (size + 1);  
    })
    toDos = cleanAll;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "x";
    delAll.addEventListener("click", deleteAll);
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDos){
            paintToDo(toDos.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();