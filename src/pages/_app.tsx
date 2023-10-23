import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
  void import('@/mocks/server').then(({ server }) => server.listen());
}
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  void import('@/mocks/browser').then(({ worker }) => worker.start());
}

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
