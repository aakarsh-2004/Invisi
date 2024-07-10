import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const PORT = 7890 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`${new Date()} : Server successfully started on port : ${PORT}`);
})

