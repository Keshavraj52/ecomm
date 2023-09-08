export interface signUp{
    name:string,
    email:string,
    password:string
}
export interface login{
    email:string,
    password:string

}
export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined|number,
    productId:undefined|number
}
export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number |undefined,
    quantity:undefined|number,
    userId:number,
    productId:number
}
export interface priceSummary{
    quantity:number,
    price:number,
    discount:number,
    tax:number,
    delivary:number,
    total:number,
    discountedprice:number
}
export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:string,
    id:number|undefined
}