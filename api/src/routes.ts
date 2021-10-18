import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request: any, response: any) => createUserController.handle(request, response));
router.get('/users', (request: any, response: any) => createUserController.handle(request, response));

export { router };
