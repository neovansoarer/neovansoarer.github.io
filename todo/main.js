const addTodo = (title, completed = false) => {
    const todoBox = document.getElementById('todo_box');
    const todo = document.createElement('div');
    todo.className = completed ? 'todo-item ui secondary segment' : 'todo-item ui segment';
  
    const wrapper = document.createElement('div');
    wrapper.className = 'ui checkbox'
  
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.checked = completed;
  
    const label = document.createElement('label');
    label.innerHTML = title;
    label.style = completed ? 'text-decoration: line-through;' : 'text-decoration: none;';
  
    input.addEventListener('click', () => {
      if (input.checked) {
        todo.className = 'todo-item ui secondary segment';
        label.style = 'text-decoration: line-through;';
      } else {
        todo.className = 'todo-item ui segment';
        label.style = 'text-decoration: none;';
      }
    });
  
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'close icon';
    deleteIcon.style = 'position: absolute; right: 1em; cursor: pointer;'
    deleteIcon.addEventListener('click', () => {
      todoBox.removeChild(todo);
    })
  
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    todo.appendChild(wrapper);
    todo.appendChild(deleteIcon);
    todoBox.appendChild(todo);
  }
  
  const onAddTodoButtonClick = () => {
    const addTodoInput = document.getElementById('add_todo_input');
    addTodo(addTodoInput.value);
    addTodoInput.value = "";
  }
  
  const init = () => {
    const addTodoButton = document.getElementById('add_todo_btn');
    addTodoButton.addEventListener('click', onAddTodoButtonClick);
  
    const addTodoInput = document.getElementById('add_todo_input');
    addTodoInput.addEventListener('keypress', event => {
      if (event.keyCode === 13) onAddTodoButtonClick();
    })
  
    const reverseButton = document.getElementById('reverse_btn');
    reverseButton.addEventListener('click', () => {
      const todoBox = document.getElementById('todo_box');
      // getElementsByClassName 으로 가져오는 노드들은 유사 배열이기 때문에 Array.from 메서드로 배열화 시킨다.
      // todos 변수 안에 Array.from 메서드로 deep copy 하여 아래 while 문에서 노드를 제거해도 todos 변수 안에 그대로 남아있는다.
      const todos = Array.from(document.getElementsByClassName('todo-item'));
  
      while(todoBox.firstChild) {
        todoBox.removeChild(todoBox.firstChild);
      }
  
      todos.reverse().forEach(todo => {
        todoBox.appendChild(todo);
      })
    });
  
    fetch('https://koreanjson.com/todos?userId=1')
      .then(res => res.json())
      .then(todos => {
        for (let i = 0; i < 5; i += 1) {
          const { title, completed } = todos[i];
          addTodo(title, completed);
        };
      })
      .catch(error => console.log(error));
  }
  
  init();