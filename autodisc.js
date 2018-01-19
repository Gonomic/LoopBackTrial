var loopback = require('loopback');
var ds = loopback.createDataSource('loopback-connector-mysql', {
  "host": "192.168.1.10",
  "port": 3306,
  "database": "humans",
  "username": "Familiez_Func",
  "password": "VerySecret"
});

// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('persons', {visited: {}, associations: true},
function (err, models) {
  console.log("Error= ", err);
  console.log("Inhoud van object models: ", JSON.stringify(models));
  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  // models.Inventory.findOne({}, function (err, inv) {
  //  if(err) {
  //     console.error(err);
  //    return;
  //  }
  //  console.log("\nInventory: ", inv);
    // Navigate to the product model
    // Assumes inventory table has a foreign key relationship to product table
  //  inv.product(function (err, prod) {
  //    console.log("\nProduct: ", prod);
  //    console.log("\n ------------- ");
  //  });
  //});
});
