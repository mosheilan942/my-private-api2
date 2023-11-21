import productsService from "../services/productsService.js";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { Types } from "mongoose";


// @desc    Get product by id
// @route   GET  /api/products/:pid
// @access  Public

//OMS
const getProductByID = asyncHandler(async (req: Request, res: Response) => {
    const {pid} = req.params
    const product = await productsService.getProductByID(pid)
    res.json(product)  
})

// @desc    Increase clicked count
// @route   PATCH /api/products/:pid/click
// @access  Public


// @desc    Decrease quantity
// @route   PARCH /api/products/:pid/dec
// @access  Public


// @desc    Get top 5 products
// @route   GET /api/products/top5
// @access  Public
const getTop5Products = asyncHandler(async (_req, res) => {  
    const top5Products = await productsService.getTop5Products();
    res.json(top5Products);
  });

export default { getProductByID, getTop5Products}