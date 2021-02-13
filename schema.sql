DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INTEGER(11) NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (ID)
);
CREATE TABLE role (
  id INTEGER(11) NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(5, 2),
  department_id INTEGER(11),
  PRIMARY KEY (ID)
);
CREATE TABLE employee (
  id INTEGER(11) NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER (11),
  manager_id INTEGER (11),
  PRIMARY KEY (ID)
);