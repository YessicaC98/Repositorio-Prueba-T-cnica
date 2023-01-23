CREATE DATABASE bdclientes; 

use bdclientes; 

CREATE TABLE users
 (
 idUsuario int  primary key not null AUTO_INCREMENT,
 usuario varchar (45) not null,
 contraseña varchar (45) not null
);
INSERT INTO users(usuario, contraseña) VALUES("Masiv", "2023");
