const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanTodos;
    saveToDos();
    console.log(toDos)
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = toDos.length+1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click",deleteToDo)
    span.innerText = text+" ";
    li.appendChild(span)
    li.appendChild(delBtn)

    li.id = newID;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newID
    };
    toDos.push(toDoObj);
    saveToDos();
    // console.log(text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}
function loadTodos(){
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if(loadedtoDos !== null){
        const parseToDos = JSON.parse(loadedtoDos);
        parseToDos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();