import { createSlice } from "@reduxjs/toolkit";

export const initState = {
    items: [],
    open: false,
};

const cabinetSlice = createSlice({
    name: "Cabinet",
    initialState: initState,
    reducers: {
        AddItem: (state, action) => {
            state.items = action.payload;
        },
        RemoveItem: (state, action) => {
            state.items = action.payload;
        },
        ToggleCabinet: (state, action) => {
            state.open = !state.open;
        },
    },
});

export const { AddItem, RemoveItem, ToggleCabinet } = cabinetSlice.actions;

export default cabinetSlice.reducer;
