var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp",
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
      console.log("Item Id: " + results[i].item_id + " | Name: " + results[i].product_name + " | Price: " + results[i].price_cust_cost);
    }
    console.log("----------------------------------------------------------------------");
    startTrans();
  });
}

// Create a startTrans function to start the transaction with the customer.
function startTrans() {
  // query the database for all items being sold.
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;

    // Inquirer menu:
    inquirer
      .prompt([
        // Prompt 1. Enter the item_id for the product you want to buy. [input]
        {
          name: "item_choice",
          type: "input",
          message: "Enter the Item Id for the item you want to order.",
          // Add conditional for valid item id entry.
          validate: function (itemId) {
            if (isNaN(itemId) === false && itemId != "") {
              return true;
            }
            return false;
          }
        },
        // Prompt 2. How many would you like to buy? [input]
        {
          name: "quantity",
          type: "input",
          message: "Enter your quantity.",
          // Add conditional for valid number entry.
          validate: function (quant) {
            if (isNaN(quant) === false && quant != "") {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function (answer) {
        // Retrieve the information of the ordered item.    
        var orderedItem;

        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.item_choice) {
            orderedItem = results[i];
            console.log("\nQuantity of", orderedItem.product_name, "available to order: ", orderedItem.stock_quantity);
            var newInv = orderedItem.stock_quantity - answer.quantity;
            // console.log("New Inventory:", newInv);
            // var orderTotal will be used to display the total of the customer order with fixed decimal of 2 places.
            var orderTotal = +((orderedItem.price_cust_cost * answer.quantity).toFixed(2));
            // console.log("You have ordered", answer.quantity, "of", orderedItem.product_name, "for a total of $", orderTotal);

            if (newInv < 0) {
              console.log("Inventory of", orderedItem.product_name, "is not sufficient. \nPlease order again.\n");
              newOrder();

            } else {
              // Determine if there is enough quantity of the item ordered.
              // This is the query I need, works in Workbench... 
              // UPDATE products
              // SET stock_quantity = 15
              // WHERE item_id = '1item1';
              connection.query("UPDATE products SET ? WHERE ?", [{
                  stock_quantity: newInv
                },
                {
                  item_id: orderedItem.item_id
                }

              ], function (error) {
                if (error) throw err;
                console.log("================================================================================\n You have ordered", answer.quantity, "of the", orderedItem.product_name, "for a total of $", orderTotal, "\n Your order was placed successfully. Thank you for ordering with Bamazon!\n================================================================================\n")
                newOrder();
              });
            }
          }
        }
      });
  });
}

function newOrder() {
  inquirer
    .prompt({
      // Prompt: Would you like to place another order? [yes/no]
      name: "new_order",
      type: "list",
      message: "Would you like to place a new order? Choose YES or NO.",
      choices: ['YES', 'NO']
    })
    .then(function (answer) {
      // based on answer either start a new order or end session.
      if (answer.new_order.toUpperCase() === 'YES') {
        displayItems();
      } else {
        console.log("==================================\nThank You for shopping at Bamazon!\n==================================");
      }
    });
}