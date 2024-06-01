import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskTitle, setNewTaskTitle] = useState("")

  useEffect(() => {
    fetchTasks()
  }, [])
  
  async function fetchTasks() {
    try {
      const resp = await axios.get('http://localhost:4000/tasks')
      setTasks(resp.data)
    } catch (error) {
      console.error('Error al recuperar tareas', error)
    }
  }

  async function createTasks() {
    try {
      const resp = await axios.post('http://localhost:4000/tasks', {
        title: newTaskTitle,
      })
      setTasks([...tasks, resp.data])
      setNewTaskTitle('')
    } catch (error) {
      console.log('Error al crear la tarea', error)
    }
  }

  async function updateTask(id, updateTask) {
    try {
      const resp = await axios.put(`http://localhost:4000/tasks/${id}`, updateTask)
      setTasks(tasks.map(task => task.id === id ? resp.data : task))
    } catch (error) {
     console.log('Error al modificar la tarea', error) 
    }
  }

  async function deleteTask(id) {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log('Error al eliminar la tarea', error)
    }
  }

  return (
    <div>
      <h1>Administrador de tareas</h1>
      <input type='text' value={newTaskTitle} onChange={((e) => setNewTaskTitle(e.target.value))}
        placeholder="Nueva tarea"
      />
      <button onClick={createTasks}>Agregar tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type='text' value={task.title} onChange={(e) => updateTask(task.id, {title: e.target.value})} />
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
