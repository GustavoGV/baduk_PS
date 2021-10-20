export interface ICreateOrderRequestDTO {
    customerId: string;
    totalPrice: string;
    products: Array<{ id: string, quantity: number }>;
} 
