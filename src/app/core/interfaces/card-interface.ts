

export interface CardInterface {
    flat(): any;
    forEach(arg0: (product: any) => void): unknown;
    title:string;
    subTitle:string;
    imgLogo:string;
    imgMain:string;
    desc: string;
    price:number;
    sale: number;
    category:string
    id:number 
}
export interface ProductInCart extends CardInterface {
    quantity:number
}
