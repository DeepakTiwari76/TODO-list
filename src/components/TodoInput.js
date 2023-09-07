import React,{useState} from 'react'

function TodoInput(props) {

    const[inputtext,setinputtext]=useState("")

  return (
    
    <div className='input-container'>
<input type='text' className='input-box-todo' value={inputtext} placeholder='enter your todo' onChange={e=>{setinputtext(e.target.value)}} />
<button className='add-btn' onClick={()=>{
    props.addlist(inputtext)
    setinputtext("")
}}>+</button>
<div>{inputtext}</div>
    </div>
  )
}

export default TodoInput