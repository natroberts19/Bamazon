DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INTEGER(11) unsigned NOT NULL auto_increment PRIMARY KEY,
  item_id VARCHAR(55) UNIQUE NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(55),
  price_cust_cost INTEGER DECIMAL(0,2) default 0,
  stock_quantity INTEGER
);

INSERT INTO products
	(item_id, product_name, department_name, price_cust_cost, stock_quantity)
    VALUES 
    ('12item1','Mizuno Wave Runner 10', 'Clothing, Shoes', '89.00', '20'),
    ('56item2','Orthopedic Pet Bed', 'Pet Supplies', '25.00', '16'),
    ('56item3','Dog Car Seat Cover', 'Pet Supplies', '28.00', '8'),
    ('34item4','CamelBak Water Bottle', 'Sports, Outdoors', '24.00', '3'),
    ('34item5','HS Backpack', 'Sports, Outdoors', '124.00', '5'),
    ('12item6','Brooks Adrenaline GTS', 'Clothing, Shoes', '68.00', '13'),
    ('78item7','Nikon D5600 Digital SLR', 'Electronics', '564.00', '9'),
    ('12item8','Coastal Blue Colorblock Swimwear', 'Clothing, Shoes', '39.00', '11'),
    ('90item9','GoYoga Yoga Mat', 'Sports, Fitness', '16.00', '33'),
    ('90item10','FitBit Smart Fitness Watch', 'Sports, Fitness', '189.00', '1');
