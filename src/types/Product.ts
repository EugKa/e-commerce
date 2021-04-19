export interface IProduct {
    length: any;
    category: string;
    id: string;
    image: string;
    listId: string;
    name: string;
    price: number;
    quantity?: any
}

export type ProductCollection = Array<IProduct>