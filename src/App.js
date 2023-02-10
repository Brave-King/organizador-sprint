import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Preparación de material",
      startDate: "02/08/2023",
      endDate: "02/09/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Junta de equipo",
      startDate: "02/10/2023",
      endDate: "02/10/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Junta con el cliente",
      startDate: "02/11/2023",
      endDate: "02/11/2023",
      priority: "Alta",
      color: "red"
    },
    {
      name: "Lluvia de ideas rebranding",
      startDate: "02/13/2023",
      endDate: "02/13/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Bosquejo UX y detallado paleta de colores",
      startDate: "02/13/2023",
      endDate: "02/13/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Bosquejado de versiones de Home Page",
      startDate: "02/14/2023",
      endDate: "02/14/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Bosquejo global del sitio",
      startDate: "02/14/2023",
      endDate: "02/14/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Junta equipo coding",
      startDate: "02/15/2023",
      endDate: "02/15/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Bosquejo global del sitio",
      startDate: "02/15/2023",
      endDate: "02/16/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Test alfa del modelo de base de datos",
      startDate: "02/17/2023",
      endDate: "02/18/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de headers, tipografías y espacios publicitarios",
      startDate: "02/19/2023",
      endDate: "02/20/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño de Home Page, menú de opciones",
      startDate: "02/20/2023",
      endDate: "02/21/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de login, UX de perfiles de usuarios",
      startDate: "02/22/2023",
      endDate: "02/22/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de paginas secundarias y newsletter",
      startDate: "02/23/2023",
      endDate: "02/23/2023",
      priority: "Baja",
      color: "green"
    },
  ]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>Organizador Sprint</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} style={{ backgroundColor: task.color }}>
              <td>{task.name}</td>
              <td>{task.startDate}</td>
              <td>{task.endDate}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => addTask({
        name: "Nueva Tarea",
        startDate: "01/07/2023",
        endDate: "01/08/2023",
        priority: "Alta",
        color: "red"
      })}>
        Agregar Tarea
      </button>
    </div>
  );
}

export default App;
