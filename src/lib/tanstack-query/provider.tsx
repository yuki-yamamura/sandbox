"use client";

import { queryClient } from "./client";
import { QueryClientProvider as Provider } from "@tanstack/react-query";

type Props = React.PropsWithChildren;

export const QueryClientProvider = ({ children }: Props) => (
  <Provider client={queryClient}>{children}</Provider>
);
