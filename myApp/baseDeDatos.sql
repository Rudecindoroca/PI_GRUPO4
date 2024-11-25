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

-- Insertar datos directamente con los productos reales
INSERT INTO Products (imagen, nombre_producto, descripcion, user_id) VALUES
('stussyhat.webp', 'Gorro Strussy', 
'Gorro ajustado tipo skullcap con detalle de borde enrollado y bordado del logo de Stüssy en punto de cadeneta.

Construcción superior de 6 puntos
Ajuste clásico
Talla única
Unisex
Material: 48% viscosa / 30% poliéster / 22% nailon
Importado', 
5),

('LaztTee.jpg', 'Lazy Tee Stussy',
'Camiseta de corte relajado en algodón teñido con pigmento, con detalles de costuras al revés. Logo Stüssy smooth stock estampado en el pecho izquierdo.

Manga corta
Cuello redondo y puños acanalados
Costuras con puntadas al revés
Estampado del logo Stüssy smooth stock
Corte relajado
Unisex
Material: 100% algodón
Importado
*Esta prenda ha sido teñida individualmente, lo que produce un resultado único. El color puede desvanecerse o desteñirse después del lavado.',
3),

('ChampionTee.jpg', 'Champion Stussy Tee',
'Camiseta de corte amplio en jersey de algodón de peso medio de 6.5oz. Incluye gráficos estampados con serigrafía.

Manga corta
Cuello acanalado
Corte grande
Unisex
Material: 100% algodón
Importado',
2),

('ButtonUpCarhart.jpg', 'Camisa Carhart',
'Camisa de manga larga a cuadros hecha de resistente sarga de algodón. Ofrece un ajuste relajado para comodidad durante todo el día y cuenta con un cierre de botones al frente y un cuello clásico. Perfecta para usar en capas o por sí sola.

Mangas largas
Cierre de botones
Bolsillo en el pecho con detalle de logo discreto
Corte relajado
Material: 100% algodón
Importado',
4),

('DogcrownTEE.jpg', 'Dog crown Tee Stussy',
'Camiseta de corte amplio en jersey de algodón de peso medio de 6.5 oz. Incluye gráficos estampados con serigrafía.

Manga corta
Cuello acanalado
Corte grande
Unisex
Material: 100% algodón
Importado',
1);

-- Agregar columnas para timestamps
ALTER TABLE Products 
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
ADD COLUMN deleted_at TIMESTAMP NULL;

-- Agregar productos adicionales
INSERT INTO Products (nombre_producto, descripcion, imagen, user_id, created_at)
VALUES 
('Remera negra relajada', 
 'Camiseta de corte regular. Cuello redondo. Mangas cortas.',
 'remeraNegra.jpg', 
 3,
 NOW()),

('Remera deportiva', 
 'Camiseta fabricada con tejido ajustado de alta elasticidad.

Cuello redondo y mangas cortas.
Costuras planas para evitar roces.
Detalle de logotipo estampado en el dobladillo',
 'RemeradeportivaNegra.jpg', 
 1,
 NOW());