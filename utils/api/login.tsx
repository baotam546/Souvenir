import { post } from "./ApiCaller";

let loginUrl = `/Auth/login`;
let registerUrl = `/Auth/register`;
export const loginApi = {
    login: (email: string, password: string) => {
        return post(loginUrl, { email, password });
    },
    register: (email: string, password: string) => {
        return post(registerUrl, { email, password });
};