import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    currUser: {},
};

const userSlice = createSlice({
        name: "users",
        initialState,
        reducers: {
            setPosts: (state, action) => {
                state.posts = action.payload;
            },
            setCurrUser: (state, action) => {
                state.currUser = action.payload;
            },
            resetState: (state, action) => {
                state.currUser = initialState;
            },
        },
    }
);

export const {setPosts, setCurrUser,resetState} = userSlice.actions;
export default userSlice.reducer;