import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const dashboardAPI = createApi({
  reducerPath: 'dashboardAPI',
  tagTypes: ['Dashboard', 'Groups', 'Chore', 'GroupDetails', 'GroupTypes', 'Templates'],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    // groups and types of group
    getGroups: builder.query({
      query: () => '/api/groups',
      providesTags: ['Groups'],
    }),
    getGroupTypes: builder.query({
      query: () => '/api/group_types',
      providesTags: ['GroupTypes'],
    }),
    getGroupDetails: builder.query({
      query: (id) => `/api/groups/${id}`,
      providesTags: ['GroupDetails'],
    }),
    createGroup: builder.mutation({
      query: ({ data }) => ({
        url: 'api/groups',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Groups', 'Dashboard'],
    }),
    updateGroup: builder.mutation({
      query: ({ data }) => ({
        url: `api/groups/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
    // dashboard and templates
    getDashboard: builder.query({
      query: () => '/api/dashboard',
      providesTags: ['Dashboard'],
    }),
    getTemplates: builder.query({
      query: ({ group_type_id }) => `/api/templates?group_type_id=${group_type_id}`,
      providesTags: ['Templates'],
    }),
    updateCurrentSelection: builder.mutation({
      query: ({ data }) => ({
        url: `api/groups/${data.id}/set_current_selection`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Dashboard', 'Groups'],
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useGetGroupTypesQuery,
  useGetGroupDetailsQuery,
  useCreateGroupMutation,
  useUpdateGroupMutation,
  useGetDashboardQuery,
  useGetTemplatesQuery,
  useUpdateCurrentSelectionMutation,
} = dashboardAPI;
