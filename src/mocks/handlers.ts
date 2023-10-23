import { rest } from 'msw';

export const handlers = [
  rest.get('/api/name', (_req, res, ctx) => {
    return res(ctx.json({ name: 'Bob' }));
  }),
];
