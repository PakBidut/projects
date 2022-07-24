import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

// Part : Toggle Reminder

function App() {

  //data task
  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : "Futsal",
        day : "May 14th at 15:30",
        reminder : true
    },
    {
        id : 2,
        text : "Bulu Tangkis",
        day : "May 15th at 12:30",
        reminder : true
    },
    {
        id : 3,
        text : "Sepeda",
        day : "May 17th at 06:30",
        reminder : true
    },
])

const deleteTask = (id) =>{
  setTasks(tasks.filter(
    (task)=>task.id != id
  ))
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
