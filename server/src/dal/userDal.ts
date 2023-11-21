import { Types } from "mongoose";
import UserModel from "../models/userModel.js";
import User from "../types/User.js";
import pg from "pg";
const { Pool } = pg;

const addUser = async (user: User) => {
    return await UserModel.create(user);
}

const getUser = async (userId: string) => {
    const query = 'SELECT * FROM users WHERE user_id ::text = $1';
    const values = [userId];
    const res = sendQueryToDatabase(query, values)
    return res;
}

const getUserByEmail = async (email: string) => {
    return await UserModel.findOne({email});
}

const sendQueryToDatabase = async (query:string, values:any[]) => {
    const pool = new Pool()
    const res = await pool.connect()
    const { rows } = await res.query(query, values);
    console.log('Query result:', rows);
    res.release()
    return rows
    
}


export default {addUser, getUser, getUserByEmail};
