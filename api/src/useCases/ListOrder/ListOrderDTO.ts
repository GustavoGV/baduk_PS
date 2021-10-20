export interface IListOrderRequestDTO {
    acimaDe: number | null;
    abaixoDe: number | null;
    inicioPeriodo: string | null;
    finalPeriodo: string | null;
    page: number | null;
    contentsPerPage: number | null;
    ids: Array<string> | null;
} 
