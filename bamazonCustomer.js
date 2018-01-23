var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "HeBumps@15",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // run the start function after the connection is made to prompt the user
  // startTrans();
});

// Create a startTrans function to start the transaction.
function startTrans() {
  // Display the list of products that are available.
  connection.query("SELECT * FROM products", function (err, results) {
      // if (err) throw err;
      for (var i = 0; i < results.length; i++) {
        console.log("Item Id: " + results[i].item_id + " | Item Name: " + results[i].product_name + " | Item Price: " + results[i].price_cust_cost);
      }
      console.log("----------------------------------------------------------------------");
    });

    // Inquirer menu:
    // Prompt 1. Enter the item_id for the product you want to buy. [input]
    // Add conditional for valid entry.
    // Run a query to select the item desired. (SELECT).

    // Prompt 2. How many would you like to buy? [input]
    // Run a query to determine if inventory is available. -- checkInv() function? or, just run a query here.
    // If inventory not available, display message "Sorry there is not enough in inventory to fill your order."
    // If inventory is available, run fillOrder().
  }

  // Create a function to check remaining inventory in the products table. ?
  // function checkInv() {



  // Create a function to fill the customer's order and update the inventory in the products table.
  // function fillOrder() {
  // Update the inventory ("UPDATE auctions SET ? WHERE ?")
  // Fill the order, "Order Successfully submitted. You have purchased +quantity+ of +item+. Your order total is: +order_total+."