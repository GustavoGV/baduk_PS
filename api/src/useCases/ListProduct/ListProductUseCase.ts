import { Product } from '../../entities/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { IListProductRequestDTO } from './ListProductDTO';

export class ListProductUseCase {
  constructor(
        private productsRepository: IProductsRepository,
  ) {}
  
  async execute(data: IListProductRequestDTO) {
    const nameAlreadyUsed = await this.productsRepository.findByName(data.name);
    
        if(nameAlreadyUsed){
            throw new Error('Usario com esse telefone ou email ja existe')
        }
        else{
          const produto = new Product(data);
          await this.productsRepository.save(produto);
        }
  }
}
