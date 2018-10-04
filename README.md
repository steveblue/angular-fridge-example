# SmartFridgeManager

This example built with Angular for a smart fridge is based off the Java interface [defined here](https://gist.github.com/rcracel/5c863f606ce27b3a2ef7).

The project is compiled in the `/dist` folder.

To install dependencies, run `npm install` or `yarn install`.

To run the production ready app, use the command `node backend/server`. This will startup an express server that hosts the app.

Navigating to `http://localhost:4200` will redirect the user to `http://localhost:4200/stock/add`.


## Adding Groceries to the Fridge

`http://localhost:4200/stock/add`

The user can add any type and quantity of item already registered in the fridge.

![Adding Groceries to the Fridge](https://cdn.rawgit.com/steveblue/angular-fridge-example/a47a50cc/assets/add-item.png)

Another view would be required to register a type with the fridge, i.e. potatoes are not listed so the user would have to register a potato.

## Removing Groceries from the Fridge

`http://localhost:4200/stock/remove`

The user can remove items by uuid. This of course would need refinement in the real world, but will suffice for this example.

![Removing Groceries from the Fridge](https://cdn.rawgit.com/steveblue/angular-fridge-example/a47a50cc/assets/remove-item.png)