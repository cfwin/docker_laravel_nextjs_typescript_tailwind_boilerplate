import React from 'react';
import type { NextPage } from 'next'
import { useQuery, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/queryClient'
import UseApiClient from '@/libs/useApiClient';

const Hello: NextPage = () => {
    const { data, error } = useQuery({
        queryKey: ['hello'],
        queryFn: async () => {
            const response = await UseApiClient.get<string>('/api/hello'); 
            return response.data;
        }
    });

    if (error) return <div>error</div>
    if (!data) return <div>loading</div>
    return (
        <div>
            <h1> next.js</h1>
            <hr />
            <p>{data}</p>
        </div>
    )
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Hello />
        </QueryClientProvider>
    )
}

