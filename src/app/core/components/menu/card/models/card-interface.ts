

export interface CardInterface {
    title:string;
    subTitle:string;
    imgLogo:string;
    imgMain:string;
    desc: string;
    price:number;
    sale: number;
    category:"fastFoods" | "Ichimliklar" | "setBurger";
    id:number 
}
export interface ProductInCart extends CardInterface {
    quantity:number
}
