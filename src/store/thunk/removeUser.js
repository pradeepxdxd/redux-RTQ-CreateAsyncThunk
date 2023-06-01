import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const removeUser = createAsyncThunk('user/remove', async (user) => {
    await axios.delete(`http://localhost:3000/user/${user.id}`);
    return user;
})
