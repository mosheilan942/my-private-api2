import axios from "axios";
import { OrderInterface } from "../types/order.js";
import pg from "pg";
const { Pool } = pg;
import { config } from "dotenv";
config()
const banner = process.env.BANNER_BASE_URL;
const erp = process.env.ERP_BASE_URL;
const oms = process.env.OMS_BASE_URL;

const sendToOms = async (order: OrderInterface) => {
  const res = await axios.post(`${oms}/orders`, order);
  return res.data.data;
};

    const sendToDB = async (order:OrderInterface) => {
        console.log("order in sendToDB",order);
    const {
        userId,
        orderTime,
        status,
        totalPrice,
        shippingDetails: {
            address: { country, city, street, zipCode},
            orderType,
            contactNumber
        },
       
    } = order;

    const query = `
        UPDATE users
        SET
            contactNumber = $1,
            address = jsonb_set(
                COALESCE(address, '{}'::jsonb),
                '{country}', $2::jsonb,
                true
            )
        WHERE userid = $3
    `;
    const values = [Number(contactNumber), { country, city, street, zipCode }, userId];

    const res = await sendQueryToDatabase(query, values);
    console.log('this res',res)
    const { rowCount } = res;
    console.log('this row count',rowCount);
    return rowCount;
};

const sendQueryToDatabase = async (query: string, values: any[]): Promise<any> => {
    const pool = new Pool();
    const client = await pool.connect();

    try {
        const data = await client.query(query, values);
        return data;
    } catch (err) {
        console.error(err);
        throw err; // Re-throw the error after logging it
    } finally {
        client.release(); // Release the connection in the finally block
    }
};



const getFromOms = async (userId: string) => {
  const res = await axios.get(`${oms}api/orders/${userId}`);
  return res.data.data;
};

export default {
  sendToOms,
  getFromOms,
  sendToDB
};


