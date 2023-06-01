import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import userslice from './slices/users.slice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumApi } from './apis/albumApi';
import { photoApi } from './apis/photosApi';

const store = configureStore({
    reducer : {
        user : userslice,
        [albumApi.reducerPath] : albumApi.reducer,
        [photoApi.reducerPath] : photoApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumApi.middleware)
        .concat(photoApi.middleware)
    }
});

setupListeners(store.dispatch);

export default store;