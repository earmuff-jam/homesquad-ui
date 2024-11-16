import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const choreAPI = createApi({
  reducerPath: 'choreAPI',
  tagTypes: ['Chore', 'Dashboard'],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getChore: builder.query({
      query: (id) => `/api/chores/${id}`,
      providesTags: ['Chore'],
    }),
    getMyChores: builder.query({
      query: (date) => `/api/chores/my?date=${date}`,
      providesTags: ['Chore'],
    }),
    createChore: builder.mutation({
      query: ({ data }) => ({
        url: '/api/chores',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    updateChore: builder.mutation({
      query: ({ data }) => ({
        url: `/api/chores/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    startChore: builder.mutation({
      query: ({ id }) => ({
        url: `/api/chores/${id}/start`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    deleteChore: builder.mutation({
      query: ({ id }) => ({
        url: `/api/chores/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    completeChore: builder.mutation({
      query: ({ id }) => ({
        url: `/api/chores/${id}/complete`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
  }),
});

export const {
  useGetChoreQuery,
  useGetMyChoresQuery,
  useCreateChoreMutation,
  useUpdateChoreMutation,
  useStartChoreMutation,
  useCompleteChoreMutation,
  useDeleteChoreMutation,
} = choreAPI;
