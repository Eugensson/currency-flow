import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/fixer/',
    prepareHeaders: headers => {
      headers.set('apikey', 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y');
      return headers;
    },
  }),

  tagTypes: ['exchanges'],
  endpoints: builder => ({
    getExchanges: builder.query({
      query: base => `latest&base=${base}`,
      providesTags: ['exchanges'],
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;

// 'https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}';
