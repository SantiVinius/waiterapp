import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProducts(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    if (!productId){
      return res.status(400).json({
        error: 'Product not found.'
      });
    }

    await Product.findByIdAndDelete(productId);

    res.status(201).json({
      error: 'Product has been deleted.'
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

