const cTable = require("console.table");
const inquirer = require("inquirer");
const connection = require("./config/connection.js");

function beginApp() {
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
    let queryString = "SELECT * FROM employees"

    connection.query(queryString,
        function (err, res) {
            if (err) throw err;

            console.table(res)

            beginApp();
        })
}

function viewRoles() {
    let queryString = "SELECT * FROM role"

    connection.query(queryString,
        function (err, res) {
            if (err) throw err;

            console.table(res)

            beginApp();
        })
}

function viewDepartments() {
    let queryString = "SELECT * FROM department"

    connection.query(queryString,
        function (err, res) {
            if (err) throw err;

            console.table(res)

            beginApp();
        })
}

// function addEmployee() {

// }

// function addDepartment() {

// }

// function addRole() {

// }
// function updateEmployee() {

// }

beginApp();