import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT } from './constants';

export const onBoardingAPI = createApi({
  reducerPath: 'onBoardingAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders: async (headers, { getState }) => {
      const { base } = getState();
      const { user } = base;
      if (user) {
        headers.set('X-User-Identification-Id', user.id);
        headers.set('X-User-Auth-Token', user.authentication_token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPersonalInfoOnboarding: builder.mutation({
      query: ({ data }) => ({
        url: 'api/onboarding/personal_information',
        method: 'PATCH',
        body: data,
      }),
    }),
    getAddressInformationOnboarding: builder.mutation({
      query: ({ data }) => ({
        url: 'api/onboarding/address_information',
        method: 'PATCH',
        body: data,
      }),
    }),
    getAvatarUploadOnboarding: builder.mutation({
      query: ({ data }) => {
        let formData = new FormData();
        formData.append('profile_picture', data.profile_picture);
        return {
          url: 'api/onboarding/avatar_upload',
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
    }),
  }),
});

export const {
  useGetPersonalInfoOnboardingMutation,
  useGetAddressInformationOnboardingMutation,
  useGetAvatarUploadOnboardingMutation,
} = onBoardingAPI;
