-- DROP DATABASE
DROP DATABASE IF EXISTS ;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE ecommerce_db; 
CREATE TABLE category(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR (50) NOT NULL
);

CREATE TABLE product (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR (50) NOT NULL,
price DECIMAL NOT NULL,
stock INT,
category_id INT NOT NULL,
FOREIGN KEY (category_id)REFERENCES category (id)
);

CREATE TABLE tag (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR (50)
);

CREATE TABLE productTag (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (product_id)REFERENCES product (id),
    FOREIGN KEY (tag_id)REFERENCES tag (id)
);
