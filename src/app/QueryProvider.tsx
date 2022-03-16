import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';

interface QueryProviderInterface {
  children: React.ReactNode;
}

const queryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: false,
      retry: false,
    },
  },
};

const client = new QueryClient(queryConfig);

export const QueryProvider = ({children}: QueryProviderInterface) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);
