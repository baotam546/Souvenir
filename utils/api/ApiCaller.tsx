import axios, { AxiosResponse } from "axios";

const defaultURL = "https://3376-2001-ee0-d788-bc30-44c3-90f9-149e-de2f.ngrok-free.app/api";

interface PublicCallParams {
    method: string;
    url: string;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    data?: any;
}

const PublicCall = (
    method: string,
    endpoint: string,
    headers?: Record<string, string>,
    params?: Record<string, any>,
    body?: any
) => {
    const config: PublicCallParams = {
        method,
        url: defaultURL + endpoint,
        headers: { ...headers },
        params: { ...params },
        data: body,
    };
    return axios(config);
};

export const get = (
    endpoint: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return PublicCall("GET", endpoint, headers, params);
};

export const post = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return PublicCall("POST", endpoint, headers, params, body);
};

export const put = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return PublicCall("PUT", endpoint, headers, params, body);
};

export const remove = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return PublicCall("DELETE", endpoint, headers, params, body);
};