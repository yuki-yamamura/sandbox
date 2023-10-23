import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

test('sample test 1', async () => {
  render(<Greeting />);
  const greetingMessage = await screen.findByText('Hello, Bob!');
  expect(greetingMessage).toBeInTheDocument();
});
