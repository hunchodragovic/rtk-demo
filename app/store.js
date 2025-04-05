const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./cake/cakeSlice").default;
const iceCreamReducer = require("./iceCream/iceCreamSlice").default;

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});
module.exports = store;
