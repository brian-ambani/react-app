import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTask] = useState([
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
 
// Delete task

const deleteTask = (id) => {
  setTask(tasks.filter((task)=> task.id !== id))
}
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?(
        <Tasks tasks={tasks} onDelete=
        {deleteTask}/>
      ): (
        'No Active Task'
      )}
      
    </div>
  );
}

export default App;
