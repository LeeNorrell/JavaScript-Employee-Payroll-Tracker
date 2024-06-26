// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employees = [];
/*// Collect employee data
const collectEmployees = function() {
  prompt(`First Name`|| `Last Name`|| `Salary`)
  // TODO: Get user input to create and return an array of employee objects
}*/
function collectEmployees() {


  let addMoreEmployees = true
  while (addMoreEmployees) {
      const firstName = prompt("Enter employee's first name:");
      const lastName = prompt("Enter employee's last name:");
      const salary = parseInt(prompt("Enter employee's salary:"));
      // Validate the salary input
      if (isNaN(salary)) {
          salary = 0; // Default to $0 if not a number
      }

      // Create an employee object and add it to the array
      const employee = {
          firstName: firstName,
          lastName: lastName,
          salary: salary,
      }

      employees.push(employee)

      addMoreEmployees = confirm ("Do you want to add another employee? (yes/no)")
      
    }

  return employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  for(let i =0; i < employeesArray.length; i++){
    totalSalary = totalSalary + employeesArray[i].salary;
  }

  const avgSalary =  totalSalary / employeesArray.length;
  console.log(`avg salary: ${avgSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length);
    return employeesArray[index];
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
