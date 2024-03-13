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
const express = require('express');
const client_1 = require("@prisma/client");
const app = express();
app.use(express.json());
const prisma = new client_1.PrismaClient();
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield prisma.user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        },
        select: {
            firstName: true,
            lastName: true,
            email: true
        }
    });
    res.json({
        result
    });
}));
app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
