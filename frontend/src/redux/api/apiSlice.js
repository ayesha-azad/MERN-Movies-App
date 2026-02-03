import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ 
  baseUrl: BASE_URL,
  credentials: 'include', // Include cookies in requests
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
