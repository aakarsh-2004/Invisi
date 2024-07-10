import express from 'express';
import { createUser, loginUser, editUser, deleteUser, getUsers } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/signup', createUser);
userRouter.post('/signin', loginUser);
userRouter.post('/edit', editUser);
userRouter.delete('delete', deleteUser);
userRouter.get('/users', getUsers);

export default userRouter;