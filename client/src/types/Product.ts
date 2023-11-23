import CategoryName from './CategoryName.js';

interface Product {
  id: string ,
  name: string,
  salePrice: number,
  quantity : number,
  description : string,
  category: string,
  discountPercentage : number,
  image : string
}


export default Product;
