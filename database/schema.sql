DROP DATABASE IF EXISTS class_a;

CREATE DATABASE class_a;

\c class_a;

CREATE TABLE users (
  Id SERIAL PRIMARY KEY,
  Username VARCHAR(36) UNIQUE,
  Password VARCHAR(100) UNIQUE,
  Salt BIGINT
);

CREATE TABLE sessions (
  Id SERIAL PRIMARY KEY,
  Session_Key VARCHAR(100),
  User_Id int,
  FOREIGN KEY (User_Id) REFERENCES users(Id)
);

CREATE TABLE keys (
  Id SERIAL PRIMARY KEY,
  key VARCHAR(36)
);

CREATE TABLE classes (
  Id SERIAL PRIMARY KEY,
  Class_Name VARCHAR(80) NOT NULL,
  Link VARCHAR(270) NOT NULL,
  Country VARCHAR(50),
  Region VARCHAR(100),
  Subregion VARCHAR(50),
  Website VARCHAR(270),
  Phone VARCHAR(40),
  Address VARCHAR(200),
  Rating DECIMAL(2,1),
  Description TEXT,
  Owner_Id INT,
  Owner VARCHAR(36),
  FOREIGN KEY (Owner_Id) REFERENCES users(id)
);