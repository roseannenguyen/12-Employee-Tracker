USE employee_tracker_db;

----- Department Seeds -----

INSERT INTO department
    (name)
VALUES
    ("Restaurant");

INSERT INTO department
    (name)
VALUES
    ("Human Resouces");

INSERT INTO department
    (name)
VALUES
    ("IT");

----- Role Seeds -----

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Stylist", 42000, 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Assistant Store Manager", 60000, 1);

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Store Manager", 75000, 1);

INSERT INTO role
    (id, title, salary, department_id)
VALUES
    ("Brand Manager", 65000, 2);



----- Employees Seeds -----

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Charbelle", "Chaz", 3, null);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Sofi", "Hernan", 4, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Char", "Dant", 6, null);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Jonathan", "Uong", 9, 1);

