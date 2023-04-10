import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

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

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategories);

// List Products
router.get('/products', listProducts);

// Create Products
router.post('/products', upload.single('image'), createProducts);

// Edit Products
router.patch('/products/:productId', editProducts);

// Delete Products
router.delete('/products/:productId', deleteProducts);

// Get Products by Categorys
router.get('/categories/:categoryId/products', listProductsByCategory);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:orderId', cancelOrder);



