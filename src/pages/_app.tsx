import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
//  AuthWrapper: redirect를 처리하기 위함
import { AuthWrapper } from '@/components/AuthWrapper';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </QueryClientProvider>
  );
}
