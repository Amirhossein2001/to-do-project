// let $ = document
// const inputElem = $.getElementById('itemInput')
// const addButton = $.getElementById('addButton')
// const clearButton = $.getElementById('clearButton')
// const todoListElem = $.getElementById('todoList')

// let todosArray = []

// function addNewTodo () {
//     let newTodoTitle = inputElem.value

//     let newTodoObj = {
//         id: todosArray.length + 1,
//         title: newTodoTitle,
//         complete: false
//     }

//     inputElem.value = ''

//     todosArray.push(newTodoObj)
//     setLocalStorage(todosArray)
//     todosGenerator(todosArray)
// }

// function setLocalStorage (todosList) {
//     localStorage.setItem('todos', JSON.stringify(todosList))
// }

// function todosGenerator (todosList) {

//     let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn

//     todosList.forEach(function (todo) {
//         console.log(todo);
//         newTodoLiElem = $.createElement('li')
//         newTodoLiElem.className = 'completed well'

//         newTodoLabalElem = $.createElement('label')
//         newTodoLabalElem.innerHTML = todo.title

//         newTodoCompleteBtn = $.createElement('button')
//         newTodoCompleteBtn.className =  'btn btn-success'
//         newTodoCompleteBtn.innerHTML = 'Complete'

//         newTodoDeleteBtn = $.createElement('button')
//         newTodoDeleteBtn.className = 'btn btn-danger'
//         newTodoDeleteBtn.innerHTML = 'Delete'

//         newTodoLiElem.append(newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn)

//         todoListElem.append(newTodoLiElem)
//     })
// }

// addButton.addEventListener('click', addNewTodo)

const inputElem = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const todoListElem = document.getElementById("todoList");

let todoArray = [];

function addNewToDo() {
  let newToDoValue = inputElem.value;
  let newTodoObj = {
    id: todoArray.length + 1,
    title: newToDoValue,
    complete: false,
  };
  todoGenerator(todoArray);
  inputElem.value = "";

  todoArray.push(newTodoObj);

  setLocalStorage(todoArray);
  console.log(todoArray);
}

function setLocalStorage(todoList) {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function todoGenerator(todoList) {
  let newTodoLiElem, newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn;
  todoList.forEach(function (todo) {
    console.log(todo);
    newTodoLiElem = document.createElement("li");
    newTodoLiElem.className = "completed well";
    newTodoLabelElem = document.createElement("label");
    newTodoLabelElem.innerHTML = todo.title;
    newTodoCompleteBtn = document.createElement("button");
    newTodoCompleteBtn.className = "btn btn-success";
    newTodoCompleteBtn.innerHTML = "Complete";
    newTodoDeleteBtn = document.createElement("button");
    newTodoDeleteBtn.className = "btn btn-danger";
    newTodoDeleteBtn.innerHTML = "Delete";
    newTodoLiElem.append(
      newTodoLabelElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );
    todoListElem.append(newTodoLiElem);
    console.log(newTodoLiElem);
  });
}

addButton.addEventListener("click", addNewToDo);
