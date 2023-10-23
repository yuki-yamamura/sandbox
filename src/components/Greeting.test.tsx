import Greeting from './Greeting';
import { server } from '@/mocks/server';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';

test('sample test 1', async () => {
  render(<Greeting />);
  const greetingMessage = await screen.findByText('Hello, Bob!');
  expect(greetingMessage).toBeInTheDocument();
});

test('sample test 2', async () => {
  server.resetHandlers(
    rest.get('/api/name', (_req, res, ctx) => {
      return res(ctx.json({ name: 'Jennifer' }));
    }),
  );
  render(<Greeting />);
  const greetingMessage = await screen.findByText('Hello, Jennifer!');
  expect(greetingMessage).toBeInTheDocument();
});
