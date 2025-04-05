const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream", // Also fixed the name from "cake" to "iceCream"
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = {
  reducer: iceCreamSlice.reducer,
  iceCreamActions: iceCreamSlice.actions,
};
