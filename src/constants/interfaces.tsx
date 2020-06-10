export interface IGeneralResponseDTO{
    success:boolean,
    message?:string
}
export interface CategoryLine{
    id:number
    name:string
    image:string
    products:Array<Product|undefined>
}

export interface Product{
    id:number
    name:string
    quantity:number
    lowerPrice:number
    upperPrice:number
    packaging:Array<Packaging>
}

export interface Packaging{
    id:number
    packaging:string
}

export interface IListItems{
    name:string
    list:Array<string>
}

export {}
