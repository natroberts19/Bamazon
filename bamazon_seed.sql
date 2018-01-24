DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INTEGER(11) unsigned NOT NULL auto_increment PRIMARY KEY,
  item_id VARCHAR(55) UNIQUE NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(55),
  price_cust_cost DECIMAL(10,2) default 0,
  stock_quantity INTEGER
);

INSERT INTO products
	(item_id, product_name, department_name, price_cust_cost, stock_quantity)
    VALUES 
    ('1item1','Mizuno Wave Runner 10', 'Clothing, Shoes', '89.50', '20'),
    ('5item2','Orthopedic Pet Bed', 'Pet Supplies', '25.00', '16'),
    ('5item3','Dog Car Seat Cover', 'Pet Supplies', '28.00', '8'),
    ('3item4','CamelBak Water Bottle', 'Sports, Outdoors', '24.50', '3'),
    ('3item5','HS Backpack', 'Sports, Outdoors', '124.00', '5'),
    ('1item6','Brooks Adrenaline GTS', 'Clothing, Shoes', '68.00', '13'),
    ('7item7','Nikon D5600 Digital SLR', 'Electronics', '564.99', '9'),
    ('1item8','Coastal Blue Colorblock Swimwear', 'Clothing, Shoes', '39.00', '11'),
    ('9item9','GoYoga Yoga Mat', 'Sports, Fitness', '16.99', '33'),
    ('9item10','FitBit Smart Fitness Watch', 'Sports, Fitness', '189.00', '1');
