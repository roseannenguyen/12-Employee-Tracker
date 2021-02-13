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
    
    connection.query("SELECT * FROM employee",
        function (err, res) {
            if (err) throw err;

            console.table(res)

            startApp();
        })
}



// function viewRoles() {

// }

// function viewDepartments() {

// }

// function addEmployee() {

// }

// function addDepartment() {

// }

// function addRole() {

// }
// function updateEmployee() {

// }

startApp()