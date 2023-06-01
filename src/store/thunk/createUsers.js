import {createAsyncThunk} from '@reduxjs/toolkit'
import {faker} from '@faker-js/faker'
import axios from 'axios'

export const addUser = createAsyncThunk('user/add', async () => {
    const user = await axios.post('http://localhost:3000/user', {
        name : faker.name.fullName()
    })

    return user.data;
})