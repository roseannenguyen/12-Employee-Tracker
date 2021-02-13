const mysql = require("mysql");
const cTable = require("console.table");
const inquirer = require("inquirer");


const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "AH3althycomputer1!",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

function startApp() {
    inquirer.prompt([

        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Add Employees",
                "Add Departments",
                "Add Roles",
                "Update Employee Role",
            ]
        },

    ]).then(function (data) {
        switch (data.start) {
            case "View All Employees?":
                viewEmployees();
                break;

            case "View All Roles":
                viewRoles();
                break;
            case "View All Departments":
                viewDepartments();
                break;

            case "Add Employees":
                addEmployee();
                break;

            case "Add Departments":
                addDepartment();
                break;

            case "Add Roles":
                addRole();
                break;

            case "Update Employee Role":
                updateEmployee();
                break;
        }
    })
}

function viewEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            startApp()
        })
}






app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
});
