// 순서 flag
let isAscending = JSON.parse(localStorage.getItem('isAscending'));

// flag 가 없으면 => 아무 것도 없는 todo list
if (typeof isAscending === undefined) isAscending = true;

const addTodoToLocalStorage = title => {
  const id = Number(localStorage.getItem('id')) + 1; // Number(null) === 0
  // Destructuring => object literal
  const todo = { id, title, completed: false };
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  
  todoList.push(todo);

  localStorage.setItem('todoList', JSON.stringify(todoList));
  localStorage.setItem('id', id);
  addTodoToDOM(id, title);
}

const toggleTodoFromLocalStorage = id => {
  const todoList = JSON.parse(localStorage.getItem('todoList'));
  const target = todoList.find(todo => todo.id === id);
  target.completed = !target.completed;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

const deleteTodoFromLocalStorage = id => {
  const todoList = JSON.parse(localStorage.getItem('todoList'));
  const newTodoList = todoList.filter(todo => !(todo.id === id));
  localStorage.setItem('todoList', JSON.stringify(newTodoList));
}

const addTodoToDOM = (id, title, completed = false) => {
  const todoBox = document.getElementById('todo_box');
  const todoItem = document.createElement('div');
  todoItem.className = completed ? 'ui secondary segment todo-item' : 'ui segment todo-item';

  const wrapper = document.createElement('div');
  wrapper.className = 'ui checkbox'

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.checked = completed;

  const label = document.createElement('label');
  label.innerHTML = title;
  label.style = completed ? 'text-decoration: line-through;' : 'text-decoration: none;';

  input.addEventListener('click', () => {
    toggleTodoFromLocalStorage(id);
    if (input.checked) {
      todoItem.className = 'ui secondary segment todo-item';
      label.style = 'text-decoration: line-through;';
    } else {
      todoItem.className = 'ui segment todo-item';
      label.style = 'text-decoration: none;';
    }
  });

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'close icon';
  deleteIcon.style = 'position: absolute; right: 1em; cursor: pointer;'
  deleteIcon.addEventListener('click', () => {
    deleteTodoFromLocalStorage(id);
    todoBox.removeChild(todoItem);
  })

  wrapper.appendChild(input);
  wrapper.appendChild(label);
  todoItem.appendChild(wrapper);
  todoItem.appendChild(deleteIcon);
  if (isAscending) todoBox.appendChild(todoItem);
  else todoBox.insertBefore(todoItem, todoBox.firstChild);
}

const onAddTodoButtonClick = () => {
  const addTodoInput = document.getElementById('add_todo_input');
  addTodoToLocalStorage(addTodoInput.value);
  addTodoInput.value = "";
}

const init = () => {
  const addTodoButton = document.getElementById('add_todo_btn');
  addTodoButton.addEventListener('click', onAddTodoButtonClick);

  const addTodoInput = document.getElementById('add_todo_input');
  addTodoInput.addEventListener('keypress', event => {
    if (event.keyCode === 13) onAddTodoButtonClick();
  })

  const todoList = JSON.parse(localStorage.getItem('todoList'));
  if (todoList) {
        todoList.forEach(todo => {
        const {id, title, completed} = todo;
        addTodoToDOM(id, title, completed);
        })
    }

  const reverseButton = document.getElementById('reverse_btn');
  reverseButton.addEventListener('click', () => {
    isAscending = !isAscending;
    localStorage.setItem('isAscending', JSON.stringify(isAscending));
    console.log(isAscending);
    const todoBox = document.getElementById('todo_box');
    const todos = Array.from(document.getElementsByClassName('todo-item'));

    while (todoBox.firstChild) {
      todoBox.removeChild(todoBox.firstChild);
    }

    todos.reverse().forEach(todo => {
      todoBox.appendChild(todo);
    })
  });
}

init();