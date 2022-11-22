import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const taskManagerApi = createApi({
    reducerPath:"taskManager",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5001/api/v1'}),
    endpoints: (builder)=> ({
        getAllTask: builder.query({
            query: ()=> '/tasks'
        })
    })
})

export const {useGetAllTaskQuery}  = taskManagerApi