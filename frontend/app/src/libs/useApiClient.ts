import axios, { AxiosRequestConfig } from 'axios';

class UseApiClient {
    private baseUrl: string = process.env.API_URL as string;
    private headers: Record<string, string> = {
        "Content-Type": "application/json",
    }

    setHeaders(newHeaders: Record<string, string>) {
        this.headers = {
            ...this.headers,
            ...newHeaders,
        };
    }

    private async makeRequest<T>(method: string, path: string, data?: Record<string, string>): Promise<{ data: T }> {
        const requestConfig: AxiosRequestConfig = {
            method,
            url: `${this.baseUrl}${path}`,
            headers: this.headers,
            data,
        };

        try {
            const response = await axios(requestConfig);

            return { data: response.data as T };
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Request failed: ${error.message}`);
            } else {
                throw new Error(`Request failed: ${error}`);
            }
        }
    }

    async get<T>(path: string, query?: Record<string, string>): Promise<{ data: T }> {
        const queryString = query && Object.keys(query).length
            ? '?' + new URLSearchParams(query).toString()
            : '';

        return this.makeRequest<T>('get', `${path}${queryString}`);
    }

    async post<T>(path: string, data: Record<string, string>): Promise<{ data: T }> {
        return this.makeRequest<T>('post', path, data);
    }

    async put<T>(path: string, data: Record<string, string>): Promise<{ data: T }> {
        return this.makeRequest<T>('put', path, data);
    }

    async delete<T>(path: string): Promise<{ data: T }> {
        return this.makeRequest<T>('delete', path);
    }
}

export default new UseApiClient();
