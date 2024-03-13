import { prisma } from '../config/database'
import { Todo, User } from '../models/todo'
import { Request, Response } from 'express'

export const insertUser = async (req: Request, res: Response) => {
    try {
        const newUser: User = req.body
    const response = await prisma.user.create({
        data: newUser
    })
    console.log(response)
    res.status(200).json(response)
    } catch(e: any) {
        res.status(500).json({msg: "couldn't create a new user : "+ e.message})
    }
}

// insertUser('pranav', 'awefawef', 'pranav', 'sonawane', 'sonawnaer@gmail.com')

async function insertTodo(title: string, description: string, userId: number) {
    const response = await prisma.todo.create({
        data: {
            title,
            description,
            userId
        }
    })
    console.log(response)
}

// insertTodo('Solana Course', 'This is a web 3 solana course', 4)

async function getTodosAndUserDetails(userId: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(response)
}

// getTodosAndUserDetails(4)