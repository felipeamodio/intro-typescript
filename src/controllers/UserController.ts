import {Request, Response} from 'express';
const users = [
    {name: 'Felipe', email: 'felipe@email.com.br'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    }
};