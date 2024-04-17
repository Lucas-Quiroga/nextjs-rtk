import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: string;
  userName: string;
};

/**
 * API para interactuar con el servicio de usuarios.
 */
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    /**
     * Obtiene todos los usuarios.
     * @returns Una lista de usuarios.
     */
    getUsers: builder.query<User[], null>({
      query: () => "users", //es lo mismo que hacer fetch('https://jsonplaceholder.typicode.com/users')
    }),
    /**
     * Obtiene un usuario por su ID.
     * @param id - El ID del usuario.
     * @returns El usuario correspondiente al ID proporcionado.
     */
    getUsersById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`, //es lo mismo que hacer fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersByIdQuery } = userApi;
