DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (ID)
);
CREATE TABLE role (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER(11),
  PRIMARY KEY (ID)
);
CREATE TABLE employee (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER (11) NOT NULL,
  manager_id INTEGER (11) NULL,
  PRIMARY KEY (ID)
);