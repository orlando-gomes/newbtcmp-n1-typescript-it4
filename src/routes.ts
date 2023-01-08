import {Request, Response} from 'express';
import createUser1 , { createUser2, createUser3, createUser4 } from './services/CreateUser';

export function showUser(request: Request, response: Response) {

  const user1 = createUser1(undefined, 'orlando@yahoo', '123456');

  // Posso ou não definir o campo name?:
  const user2 = createUser2({ 
    email: 'orlando@gmail.com',
    password: '123456',
  })

  const user3 = createUser3({
    email: 'orlando@gmail',
    password: '123456',
    techs: ['Java', 'PHP'],
  })

  const user4 = createUser4({
    email: 'orlando@gmail',
    password: '123456',
    techs: ['Java', 'PHP', {tech: 'Node', score: 98}],
  })

  const user = user2;
  // return response.json({message: 'Hello world!'})
  return response.json(user);
}