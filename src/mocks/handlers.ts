import { rest } from 'msw';

import type { RequestHandler } from 'msw';

export const handlers: RequestHandler[] = [
  rest.get('/api/name', (_req, res, ctx) => {
    return res(ctx.json({ name: 'Bob' }));
  }),
];
