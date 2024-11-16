import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const categoriesAPI = createApi({
  reducerPath: 'categoriesAPI',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/api/categories',
      providesTags: ['Categories'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
