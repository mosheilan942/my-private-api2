import axios from "axios";
import {products} from "../data.js";
import Product from "../types/Product.js";


const getProductByID = async (id:string) => {
    // console.log('hellow from dal', id);
    const data = products.filter((item:Product) => item.id===String(id))
    // console.log('hellow from dal', data);
    //add function to get reviews 
    return data
    // const res = await axios.get(`https://dummyjson.com/products${id}`)
    // console.log(await res.data)
    // return res.data
}

const getTop5Products =  async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://banners-deshbord-doker.onrender.com/banners/api/ext/bannersProduct/top5/products`,
        headers: { 
          'Content-Type': 'application/json'
        },
      };

        const res = await axios.request(config)
        return res.data.data
              
    
};

const getTop5ForCategory = async (name: string) => {
    const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/topFiveCategories{name}`)
    return res.data
};

export default {getProductByID, getTop5Products,getTop5ForCategory }