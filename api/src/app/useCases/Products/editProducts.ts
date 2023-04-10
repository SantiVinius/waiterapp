import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function editProducts(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const productUpdate = req.body;

    if (!productId) {
      return res.status(400).json({
        error: 'Product not found.',
      });
    }

    await Product.findByIdAndUpdate(
      productId,
      productUpdate,
    );

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
