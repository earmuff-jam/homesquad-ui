import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const notificationsAPI = createApi({
  reducerPath: 'notificationsAPI',
  tagTypes: ['Notifications'],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: () => '/api/push_notifications',
      providesTags: ['Notifications'],
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsAPI;
