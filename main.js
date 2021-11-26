    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let todolist = document.getElementById('todo-list')  // access the 0l 
        for (let i = 0; i < arrayOfTodos.length; i++) {
            let todo = arrayOfTodos[i]
            let li = document.createElement('li')  // create a new li item 
            li.textContent = todo.title // get the text from the element
            todolist.appendChild(li) // append the li to the ol
        }
    
 
    
    
   //append the element to the OL 

   //for loops
  
    }