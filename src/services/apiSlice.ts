import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Coin } from '../interfaces';

export const apiSlice = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coinlore.net/api'
  }),
  endpoints: builder => ({
    fetchCoins: builder.query<Coin[], void>({
      query: () => '/tickers/',
      transformResponse: (response: { data: Coin[] }) => response.data
    }),
    fetchSpecifCoin: builder.query<Coin, string>({
      query: id => `/ticker/?id=${id}`,
      transformResponse: (response: Coin[]) => response[0]
    })
  })
});

export const { useFetchCoinsQuery, useFetchSpecifCoinQuery } = apiSlice;
