import { MUser } from '../../entities/iMongoUsers';
import { IOrdersRepository } from '../IOrdersRepository';
import { Order } from '../../entities/Order';
import { AnyKeys } from 'mongoose';

export class MongoOrdersRepository implements IOrdersRepository {
  
  async save(user: Order): Promise<void> {
    const mongoDoc = new MUser({
      customerId: user.customerId,
      totalPrice: user.totalPrice,
      products: user.products,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      id: user.id,
    });
    await mongoDoc.save();
  }

  /*
  async findByRangeValues(acimaDe: number | null, abaixoDe: number): Promise<any>{
    const result = await MUser.find({
      totalPrice : { $gte :  acimaDe,  $lte :  abaixoDe}
    })
    return result
  }
  async findByRangeTime(inicioPeriodo: string | null | any, finalPeriodo: string):  Promise<any>{
    let inicio: string = inicioPeriodo[0] + inicioPeriodo[1] + inicioPeriodo[2] + inicioPeriodo[3] + '-' + inicioPeriodo[6] + inicioPeriodo[7] + '-' + inicioPeriodo[4] + inicioPeriodo[5]
    let final: string = finalPeriodo[0] + finalPeriodo[1] + finalPeriodo[2] + finalPeriodo[3] + '-' + finalPeriodo[6] + finalPeriodo[7] + '-' + finalPeriodo[4] + finalPeriodo[5]
    const result = await MUser.find({
      createdAt : { $gte : new Date(inicio),  $lte : new Date(final)}
    })
    return result
  }
  async findByUpperValues(acimaDe: number | null): Promise<any>{
    const result = await MUser.find({
      totalPrice : { $gte :  acimaDe}
    })
    return result
  }
  async findByLowerValues(abaixoDe: number | null): Promise<any>{
    const result = await MUser.find({
      totalPrice : { $lte :  abaixoDe}
    })
    return result
  }
  async findByEndTime(finalPeriodo: number | null): Promise<any>{

  }
  async findByStartTime(inicioPeriodo: number | null): Promise<any>{

  }
  async findByIds(ids: Array<string> | null): Promise<any>{
  }
  */
  async findByRangeValuesByRangeTime(acimaDe: number, abaixoDe: number, inicioPeriodo: string, finalPeriodo: string): Promise<any> {
    let inicio: string = inicioPeriodo[0] + inicioPeriodo[1] + inicioPeriodo[2] + inicioPeriodo[3] + '-' + inicioPeriodo[6] + inicioPeriodo[7] + '-' + inicioPeriodo[4] + inicioPeriodo[5]
    let final: string = finalPeriodo[0] + finalPeriodo[1] + finalPeriodo[2] + finalPeriodo[3] + '-' + finalPeriodo[6] + finalPeriodo[7] + '-' + finalPeriodo[4] + finalPeriodo[5]
    const result = await MUser.find({
      totalPrice : { $gte :  acimaDe,  $lte :  abaixoDe}
    }).find({
      createdAt: {
        $gte: new Date(inicio), 
        $lt: new Date(final)
      }
    })

      return result
  }
  async findByRangeValuesByRangeTimeByIds(acimaDe: number, abaixoDe: number, inicioPeriodo: string, finalPeriodo: string, page: number, contentsPerPage: number, ids: Array<string> | null): Promise<any> {
    const result = await MUser.find({
      totalPrice : { $gte :  acimaDe,  $lte :  abaixoDe}
    }).find({
      createdAt: {
        $gte: new Date(inicioPeriodo), 
        $lt: new Date(finalPeriodo)
      }
    })

      return result
  }
  async findByRangeValuesByStartTimeByIds(): Promise<any> {
    
  }
  async findByRangeValuesByStartTime(): Promise<any> {
    
  }
  async findByRangeValuesByEndTimeByIds(): Promise<any> {
    
  }
  async findByRangeValuesByEndTime(): Promise<any> {
    
  }
  async findByLowerValuesByRangeTimeByIds(): Promise<any> {
    
  }
  async findByLowerValuesByRangeTime(): Promise<any> {
    
  }
  async findByLowerValuesByStartTimeByIds(): Promise<any> {
    
  }
  async findByLowerValuesByStartTime(): Promise<any> {
    
  }
  async findByLowerValuesByEndTimeByIds(): Promise<any> {
    
  }
  async findByLowerValuesByEndTime(): Promise<any> {
    
  }
  async findByUpperValuesByRangeTimeByIds(): Promise<any> {
    
  }
  async findByUpperValuesByRangeTime(): Promise<any> {
    
  }
  async findByUpperValuesByStartTimeByIds(): Promise<any> {
    
  }
  async findByUpperValuesByStartTime(): Promise<any> {
    
  }
  async findByUpperValuesByEndTimeByIds(): Promise<any> {
    
  }
  async findByUpperValuesByEndTimeBy(): Promise<any> {
    
  }
  async findByIds(): Promise<any> {
    
  }

}
