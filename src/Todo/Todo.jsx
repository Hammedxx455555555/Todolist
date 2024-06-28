
   /* eslint-disable no-unused-vars */
   import React,{useState} from 'react'
import './Todo.css'
   const Todo = () => {
   
       const [inputValue, setInputValue] = useState("")
       const [todos,setTodos] = useState([])
       const [error,setError] = useState(" ")
       
   const handleadd = (event)=>{

         if(inputValue === " "){
          setError("The input box is empty")
          event.preventDefault()
         }else{
           setTodos([...todos,inputValue])
           setInputValue(" ")
        
}
        }

         const handleDeleteTodo = (index) => {
            const near = todos.filter((item)=>item.id !== item);
           setTodos(near);
         };

     return (
       <>
       <h1>Todo List App</h1>
     <input type="text" 
         value={inputValue}   
              onChange={(event)=>{setInputValue(event.target.value)}} 
                    required/>           
   
   
   <button onClick={handleadd}>Add</button>
 
   
    {todos.map((todo,i)=>( <ul key={i}><li key={i}>{todo}
        <button onClick={handleDeleteTodo}>Delete</button> </li> </ul>))} 
        {error && <p style={{color:"red"}}>{error}</p>}

       </>
     )
   }
   
   export default Todo
   
         
    
   
   