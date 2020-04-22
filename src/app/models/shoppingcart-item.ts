import { Product } from './product';

export class ShoppingCartItem {
    // tslint:disable-next-line: align
    constructor(public key : string , public title: string, public price: number, public  imageUrl: string, public quantity: number){};
}