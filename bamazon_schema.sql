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
    ('100','Mizuno Wave Runner 10', 'Clothing, Shoes', '89.50', '20'),
    ('400','Orthopedic Pet Bed, SM', 'Pet Supplies', '25.99', '116'),
    ('401','Orthopedic Pet Bed, MED', 'Pet Supplies', '25.99', '6'),
    ('402','Orthopedic Pet Bed, LG', 'Pet Supplies', '35.99', '157'),
    ('403','Dog Car Seat Cover', 'Pet Supplies', '28.99', '88'),
    ('300','CamelBak Water Bottle', 'Sports, Outdoors', '24.50', '23'),
    ('301','HS Backpack', 'Sports, Outdoors', '124.98', '50'),
    ('302','HS Backpack, Deluxe', 'Sports, Outdoors', '144.98', '50'),
    ('101','Brooks Adrenaline GTS', 'Clothing, Shoes', '68.50', '135'),
    ('200','Nikon D5600 Digital SLR', 'Electronics', '564.99', '90'),
    ('102','Coastal Blue Colorblock Swimwear-Green', 'Clothing, Shoes', '39.00', '19'),
    ('103','Coastal Blue Colorblock Swimwear-Red', 'Clothing, Shoes', '39.00', '29'),
    ('500','GoYoga Yoga Mat', 'Sports, Fitness', '16.99', '33'),
    ('501','FitBit Smart Fitness Watch', 'Sports, Fitness', '189.75', '1');
