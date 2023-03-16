import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Preparación de material",
      startDate: "02/20/2023",
      endDate: "02/20/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Junta de equipo",
      startDate: "02/20/2023",
      endDate: "02/20/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Junta con el cliente",
      startDate: "02/20/2023",
      endDate: "02/20/2023",
      priority: "Alta",
      color: "red"
    },
    {
      name: "Lluvia de ideas rebranding",
      startDate: "02/21/2023",
      endDate: "02/21/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Bosquejo UX y detallado paleta de colores",
      startDate: "02/22/2023",
      endDate: "02/22/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Bosquejado de versiones de Home Page",
      startDate: "02/23/2023",
      endDate: "02/23/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Bosquejo global del sitio",
      startDate: "02/24/2023",
      endDate: "02/24/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Bosquejado de versiones de home page",
      startDate: "02/27/2023",
      endDate: "02/27/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Junta Equipo Coding",
      startDate: "02/28/2023",
      endDate: "02/28/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Bosquejo global del mapa sitio",
      startDate: "02/28/2023",
      endDate: "02/28/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Modelado principal de la base de datos",
      startDate: "02/28/2023",
      endDate: "03/01/2023",
      priority: "Alta",
      color: "red"
    },
    {
      name: "Test alfa del modelo de base de datos",
      startDate: "03/01/2023",
      endDate: "03/02/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de headers, tipografías y espacios publicitarios",
      startDate: "03/03/2023",
      endDate: "03/03/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño de Home Page, menú de opciones",
      startDate: "03/06/2023",
      endDate: "03/06/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de login, UX de perfiles de usuarios",
      startDate: "03/06/2023",
      endDate: "03/06/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de paginas secundarias y newsletter",
      startDate: "03/07/2023",
      endDate: "03/07/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Test base de datos",
      startDate: "03/07/2023",
      endDate: "03/07/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño Final de la Homepage",
      startDate: "03/08/2023",
      endDate: "03/08/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño final de la UX",
      startDate: "03/08/2023",
      endDate: "03/08/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño final newsletter",
      startDate: "03/08/2023",
      endDate: "03/08/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Diseño de headers, tipografías y espacios publicitarios",
      startDate: "03/13/2023",
      endDate: "03/13/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño de home page, menú de opciones",
      startDate: "03/13/2023",
      endDate: "03/13/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño de login, UX de perfiles de usuarios",
      startDate: "03/13/2023",
      endDate: "03/13/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Test base de datos",
      startDate: "03/14/2023",
      endDate: "03/14/2023",
      priority: "Media",
      color:" orange"
    },
    {
      name: "Diseño final de la Homepage",
      startDate: "03/15/2023",
      endDate: "03/15/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño final de UX",
      startDate: "03/15/2023",
      endDate: "03/15/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Diseño final newsletter",
      startDate: "03/15/2023",
      endDate: "03/15/2023",
      priority: "Baja",
      color: "green"
    },
    {
      name: "Test usabilidad base",
      startDate: "03/16/2023",
      endDate: "03/16/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Test seguridad base",
      startDate: "03/16/2023",
      endDate: "03/16/2023",
      priority: "Media",
      color: "orange"
    },
    {
      name: "Llenado de bitácora",
      startDate: "03/17/2023",
      endDate: "03/17/2023",
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
