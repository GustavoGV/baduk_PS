import { PrivateKeyInput } from 'crypto';
import { Order } from '../entities/Order'

export interface IOrdersRepository {
    /*
    findByRangeValues(acimaDe: number | null, abaixoDe: number | null): Promise<any>
    findByRangeTime(inicioPeriodo: string | null | Date, finalPeriodo: string | null): Promise<any>
    findByUpperValues(acimaDe: number | null): Promise<any>
    findByLowerValues(abaixoDe: number | null): Promise<any>
    findByEndTime(finalPeriodo: number | null): Promise<any>
    findByStartTime(inicioPeriodo: number | null): Promise<any>
    findByIds(ids: Array<string> | null): Promise<any>
    */
    

    findByRangeValuesByRangeTimeByIds(acimaDe: number | null, abaixoDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerPage: number | null, ids: Array<string> | null): Promise<any>;
    findByRangeValuesByRangeTime(acimaDe: number | null, abaixoDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerPage: number | null): Promise<any>;
    findByRangeValuesByStartTimeByIds(acimaDe: number | null, abaixoDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerPage: number | null, ids: Array<string> | null): Promise<any>;
    findByRangeValuesByStartTime(acimaDe: number | null, abaixoDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>;
    findByRangeValuesByEndTimeByIds(acimaDe: number | null, abaixoDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByRangeValuesByEndTime(acimaDe: number | null, abaixoDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByLowerValuesByRangeTimeByIds(abaixoDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByLowerValuesByRangeTime(abaixoDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByLowerValuesByStartTimeByIds(abaixoDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByLowerValuesByStartTime(abaixoDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByLowerValuesByEndTimeByIds(abaixoDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByLowerValuesByEndTime(abaixoDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByUpperValuesByRangeTimeByIds(acimaDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByUpperValuesByRangeTime(acimaDe: number | null, inicioPeriodo: string | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByUpperValuesByStartTimeByIds(acimaDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByUpperValuesByStartTime(acimaDe: number | null, inicioPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    findByUpperValuesByEndTimeByIds(acimaDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null, ids: Array<string> | null): Promise<any>
    findByUpperValuesByEndTimeBy(acimaDe: number | null, finalPeriodo: string | null, page: number | null, contentsPerpage: number | null): Promise<any>
    
    save(user: Order): Promise<void>

}
