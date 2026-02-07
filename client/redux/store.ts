import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./api/todo.api";
import { registerApi } from "./api/auth.api";


const reduxStore = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        [registerApi.reducerPath]: registerApi.reducer,
    },
    middleware: def => def().concat(todoApi.middleware, registerApi.middleware)
})

export default reduxStore