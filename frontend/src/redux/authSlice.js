import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.laoding = action.payload;
        }
    }
});


export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducers;