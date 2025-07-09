const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.querySelector(".todo-list");

let allTodos = getTodos();
updateTodoList();
console.log(allTodos)
todoForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTodos();
})

function addTodos(){
   
         const todoText = todoInput.value.trim();
         if(todoText.length>0){
           allTodos.push(todoText);
           updateTodoList();
           saveTodos();
           todoInput.value ="";
        
         }
          
}
 function updateTodoList(){
    todoListUl.innerHTML ="";
    allTodos.forEach((todo,todoIndex)=>{
     todoItem = createTodoItem(todo,todoIndex);
     todoListUl.append(todoItem)
    })
 }
function createTodoItem(todo,todoIndex){
    const todoId = "todo"+todoIndex
    const todoLi = document.createElement("li");
    todoLi.className ="todo";
    todoLi.innerHTML =`
        
                <input type="checkbox" id="${todoId}">
                    <label for="${todoId}" class="custom-checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" class="tick-icon">
                        <path d="M5 13L9 17L19 7" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </label>
                  <label for="${todoId}" class="todo-text">
                     ${todo}
                  </label>
                  <button class="delete-button">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="var(--secondary-color)" viewBox="0 0 24 24"
                           stroke-width="1.5"  width="48" height="48">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165
                              L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0
                              a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 
                              3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 
                              1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>

                  </button>
             
    `
    const deleteButton = todoLi.querySelector(".delete-button");
    deleteButton.addEventListener("click",()=>{
       deleteTodoItem(todoIndex)
    })
    return todoLi
}

function deleteTodoItem(todoIndex){
  
}

function saveTodos(){
  const todosJson = JSON.stringify(allTodos)
  localStorage.setItem("todos",todosJson);
}

function getTodos (){
  const todos  = localStorage.getItem("todos")||"[]";
  
  return JSON.parse(todos)
}