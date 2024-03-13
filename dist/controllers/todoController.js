"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUser = void 0;
const database_1 = require("../config/database");
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const response = yield database_1.prisma.user.create({
            data: newUser
        });
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(500).json({ msg: "couldn't create a new user : " + e.message });
    }
});
exports.insertUser = insertUser;
// insertUser('pranav', 'awefawef', 'pranav', 'sonawane', 'sonawnaer@gmail.com')
function insertTodo(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.prisma.todo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(response);
    });
}
// insertTodo('Solana Course', 'This is a web 3 solana course', 4)
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield database_1.prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
// getTodosAndUserDetails(4)
