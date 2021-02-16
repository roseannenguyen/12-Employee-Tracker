USE employee_tracker_db;

----- Department Seeds -----

INSERT INTO department
    (name)
VALUES
    ("Restaurant"),
    ("Human Resouces"),
    ("IT");

----- Role Seeds -----

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Server", 42000, 3),
    ("Delivery", 60000, 1),
    ("Store Manager", 75000, 2),
    ("Cook", 65000, 1;



----- Employees Seeds -----

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Rose", "Nguyen", 3, null),
    ("Thomas", "Train", 4, 2),
    ("Peppa", "Peg", 6, null),
    ("Spongebob", "Squarepants", 9, 1);

