CREATE database ucode_registration;
USE ucode_registration;
CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);