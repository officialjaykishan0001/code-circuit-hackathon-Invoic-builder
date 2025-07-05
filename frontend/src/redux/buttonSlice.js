import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        clickedButton: "invoice",
    },
    reducers: {
        setClickedButton: (state, action) => {
            state.clickedButton = action.payload;
        }
    }
})

export const {setClickedButton} = buttonSlice.actions;
export default buttonSlice.reducer;