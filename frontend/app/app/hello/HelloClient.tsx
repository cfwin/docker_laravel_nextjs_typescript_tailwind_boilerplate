"use client"; // 这标记了该组件为客户端组件

import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

interface HelloProps {
    message: string; // 确保类型为小写的string
    error?: string;  // 可选的error属性
}

const Hello: NextPage<HelloProps> = ({ message, error }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {error ? (
                <div className="text-red-500">Error: {error}</div>
            ) : (
                <div>{message}</div>
            )}
        </main>
    );
};

async function fetchData(): Promise<{ message?: string; error?: string }> {
    try {
        const res = await fetch('http://host.docker.internal:8080/api/hello');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const message = await res.text();
        return { message };
    } catch (error) {
        return { error: 'Error fetching data' };
    }
}

const HelloClient: NextPage = () => {
    const [data, setData] = useState<{ message?: string; error?: string }>({});

    useEffect(() => {
        fetchData().then(setData);
    }, []);

    return <Hello message={data.message || ''} error={data.error} />;
};

export default HelloClient;
