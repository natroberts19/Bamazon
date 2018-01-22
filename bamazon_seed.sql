DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INTEGER(11) unsigned NOT NULL auto_increment PRIMARY KEY,
  item_id INT UNIQUE NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45),
  price_cust_cost INT default 0,
  stock_quantity INT
);
