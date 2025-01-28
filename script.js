var tasks = []
function addTask(){
      var taskInput = document.getElementById('todoInput')
      var taskValue = taskInput.value
      
      // Checking if the input is empty or not
      if(taskValue.trim() !== ""){
        // add task to the list
            tasks.push({
                  text : taskValue,
                  completed: false
            })

            taskInput.value = ""
            updateTodoList()
      }
}

function updateTodoList(){
      const todoList = document.getElementById('todoList')
       // Clear existing list/data
      todoList.innerHTML = ""

      tasks.forEach((task)=>{
            var listItem = document.createElement('li')
            listItem.textContent = task.text
            listItem.className = task.completed ? 'completed' : ""
            listItem.onclick = function(){
                  toogleCompleted(task)
            }
            todoList.appendChild(listItem)
      })
      // function to calculate todos, completed
      updateAggregate()
}

function toogleCompleted (task){
      task.completed = !task.completed
      updateTodoList()
}

function updateAggregate(){
      var totalTasks = document.getElementById('totalTasks')
      var completedTasks = document.getElementById('completedTasks')
      var total = tasks.length
      var completed = tasks.reduce((acc,task)=>{
            return task.completed ? acc + 1 : acc
      },0)

      totalTasks.textContent = total
      completedTasks.textContent = completed
}

function filterTasks(){
      var searchInput = document.getElementById('searchInput')
      var searchValue = searchInput.value.toLowerCase()

      var filterTasks = tasks.filter((task)=>{
            return task.text.toLowerCase().includes(searchValue)
      })

      // update todoList with filterTasks
      updateTodoListWithFilterTasks(filterTasks)
}

function updateTodoListWithFilterTasks(filterTasks){
      var todoList = document.getElementById('todoList')
      
      todoList.innerHTML = ""

      filterTasks.forEach((task)=>{
            var listItem = document.createElement('li')
            listItem.textContent = task.text
            listItem.className = task.completed ? 'completed' : ""
            listItem.onclick = function(){
                  toogleCompleted(task)
            }
            todoList.appendChild(listItem)
      })
      
      updateAggregate()
}
