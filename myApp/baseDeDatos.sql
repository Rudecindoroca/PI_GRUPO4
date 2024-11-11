-- Creando la base de datos
CREATE DATABASE proyecto_db;
USE proyecto_db;

-- Crear tabla de usuarios
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    usuario VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Crear tabla de productos
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255) NOT NULL,
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Insertar datos en la tabla Users
INSERT INTO Users (email, usuario, contrasena) VALUES
('usuario1@gmail.com', 'usuario1', 'contrasena1'),
('usuario2@gmail.com', 'usuario2', 'contrasena2'),
('usuario3@gmail.com', 'usuario3', 'contrasena3'),
('usuario4@gmail.com', 'usuario4', 'contrasena4'),
('usuario5@gmail.com', 'usuario5', 'contrasena5');

-- Insertar datos en la tabla Products
INSERT INTO Products (imagen, nombre_producto, descripcion, user_id) VALUES
('producto1.jpg', 'Producto 1', 'Descripción del Producto 1', 1),
('producto2.jpg', 'Producto 2', 'Descripción del Producto 2', 2),
('producto3.jpg', 'Producto 3', 'Descripción del Producto 3', 1),
('producto4.jpg', 'Producto 4', 'Descripción del Producto 4', 3),
('producto5.jpg', 'Producto 5', 'Descripción del Producto 5', 4);
