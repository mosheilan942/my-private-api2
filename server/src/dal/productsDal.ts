import axios from "axios";

const getProductByID = async (id:string) => {
    const res = await axios.get('https://655c7c6a25b76d9884fd5cd1.mockapi.io/product')
    console.log(await res.data)
    return res.data
}



const getTop5Products =  async () => {
    const res = await axios.get('https://655c7c6a25b76d9884fd5cd1.mockapi.io/product')
    console.log(await res.data)
    return res.data
};

export default {getProductByID, getTop5Products }