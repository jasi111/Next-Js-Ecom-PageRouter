import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  static getProducts = async () => {
    var productResp = await fetch(this.getURL("/products"));    
    var products = await productResp.json();
    // console.log('first',products)
    return products;
    
  };

  static getProductsById = async (Id:any) => {
    var productResp = await fetch(this.getURL("/products/" + Id));    
    var product = await productResp.json();
    console.log('productIDProduct',product) 
    // console.log('productID',product.data.documentId) 
    return product;   
    
  };

}
