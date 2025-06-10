const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.json('WELCOME TO SG API');
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }

});

app.get('/Customers', async (req, res) => {
    try {
        const result = await pool.query('select * from customers');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/categories', async (req, res) => {
    try {
        const result = await pool.query('select * from categories');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/discounts', async (req, res) => {
    try {
        const result = await pool.query('select * from discounts');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/inventory', async (req, res) => {
    try {
        const result = await pool.query('select * from inventory');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/orderdetails', async (req, res) => {
    try {
        const result = await pool.query('select * from orderdetails');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/orders', async (req, res) => {
    try {
        const result = await pool.query('select * from orders');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/payments', async (req, res) => {
    try {
        const result = await pool.query('select * from payments');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('select * from products');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/suppliers', async (req, res) => {
    try {
        const result = await pool.query('select * from suppliers');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


app.get('/totalcustomers',async(req,res)=>{
    try{
        const result = await pool.query('select count(customer_id) from customers');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalcategory',async(req,res)=>{
    try{
        const result = await pool.query('select count(category_id) from categories');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totaldiscount',async(req,res)=>{
    try{
        const result = await pool.query('select count(discount_id) from discounts');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalemployees',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalinventory',async(req,res)=>{
    try{
        const result = await pool.query('select count(inventory_id) from inventory');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalorderdetails',async(req,res)=>{
    try{
        const result = await pool.query('select count(order_detail_id) from orderdetails');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalorders',async(req,res)=>{
    try{
        const result = await pool.query('select count(order_id) from orders');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalpayments',async(req,res)=>{
    try{
        const result = await pool.query('select count(payment_id) from payments');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalproducts',async(req,res)=>{
    try{
        const result = await pool.query('select count(product_id) from products');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalsuppliers',async(req,res)=>{
    try{
        const result = await pool.query('select count(supplier_id) from suppliers');
        res.json(result.rows);
    }catch(err)
    {
        res.status(500).json({Error:err.message});
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connected Succefully....on PORT ${PORT}`);
});

