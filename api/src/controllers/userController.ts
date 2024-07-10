import { Request, Response } from 'express';


const createUser = (req: Request, res: Response) => {
    res.status(200).json({msg: 'ok'});
}

const loginUser = (req: Request, res: Response) => {
    res.status(200).json({msg: 'ok'});
}

const editUser = (req: Request, res: Response) => {
    res.status(200).json({msg: 'ok'});
}

const deleteUser = (req: Request, res: Response) => {
    res.status(200).json({msg: 'ok'});
}

const getUsers = (req: Request, res: Response) => {
    res.status(200).json({msg: 'ok'});
}


export { createUser, loginUser, editUser, deleteUser, getUsers };