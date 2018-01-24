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
    ('1','Mizuno Wave Runner 10', 'Clothing, Shoes', '89.50', '20'),
    ('2','Orthopedic Pet Bed, SM', 'Pet Supplies', '25.50', '116'),
    ('3','Orthopedic Pet Bed, MED', 'Pet Supplies', '25.50', '6'),
    ('4','Orthopedic Pet Bed, LG', 'Pet Supplies', '35.00', '157'),
    ('5','Dog Car Seat Cover', 'Pet Supplies', '28.75', '88'),
    ('6','CamelBak Water Bottle', 'Sports, Outdoors', '24.50', '23'),
    ('7','HS Backpack', 'Sports, Outdoors', '124.75', '50'),
    ('8','HS Backpack, Deluxe', 'Sports, Outdoors', '144.50', '50'),
    ('9','Brooks Adrenaline GTS', 'Clothing, Shoes', '68.50', '135'),
    ('10','Nikon D5600 Digital SLR', 'Electronics', '564.50', '90'),
    ('11','Coastal Blue Colorblock Swimwear-Green', 'Clothing, Shoes', '39.00', '19'),
    ('12','Coastal Blue Colorblock Swimwear-Red', 'Clothing, Shoes', '39.00', '29'),
    ('13','GoYoga Yoga Mat', 'Sports, Fitness', '16.50', '33'),
    ('14','FitBit Smart Fitness Watch', 'Sports, Fitness', '189.75', '3'),
    ('15','FitBit Charge 2', 'Sports, Fitness', '150.75', '5');
