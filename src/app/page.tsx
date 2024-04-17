"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useGetUsersQuery } from "@/redux/services/userApi";

const HomePage = () => {
  const count = useAppSelector((state) => state.counterReducer.value);

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  const dispatch = useAppDispatch();

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl">total: {count}</h1>

      <div className="flex mx-auto justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <br />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>

      <div className="grid grid-cols-3 place-content-center mx-auto gap-4 container">
        {data?.map((user) => (
          <div key={user.id} className="border p-4 my-4">
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
