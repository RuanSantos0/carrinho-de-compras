import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/e53b504ae2fd46a4a62039194ad962b1',
    timeout: 1000,
})