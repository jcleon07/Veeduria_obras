import axios from "axios";

const basePath = '/api';

const api = {

    get: <T>(endpoint: string) => axios.get<T>(`${basePath}/${endpoint}`),

    post: <T>(endpoint: string, body: T) => axios.post<T>(`${basePath}/${endpoint}`, body),

    put: <T>(endpoint:string, body: T) => axios.put<T>(`${basePath}/${endpoint}`, body),

    delete: (endpoint:string) => axios.delete(`${basePath}/${endpoint}`)

}

export { api }