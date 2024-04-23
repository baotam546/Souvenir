import { post } from "./ApiCaller";

let loginUrl = `/auth/login`;
let registerUrl = `/auth/register`;
export const loginApi = {
    login: (username: string, password: string) => {
        return post(loginUrl, { username, password });
    },
    register: (username: string, password: string) => {
        return post(registerUrl, { username, password });
}};