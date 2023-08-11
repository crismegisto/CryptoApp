import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { data } from './coins';

export const handlers = [
  rest.get('https://api.coinlore.net/api/tickers/', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data }));
  }),
  rest.get('https://api.coinlore.net/api/ticker/', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ ...data[0] }]));
  })
];

export const server = setupServer(...handlers);
