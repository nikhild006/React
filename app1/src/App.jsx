import React,{ useState } from "react";
function App(){
  let [employees]=useState([
    {id:1,name:"Emp1",jobTitle:"Sales",salary:1000},
    {id:2,name:"Emp2",jobTitle:"Finance",salary:2000},
    {id:3,name:"Emp3",jobTitle:"Software",salary:3000}
  ]);
  
  return(
    <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Job Title</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.jobTitle}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    
    </table>
  )
}
export default App;