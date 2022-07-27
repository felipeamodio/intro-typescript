import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Felipe', email: 'felipe@email.com.br'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            {name: 'Felipe Alves', email: 'felipe@email.com.br'},
            {subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo, Felipe...aqui você irá encontrar todas as informações que precisa sobre Typescript'},
        );
        return res.send();
    }
};