import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUser = createAsyncThunk('user/fetch', async () => {
    const response = await axios.get('http://localhost:3000/user');
    return response.data;
})