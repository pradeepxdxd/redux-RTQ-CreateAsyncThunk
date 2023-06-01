import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { faker } from '@faker-js/faker'

const albumApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: builder => {
        return {
            removeAlbum : builder.mutation({
                invalidatesTags : (result, error, album) => {
                    return [{
                        type : 'Albumz',
                        id : album.id
                    }]
                },
                query : album => {
                    return {
                        url : `/album/${album.id}`,
                        method : "DELETE"
                    }
                }
            }),

            addAlbum : builder.mutation({
                // invalidatesTags : ["Albumz"],
                invalidatesTags : (result, error, user) => {
                    return [{
                        type : 'UsersAlbums',
                        id : user.id
                    }]
                },
                query : (user) => {
                    return {
                        url : '/album',
                        body : {
                            userId : user.id,
                            title : faker.commerce.productName()
                        },
                        method : 'POST'
                    }
                }
            }),

            fetchAlbums: builder.query({
                // providesTags : ["Albumz"],  // if we simply using it, then it will call whole user's album but what we need, we need only to fetch particular user's album

                // providesTags : (result, error, user) => {
                //     return [{
                //         type : 'Albumz',
                //         id : user.id,
                //     }]
                // },

                providesTags : (result, error, user) => {
                    const tags = result.map(album => {
                        return {
                            type : 'Albumz',
                            id : album.id
                        }
                    })

                    tags.push({
                        type : 'UsersAlbums',
                        id : user.id
                    })

                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/album',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumApi;
export { albumApi };
