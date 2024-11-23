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





-- Cambiando los productos para que sean prodcutos de verdad con fotos de verdad:

SELECT * FROM proyecto_db.Products;

UPDATE proyecto_db.Products

SET nombre_producto = 'Gorro Strussy',
    descripcion = '
Gorro ajustado tipo skullcap con detalle de borde enrollado y bordado del logo de Stüssy en punto de cadeneta.

Construcción superior de 6 puntos
Ajuste clásico
Talla única
Unisex
Material: 48% viscosa / 30% poliéster / 22% nailon
Importado',
    imagen = 'stussyhat.webp',
    user_id = 5
WHERE id = 1;

SELECT * FROM proyecto_db.Products;

UPDATE proyecto_db.Products
SET nombre_producto = 'Lazy Tee Stussy',
    descripcion = 'Camiseta de corte relajado en algodón teñido con pigmento, con detalles de costuras al revés. Logo Stüssy smooth stock estampado en el pecho izquierdo.

Manga corta
Cuello redondo y puños acanalados
Costuras con puntadas al revés
Estampado del logo Stüssy smooth stock
Corte relajado
Unisex
Material: 100% algodón
Importado
*Esta prenda ha sido teñida individualmente, lo que produce un resultado único. El color puede desvanecerse o desteñirse después del lavado.',
    imagen = 'LazTee.jpg',
    user_id = 3
WHERE id = 2;

SELECT * FROM proyecto_db.Products;

UPDATE proyecto_db.Products
SET nombre_producto = 'Champion Stussy Tee',
    descripcion = '
Camiseta de corte amplio en jersey de algodón de peso medio de 6.5oz. Incluye gráficos estampados con serigrafía.

Manga corta
Cuello acanalado
Corte grande
Unisex
Material: 100% algodón
Importado',
    imagen = 'ChampionTee.jpg',
    user_id = 2
WHERE id = 3;

SELECT * FROM proyecto_db.Products;

UPDATE proyecto_db.Products
SET nombre_producto = 'Camisa Carhart',
    descripcion = 'Camisa de manga larga a cuadros hecha de resistente sarga de algodón. Ofrece un ajuste relajado para comodidad durante todo el día y cuenta con un cierre de botones al frente y un cuello clásico. Perfecta para usar en capas o por sí sola.

Mangas largas
Cierre de botones
Bolsillo en el pecho con detalle de logo discreto
Corte relajado
Material: 100% algodón
Importado
',
    imagen = 'ButtonUpCarhart.jpg',
    user_id = 4
WHERE id = 4;


SELECT * FROM proyecto_db.Products;

UPDATE proyecto_db.Products
SET nombre_producto = 'Dog crown Tee Stussy',
    descripcion = 'Camiseta de corte amplio en jersey de algodón de peso medio de 6.5 oz. Incluye gráficos estampados con serigrafía.

Manga corta
Cuello acanalado
Corte grande
Unisex
Material: 100% algodón
Importado',
    imagen = 'DogcrownTEE.jpg',
    user_id = 1
WHERE id = 5;