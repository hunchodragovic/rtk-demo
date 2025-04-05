const { configureStore } = require("@reduxjs/toolkit");
const cakeSlice = require("../features/cake/cakeSlice");
const iceCreamSlice = require("../features/iceCream/iceCreamSlice");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    iceCream: iceCreamSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
