import React from 'react';

import { IProduct } from '@/config/data/products';
import RatingProduct from './RatingProduct';

const ReviewsProduct = ({ product }: { product: IProduct }) => (
  <div className="review-product-wrapper">
    <RatingProduct />
  </div>
);

export default ReviewsProduct;
