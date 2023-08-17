import Header from "./components/Header";
import Task from "./components/Task";
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
  const name = 'Brain'
  return (
    <div className="container">
      <Header />
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;
