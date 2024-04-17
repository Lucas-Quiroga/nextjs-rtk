import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

/**
 * Configura y devuelve la tienda Redux.
 * @returns La tienda configurada.
 */
export const store = configureStore({
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

// Esto es para que TypeScript sepa que el tipo de RootState es el tipo de retorno de store.getState
export type RootState = ReturnType<typeof store.getState>;

//Esto hace que TypeScript sepa que el tipo de AppDispatch es el tipo de store.dispatch
export type AppDispatch = typeof store.dispatch;
