import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "http://localhost:1500/images/3.jpg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "http://localhost:1500/images/4.jpg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "http://localhost:1500/images/5.jpg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "http://localhost:1500/images/6.jpg",
    },
    {
      id: 5,
      name: "Corey",
      role: "The Devops Guy",
      img: "http://localhost:1500/images/7.jpg",
    },
    {
      id: 6,
      name: "Jack",
      role: "Senior",
      img: "http://localhost:1500/images/8.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
      if (employee.id == id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updateEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
