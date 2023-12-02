import axios from "axios";
import {products} from "../data.js";
import Product from "../types/Product.js";
import { c } from "vitest/dist/reporters-5f784f42.js";
const erp = process.env.ERP_BASE_URL;


const getProductByID = async (id:string) => {
    console.log('hellow from dal get poroduct', id);
    const res = await fetch(`${erp}/shopInventory/${id}`)
    const resConverted = await res.json()
    console.log('hellow from dal fetch product bybyid', resConverted);
    if(res.ok){
        
        return res.body
    }
    const data = products
    console.log('hellow from dal data product by id', data[0]);
    //add function to get reviews 
    return data[0]
}


const getTop5Products =  async () => {
    const data = products
    // console.log('hellow from dal', data);
    return data 
    // const res = await axios.get(`${process.env.BANNER_BASE_URI}/api/topFiveCategories`)
    // return res.data
};

const saveReviewsToDB = async (reviews: any, pid: string) => {
    console.log('hellow from dal', reviews,pid);
    return null
}

const getReviewsFromDB = async (pid: string) => { 
    console.log('hellow from dal', pid);
    return [{
        title: "Sample Review",
        author: "John Doe",
        body: "This is a great product. I highly recommend it!",
        rating: 5,
        thumbUp: 15,
        thumbDown: 2,
    }]
}
const feedbackReviews = async (pid: string, reviewId: string, feedback: string) => {
    console.log('hellow from dal', pid, reviewId, feedback);
    return null

}
const getProductBySearch = async (search: string) => {
    const res = await fetch(`${erp}/shopInventotory/?search=${search}`) 
    console.log('hellow from dal search', res);

    if(res.ok){
        return res.body
    }
    const data = products.filter((item:Product) => item.name===search)  
return data}
export default {getProductByID, getTop5Products, saveReviewsToDB, getReviewsFromDB, feedbackReviews, getProductBySearch}