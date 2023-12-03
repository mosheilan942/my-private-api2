import axios from "axios";
import { categories, products } from '../data.js'

// Consider using environment variables directly or ensure these constants have valid URLs
const banner = process.env.BANNER_BASE_URL
const erp = process.env.ERP_BASE_URL

// OMS - Modify this function to fetch categories from the appropriate API endpoint using Axios
const getCategories = async () => {
    // Example returning local data - Replace with Axios GET request
    const data = categories
    return data
};

// OMS 
const getCategoryProducts = async (name: string) => {
    const res = await axios.get(`https://banners-deshbord-doker.onrender.com/banners/api/ext/bannersProduct/top5/categories`)
    console.log('category error', res.status);
    if (res.status >= 200 && res.status < 400) {
        return res.data;
    }
    throw new Error("Error fetching category products");
};

// BANNERS 
const getTop5Categories = async () => {
    const res = await axios.get(`https://banners-deshbord-doker.onrender.com/banners/api/ext/bannersProduct/top5/categories`)
    console.log('top 5 categories', res.status);
    console.log('top 5 categories res', res.data.data);
    if (res.status >= 200 && res.status < 400) {
        return res.data.data;
    }
    throw new Error("Error fetching top 5 categories");
};

export default { getCategories, getCategoryProducts, getTop5Categories };
