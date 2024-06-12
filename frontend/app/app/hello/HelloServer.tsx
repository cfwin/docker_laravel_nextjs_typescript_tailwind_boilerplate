import React from 'react';

// 定义数据类型
interface Data {
    message?: string;
    error?: string;
}

const fetchData = async (): Promise<Data> => {
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

const HelloPage = async () => {
    const data = await fetchData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {data.error ? data.error : data.message}
        </main>
    );
}

export default HelloPage;
