// Import createApi (function to create an API service) and fetchBaseQuery (a basic fetch wrapper)
// from Redux Toolkit Query's React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT"
    
  }),
  // Define endpoints for our API service
  endpoints: (builder) => ({
   getPlayers: builder.query({
    query: ()=> '/players'
    }),
    getPlayer: builder.query({
      query:(id)=> '/players'+id
    })
  }),
});

export const {useGetPlayersQuery, useGetPlayerQuery} = puppyBowlApi
// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
