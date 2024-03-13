import express, { Request, Response } from 'express';
import { insertUser } from '../controllers/todoController';
const router = express.Router()

router.post('/', insertUser)

export default router