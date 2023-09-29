const addTodo = document.querySelector('button');
const todoList = document.querySelector('.todo-list');
const todoText = document.querySelector('.todoText');

addTodo.addEventListener(`click`, add)
todoList.addEventListener(`click`,checkAndDelete)

function add(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    const li = document.createElement('li');
    li.innerText = todoText.value;
    li.classList.add('todo-item');
    todoDiv.appendChild(li);
  
    const checkBtn = document.createElement('img');
    checkBtn.classList.add(`checkebox`)
    checkBtn.src="assets/checked-svgrepo-com.svg";
    todoDiv.appendChild(checkBtn);
  
    const deleteBtn = document.createElement('img');
    deleteBtn.classList.add(`delete`)
    deleteBtn.src = 'assets/delete-svgrepo-com.svg';
    todoDiv.appendChild(deleteBtn);
    
  
    todoList.appendChild(todoDiv);
    todoText.value = '';  
}

function checkAndDelete(e){
    const item = e.target;
    switch(item.classList[0]){
        case  "delete" :
            item.parentElement.remove()
        break
        case  "checkebox" :
           const todo = item.parentElement;
           todo.classList.toggle("checked");
        break

    }
}