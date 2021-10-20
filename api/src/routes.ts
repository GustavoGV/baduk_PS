import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { createProductController } from './useCases/CreateProduct';
import { createOrderController } from './useCases/CreateOrder';
import { listOrderController } from './useCases/ListOrder';
import { listProductController } from './useCases/ListProduct';


const router = Router();

router.post('/orders', (request: any, response: any) => createOrderController.handle(request, response));
router.post('/products', (request: any, response: any) => createProductController.handle(request, response));
router.post('/customers', (request: any, response: any) => createUserController.handle(request, response));

router.get('/orders', (request: any, response: any) => listOrderController.handle(request, response));
router.get('/products', (request: any, response: any) => listProductController.handle(request, response));
router.get('/customers', (request: any, response: any) => createUserController.handle(request, response));


export { router };
