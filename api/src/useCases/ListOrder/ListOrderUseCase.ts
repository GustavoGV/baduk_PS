import { Order } from '../../entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';
import { IListOrderRequestDTO } from './ListOrderDTO';

export class ListOrderUseCase {
  constructor(
        private ordersRepository: IOrdersRepository,
  ) {}

  async execute(data: IListOrderRequestDTO) {
    const {acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids} = data
    
    if(data.abaixoDe && data.acimaDe){//query do intervalo entre os valores abaixoDe e acimaDe
      if(data.inicioPeriodo && data.finalPeriodo){//query do intervalo entre os valores inicioPeriodo e finalPeriodo + range values
        if(data.ids){
          const result = await this.ordersRepository.findByRangeValuesByRangeTimeByIds(acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)
          return result
        }
        else{
          const result = await this.ordersRepository.findByRangeValuesByRangeTime(acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)
          return result
        }
      }
      else{
        if(data.inicioPeriodo){//query com o filtro inicioPeriodo +range values
          if(data.ids){
            const result = await this.ordersRepository.findByRangeValuesByStartTimeByIds(acimaDe, abaixoDe, inicioPeriodo, page, contentsPerPage, ids)
            return result
          }
          else{
            const result = await this.ordersRepository.findByRangeValuesByStartTime(acimaDe, abaixoDe, inicioPeriodo, page, contentsPerPage)
            return result
          }
        }
        else{//query com o filtro finalPeriodo + rangeValues
          if(data.ids){
            const result = await this.ordersRepository.findByRangeValuesByEndTimeByIds(acimaDe, abaixoDe, finalPeriodo, page, contentsPerPage, ids)
            return result
          }
          else{
            const result = await this.ordersRepository.findByRangeValuesByEndTime(acimaDe, abaixoDe, finalPeriodo, page, contentsPerPage)
            return result
          }
        }
      }
    }
    else{
      if(data.abaixoDe){//query com o filtro abaixoDe
        if(data.inicioPeriodo && data.finalPeriodo){//query do intervalo entre os valores inicioPeriodo e finalPeriodo + abaixoDe
          if(data.ids){
            const result = await this.ordersRepository.findByLowerValuesByRangeTimeByIds(abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)
            return result
          }
          else{
            const result = await this.ordersRepository.findByLowerValuesByRangeTime(abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)
            return result
          }
        }
        else{
          if(data.inicioPeriodo){//query com o filtro inicioPeriodo + abaixoDe
            if(data.ids){
              const result = await this.ordersRepository.findByLowerValuesByStartTimeByIds(abaixoDe, inicioPeriodo, page, contentsPerPage, ids)
              return result
            }
            else{
              const result = await this.ordersRepository.findByLowerValuesByStartTime(abaixoDe, inicioPeriodo, page, contentsPerPage)
              return result
            }
          }
          else{//query com o filtro finalPeriodo + abaixoDe
            if(data.ids){
              const result = await this.ordersRepository.findByLowerValuesByEndTimeByIds(abaixoDe, finalPeriodo, page, contentsPerPage, ids)
              return result
            }
            else{
              const result = await this.ordersRepository.findByLowerValuesByEndTime(abaixoDe, finalPeriodo, page, contentsPerPage)
              return result
            }
          }
        }
      }
      else if(data.acimaDe){//query com o filtro acimaDe
        if(data.inicioPeriodo && data.finalPeriodo){//query do intervalo entre os valores inicioPeriodo e finalPeriodo + acimaDe
          if(data.ids){
            const result = await this.ordersRepository.findByUpperValuesByRangeTimeByIds(acimaDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids)
            return result
          }
          else{
            const result = await this.ordersRepository.findByUpperValuesByRangeTime(acimaDe, inicioPeriodo, finalPeriodo, page, contentsPerPage)
            return result
          }
        }
        else{
          if(data.inicioPeriodo){//query com o filtro inicioPeriodo + acimaDe
            if(data.ids){
              const result = await this.ordersRepository.findByUpperValuesByStartTimeByIds(acimaDe, inicioPeriodo, page, contentsPerPage, ids)
              return result
            }
            else{
              const result = await this.ordersRepository.findByUpperValuesByStartTime(acimaDe, inicioPeriodo, page, contentsPerPage)
              return result
            }
          }
          else{//query com o filtro finalPeriodo + acimdaDe
            if(data.ids){
              const result = await this.ordersRepository.findByUpperValuesByEndTimeByIds(acimaDe, finalPeriodo, page, contentsPerPage, ids)
              return result
            }
            else{
              const result = await this.ordersRepository.findByUpperValuesByEndTimeBy(acimaDe, finalPeriodo, page, contentsPerPage)
              return result
            }
          }
        }
      }
      else{//filtro apenas pelos IDS
        const result = await this.ordersRepository.findByIds(ids)
        return result
      }
    } 
  }
}
