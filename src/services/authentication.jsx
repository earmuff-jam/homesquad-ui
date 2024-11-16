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
        return {
          url: '/api/sessions',
          method: 'POST',
          body: data,
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

export const { useGetSignInMutation, useGetSignUpMutation, useGetAcceptInviteMutation } = authenticationAPI;
