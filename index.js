const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/iceCream/iceCreamSlice").iceCreamActions;

const store = require("./app/store");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());

console.log("-----------------", "After ordering 3 cakes and 2 ice creams");
store.dispatch(cakeActions.restocked(3));

console.log("-----------------", "After restocking 3 cakes");
unsubscribe();
