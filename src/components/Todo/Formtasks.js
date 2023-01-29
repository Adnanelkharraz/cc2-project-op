import React, { useState } from 'react'

import Task from './Task'
import { v4 as uuidv4} from 'uuid';

export default function Formtasks() {

const [tasks,settasks]=useState([
{id:uuidv4(),nom: 'Sport'},
{id:uuidv4(),nom: 'Film'},
{id:uuidv4(),nom: 'Coder en react '}


])



const [task,setTask]=useState('');

const addTask=()=>{

    let ntasks=[...tasks];

    let ntask={};

ntask.id=uuidv4();

ntask.nom=task;

ntasks.push(ntask);
settasks(ntasks);
setTask('');
}



const deletetask=(idp)=>{

let ntasks=tasks.filter((t)=>{

return t.id!=idp

})

settasks(ntasks);

} 

  return (
    <div>
        <h1>    To do List _App</h1>
        <form>
        <div className='d-flex align-items-center justify-content-center'>
        <input placeholder='Entrer une tache  ' type="text"  className='mx-3'   onChange={(e)=>{setTask(e.target.value)}}   value={task}    />   <input type="button" class="btn btn-primary"   onClick={addTask}     value="Ajouter" />
        </div>
          
        </form>
        <br /> <br />
<ul>
{

tasks.map((t)=>{

  
return <li key={t.id}> <Task   delf={()=>deletetask(t.id)}  txt={t.nom}/></li>
  
  
  
  })




}






</ul>
    

    </div>
  )
}
