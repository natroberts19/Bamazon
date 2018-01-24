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

// Connect to the mysql server and sql database.
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayItems();
});

// Display the list of products that are available.
function displayItems() {
  connection.query("SELECT * FROM products", function (err, results) {
    // if (err) throw err;
    for (var i = 0; i < results.length; i++) {
      console.log("----------------------------------------------------------------------");
      console.log("Item Id: " + results[i].item_id + " | Item Name: " + results[i].product_name + " | Item Price: " + results[i].price_cust_cost);
    }
    console.log("----------------------------------------------------------------------");
    startTrans();
  });
}

// Create a startTrans function to start the transaction with the customer.
function startTrans() {
  // Inquirer menu:
  inquirer
    .prompt([
      // Prompt 1. Enter the item_id for the product you want to buy. [input]
      {
        name: "item_choice",
        type: "input",
        message: "Enter the Item Id for the item you want to order."
      },
      // Prompt 2. How many would you like to buy? [input]
      {
        name: "quantity",
        type: "input",
        message: "Enter the quantity of the item you want to order.",
        // Add conditional for valid number entry.
        validate: function (quant) {
          if (isNaN(quant) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      // Retrieve the information of the ordered item.
      connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        
        var orderedItem;

        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.item_choice) {
            orderedItem = results[i].product_name;
            console.log("Customer has ordered", answer.quantity, "of", orderedItem);
            console.log("Is the quantity ordered", answer.quantity, " < ", results[i].stock_quantity, "?");
            // checkInv();
          } 
          // else {
          //   console.log("Sorry that item is not available, please choose another item.")
          // }
        }
      });
      // console.log("Quantity Ordered: ", answer.quantity);
      // console.log("Order Total: ", orderTotal);
    })
}

// Create a function to confirm customer order and determine if inventory is available. 
    // If customer order not correct, displayItems() and startTrans().
    // If inventory not available, display message "Sorry there is not enough in inventory to fill your order." Then, displayItems(), startTrans().
    // If inventory is available, run completeOrder().



// Create a function to check and update remaining inventory in the products table. 
// function checkInv() {}

// Create a function to fill the customer's order and display a summary.
// function completeOrder() {}
// Update the inventory ("UPDATE products SET ? WHERE ?")
// Fill the order, "Order Successfully submitted. You have purchased +quantity+ of +item+. Your order total is: +order_total+.