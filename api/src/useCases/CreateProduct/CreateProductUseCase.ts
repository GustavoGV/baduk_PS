import { Product } from '../../entities/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { ICreateProductRequestDTO } from './CreateProductDTO';

export class CreateProductUseCase {
  constructor(
        private ProductsRepository: IProductsRepository,
  ) {}

  async execute(data: ICreateProductRequestDTO) {
    const nameAlreadyUsed = await this.ProductsRepository.findByName(data.name);
    
        if(nameAlreadyUsed){
            throw new Error('Usario com esse telefone ou email ja existe')
        }
        else{
          const produto = new Product(data);
          await this.ProductsRepository.save(produto);
        }
  }
}
