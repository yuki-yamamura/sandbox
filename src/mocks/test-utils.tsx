/* eslint-disable import/export */
import { render } from '@testing-library/react';
import { SWRConfig } from 'swr';

import type { RenderOptions, RenderResult } from '@testing-library/react';

type Props = {
  children: React.ReactNode;
};

const SWRConfigProvider = ({ children }: Props) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: SWRConfigProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
