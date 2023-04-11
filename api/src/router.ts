import path from 'node:path';
import http from 'node:http';
import { Router } from 'express';
import multer from 'multer';
import jwt from 'jsonwebtoken';

import { createCategories } from './app/useCases/Categories/createCategories';
import { listCategories } from './app/useCases/Categories/listCategories';
import { listProductsByCategory } from './app/useCases/Categories/listProductsByCategory';

import { createProducts } from './app/useCases/Products/createProduct';
import { listProducts } from './app/useCases/Products/listProducts';

import { listOrders } from './app/useCases/Orders/listOrders';
import { createOrder } from './app/useCases/Orders/createOrder';
import { changeOrderStatus } from './app/useCases/Orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/Orders/cancelOrder';
import { editProducts } from './app/useCases/Products/editProducts';
import { deleteProducts } from './app/useCases/Products/deleteProducts';
import { createUser } from './app/useCases/Users/createUser';
import { loginUser } from './app/useCases/Users/loginUser';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401).json({ error: 'Access denied' });
  }

  try {
    const secret = `${process.env.SECRET}`;

    jwt.verify(token, secret as string);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

// Create User
router.post('/auth/register', createUser);

// Login
router.post('/auth/login', loginUser);

// List Categories
router.get('/categories', checkToken, listCategories);

// Create Category
router.post('/categories', checkToken, createCategories);

// List Products
router.get('/products', checkToken, listProducts);

// Create Products
router.post('/products', checkToken, upload.single('image'), createProducts);

// Edit Products
router.patch('/products/:productId', checkToken, editProducts);

// Delete Products
router.delete('/products/:productId', checkToken, deleteProducts);

// Get Products by Categorys
router.get('/categories/:categoryId/products', checkToken, listProductsByCategory);

// List Orders
router.get('/orders', checkToken, listOrders);

// Create Order
router.post('/orders', checkToken, createOrder);

// Change order status
router.patch('/orders/:orderId', checkToken, changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:orderId', checkToken, cancelOrder);
