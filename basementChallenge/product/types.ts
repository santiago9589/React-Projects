interface Option {
    size: string;
    quantity: number;
  }


  
  export interface Product {
    id: string;
    image: string;
    price: number;
    name: string;
    options: Option;
  }