export interface Todo {
    title: string,
    description: string,
    completed?: boolean,
    userId: number
}

export interface User {
    firstName: string,
    lastName?: string,
    username: string,
    password: string,
    email: string
}