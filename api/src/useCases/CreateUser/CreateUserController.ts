import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUsersUseCase: CreateUserUseCase,
    ) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        //const { name, email, password, phone } = request.body;
        const name = 'sdsdsd'
        const password = 'sdsdsd'
        const phone = 'sdsdsd'
        const email = 'sdsdsd'
        try {
            await this.createUsersUseCase.execute({
                name: name,
                email: email,
                password: password,
                phone: phone
            })
            return response.status(201).send();
        }
        catch (err) {
            console.log(err)
            return response.status(400).json({
                message: 'Unexpected error'
            })
        }
    }
}