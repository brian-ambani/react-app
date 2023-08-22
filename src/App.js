import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'August 30th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Work',
        day: 'September 3rd at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'project Launch',
        day: 'September 15th at 10:00am',
        reminder: false,
    }
])

// Add task

const addTask = (task) =>{
  console.log(task)
}
// Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder:
      !task.reminder }: task
    )
  )
}
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ?(
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ): (
        'No Active Task'
      )}
      
    </div>
  );
}
export default App;
