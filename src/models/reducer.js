import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    login: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginState: (state, action) => {
            state.name = action.payload.name;
            state.login = action.payload.login;
        },

        setSignOutState: (state) => {
            state.name = null;
            state.login = false;
        },
    },
});

export const { setUserLoginState, setSignOutState } = userSlice.actions;

export const selectUserLogin = (state) => state.user.login;

export default userSlice.reducer;