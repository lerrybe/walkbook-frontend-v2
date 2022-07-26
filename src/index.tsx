import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import EntryRoute from '~/routes';

import '~/styles/base.scss';
import '~/styles/reset.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <EntryRoute />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
