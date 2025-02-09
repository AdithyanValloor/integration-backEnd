import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)   
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const getProductsById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: "Product not found"})
        res.status(500).json(product)
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}

export const getProductImageById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) return res.status(404).json({message: "Product not found"})
        res.status(500).json(product.image)
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message})
    }
}