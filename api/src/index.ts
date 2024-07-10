import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRouter from './routes/userRouter';
import config from './config/config';

const app = express();
const prisma = new PrismaClient();

app.use('/api/user', userRouter);


app.listen(config.port, () => {
    console.log(`${new Date()} : Server successfully started on port : ${config.port}`);
})

