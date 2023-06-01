import {createSlice} from '@reduxjs/toolkit'
import {fetchUser} from '../thunk/fetchUsers'
import {addUser} from '../thunk/createUsers'
import { removeUser } from '../thunk/removeUser'

let initialState = {
    data : [],
    isLoading : false,
    isError : null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : builder => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isError = action.error;
        });

        // --------------------

        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        });

        // --------------------

        builder.addCase(removeUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(removeUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(user => user.id !== action.payload.id);
        })
        builder.addCase(removeUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        })
    }
})

export default userSlice.reducer;
