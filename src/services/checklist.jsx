import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENDPOINT, prepareHeaders } from './constants';

export const checkListAPI = createApi({
  reducerPath: 'checkListAPI',
  tagTypes: ['Chore'],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders,
  }),
  endpoints: (builder) => ({
    addAttachment: builder.mutation({
      query: ({ data }) => {
        let formData = new FormData();
        formData.append('file', data.file);
        return {
          url: `/api/chores/${data.id}/attachments`,
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
      invalidatesTags: ['Chore'],
    }),
    addChecklistItem: builder.mutation({
      query: ({ data }) => ({
        url: `/api/chores/${data.id}/checklist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    toggleChecklistItem: builder.mutation({
      query: ({ data }) => ({
        url: `/api/chores/${data.id}/checklist/${data.checklist_id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    deleteChecklistItem: builder.mutation({
      query: ({ data }) => ({
        url: `/api/chores/${data.id}/checklist/${data.checklist_id}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
  }),
});

export const {
  useAddAttachmentMutation,
  useAddChecklistItemMutation,
  useToggleChecklistItemMutation,
  useDeleteChecklistItemMutation,
} = checkListAPI;
