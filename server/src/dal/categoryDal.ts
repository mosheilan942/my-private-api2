import axios from "axios";
import  {categories,products}  from '../data.js'
import { c } from "vitest/dist/reporters-5f784f42.js";
//OMS
const getCategories = async () => {
const data = categories
return data
};

//OMS
const getCategoryProducts = async (name: string) => {
    const data = products
    return data
};

//BANNERS
const getTop5Categories = async () => {
 const data = categories
    return data
};

export default { getCategories, getCategoryProducts, getTop5Categories};