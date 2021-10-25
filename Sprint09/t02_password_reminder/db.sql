CREATE database ucode_registration;
USE ucode_registration;
CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);