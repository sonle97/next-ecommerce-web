'use client';

import { BsCart4 } from 'react-icons/bs';
import { ACTION_TYPES, UnitOfMeasure, useCart } from '@/context/CartContext';
import { IProduct } from '@/config/data/products';

interface IAddToCart {
  product: IProduct;
  text?: string;
}

const AddToCart = (props: IAddToCart) => {
  const { product, text } = props;
  const { dispatch, handleOpenCartSlider } = useCart();

  const addToCart = () => {
    const _product = {
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: 1,
      unit_of_measure: UnitOfMeasure.box,
    };

    dispatch({ type: ACTION_TYPES.ADD_PRODUCT, payload: _product });
    handleOpenCartSlider(true);
  };

  return (
    <>
      <div
        className="flex items-center font-medium text-main hover:text-red-1 cursor-pointer gap-2"
        onClick={() => addToCart()}
      >
        <BsCart4 size={20} />
        {text && <span className="text-sm">Add to cart</span>}
      </div>
    </>
  );
};

export default AddToCart;
