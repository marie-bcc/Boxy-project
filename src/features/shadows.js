import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur offset",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread offset",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const shadowsSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {},
    addShadow: (state, action) => {},
    updateShadow: (state, action) => {},
    updateCheckbox: (state, action) => {},
  },
});

export const { removeShadow, addShadow, updateShadow, updateCheckbox } =
  shadowsSlice.actions;
export default shadowsSlice.reducer;
