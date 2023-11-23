import { Types } from 'mongoose';
import cartModel from '../models/cartModel.js';
import productModel from '../models/productModel.js';
import Cart from '../types/Cart.js';
import axios from 'axios';
import type Product from "../types/Product.js";
import pg from "pg";
const { Pool } = pg;


// const b = productModel.find();

const createCart = async (userId: string) => {
  // return await cartModel.create({ user: userId });
};

const getCart = async (userId: string) => {

  const query = 'SELECT * FROM cartitems WHERE user_id ::text = $1';

  const values = [userId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const getCartProducts = async (userId: string, itemId: string):Promise<Product[]> => {
  const query = 'SELECT * FROM cartitems WHERE user_id ::text = $1 AND product_id = $2';
  const values = [userId, itemId];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const updateCart = async (userId: string, itemId: string, quantity: number) => {

  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = quantity + $3
  RETURNING *`

  const values = [userId, itemId, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const updateAmount = async (userId: string, product_id: string, quantity: number) => {
  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = quantity + $3
  RETURNING *`

  const values = [userId, product_id, quantity];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;

};
const sendToOms = async (cart: Cart) => {
  const res = await axios.post('localhost:3000/api/cart', cart)
  console.log('hi')
  return res
};

const deleteCart = async (userId: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId },
    { items: [] },
    { new: true }
  );
};

const deleteCartItem = async (userId: string, productId: string) => {
  return await cartModel.findOneAndUpdate(
    { user: userId },
    { $pull: { items: { product_id: productId } } },
    { new: true }
  );
};

const incAmount = async (userId: string, product_id: string) => {
  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = quantity + 1
  RETURNING *`

  const values = [userId, product_id];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const decAmount = async (userId: string, product_id: string) => {
  const query = `INSERT
  INTO cartitems
  (user_id, product_id, quantity) 
  VALUES
  ($1, $2, $3) 
  ON CONFLICT (user_id, product_id) DO UPDATE
  SET quantity = quantity - 1
  RETURNING *`

  const values = [userId, product_id];
  const res = await sendQueryToDatabase(query, values)
  const { rows } = res
  console.log('Query result:', rows);
  return rows;
};

const sendQueryToDatabase = async (query: string, values: any[]) => {
  const pool = new Pool()
  const res = await pool.connect()
  const data = await res.query(query, values);
  res.release()
  return data

}

export default {
  createCart,
  getCart,
  getCartProducts,
  updateCart,
  deleteCart,
  updateAmount,
  deleteCartItem,
  incAmount,
  decAmount,
  sendToOms
};
