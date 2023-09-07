import React,{useState} from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/Todolist'
function App() {
  const[listtodo,setlisttodo]=useState([]);
  let addlist =(inputtext)=>{
    setlisttodo([...listtodo,inputtext]);
  }
  return (
    <div className='main-container'>
<div className='center-container'>
<TodoInput addlist={addlist}/>
<h1 className='app-deading'>TODO</h1>
<hr/>
{listtodo.map((listitem,i)=>{
  return(
    <Todolist key={i} item ={listitem}/>
  )
})}
</div>
    </div>
  )
}

export default App