import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const authenticationAPI = createApi({
  reducerPath: 'authenticationAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    getSignIn: builder.mutation({
      query: ({ data }) => {
        let formData = new FormData();
        formData.append('user[email]', data.email);
        formData.append('user[password]', data.password);
        return {
          url: '/users/sign_in',
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
    }),
    getSignOut: builder.mutation({
      query: () => {
        return {
          url: '/users/sign_out',
          method: 'DELETE',
        };
      },
    }),
    getSignUp: builder.mutation({
      query: ({ data }) => ({
        url: 'api/users/sign_up',
        method: 'POST',
        body: data,
      }),
    }),
    getAcceptInvite: builder.mutation({
      query: ({ data }) => ({
        url: 'api/users/accept_invitation',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetSignInMutation, useGetSignOutMutation, useGetSignUpMutation, useGetAcceptInviteMutation } =
  authenticationAPI;
