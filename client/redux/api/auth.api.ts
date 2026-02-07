import { APP_URL } from "@/constants/config"
import { User } from "@/type/User"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const registerApi = createApi({
    reducerPath: "registerApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}/api/auth`, credentials: "include" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            signup: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            signin: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            singout: builder.mutation<void, User>({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                        body: userData
                    }
                },
            }),
        }
    }
})

export const { useSigninMutation, useSingoutMutation, useSignupMutation } = registerApi
