import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/api/users',
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: ({ data }) => {
        let formData = new FormData();
        formData.append('profile_picture', data.profile_picture);
        return {
          url: 'api/users',
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
      invalidatesTags: ['User'],
    }),
    inviteUserToGroup: builder.mutation({
      query: ({ data }) => ({
        url: `/api/groups/${data.id}/invite`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
    deleteUserFromGroup: builder.mutation({
      query: ({ data }) => ({
        url: `/api/groups/${data.id}/remove_user`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation, useInviteUserToGroupMutation, useDeleteUserFromGroupMutation } =
  userAPI;
