import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        clickedButton: "invoice",
        clickMenuButton: false
    },
    reducers: {
        setClickedButton: (state, action) => {
            state.clickedButton = action.payload;
        },
        setClickMenuButton: (state, action) => {
            state.clickMenuButton = action.payload;
        }
    }
})

export const { setClickedButton, setClickMenuButton } = buttonSlice.actions;
export default buttonSlice.reducer;