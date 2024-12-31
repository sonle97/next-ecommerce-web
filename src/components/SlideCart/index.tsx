'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TfiClose } from 'react-icons/tfi';
import { BsCartX } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { ACTION_TYPES, UnitOfMeasure, useCart } from '@/context/CartContext';
import './styles.scss';

interface ISlideCart {
  isOpenCart: boolean;
  handleOpenCart: (isOpen: boolean) => void;
}

const ProductItem = ({ product }: any) => {
  const { dispatch } = useCart();

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: ACTION_TYPES.REMOVE_PRODUCT, payload: productId });
  };

  const updateQuantityProductFromCart = (
    productId: number,
    quantity: number
  ) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_QUANTITY,
      payload: {
        id: productId,
        quantity: quantity,
      },
    });
  };

  const updateUnitOfMeasureProductFromCart = (
    productId: number,
    unit_of_measure: UnitOfMeasure
  ) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_UNIT_OF_MEASURE,
      payload: {
        id: productId,
        unit_of_measure: unit_of_measure,
      },
    });
  };

  return (
    <div
      className="flex items-center border-b border-[rgba(0, 0, 0, 0.105)] sm:px-[20px] px-[12px]
      sm:py-[17px] py-[10px] hover:bg-[#f7f7f7] cursor-pointer last:border-none sm:text-base text-sm"
    >
      <Image
        src="/images/products/product-image.jpg"
        alt="img"
        width={70}
        height={70}
        className="w-[70px] h-[70px] bg-[#ededed] rounded-[8px]"
      />
      <div className="flex-1 ml-[15px]">
        <p className="text-[15px] font-bold mb-1">{product.name}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center my-2">
            <div className="flex items-center rounded-[4px]">
              <input
                type="button"
                className="w-[30px] text-center focus:outline-none h-[35px] font-bold bg-[#f9f9f9] border border-[#ddd] cursor-pointer rounded-l-[20px] hover:bg-[#f1f1f1] border-r-0"
                value="-"
                onClick={() => {
                  if (product.quantity > 1) {
                    updateQuantityProductFromCart(
                      product.id,
                      product.quantity - 1
                    );
                  }
                }}
              />
              <input
                type="number"
                min={1}
                max={9999}
                value={product.quantity}
                className="w-[50px] px-1.5 text-center h-[35px] focus:outline-none appearance-none hover:appearance-none bg-white border border-[#ddd] shadow-input"
                onChange={(e) => {
                  let value = Number(e.target.value);
                  if (value < 0) {
                    value = 1;
                  }

                  if (value > 9999) {
                    value = 9999;
                  }

                  updateQuantityProductFromCart(product.id, value);
                }}
              />

              <input
                type="button"
                className="w-[30px] text-center focus:outline-none h-[35px] font-bold bg-[#f9f9f9] border border-[#ddd] cursor-pointer rounded-r-[20px] hover:bg-[#f1f1f1] border-l-0"
                value="+"
                onClick={() => {
                  if (product.quantity < 1000) {
                    updateQuantityProductFromCart(
                      product.id,
                      product.quantity + 1
                    );
                  }
                }}
              />
            </div>
          </div>

          <select
            defaultValue={product.unit_of_measure}
            className="border border-[#ddd] py-1 rounded-[6px] h-[35px] text-sm focus:outline-none font-medium w-[80px]"
            onChange={(e) => {
              updateUnitOfMeasureProductFromCart(
                product.id,
                e.target.value as UnitOfMeasure
              );
            }}
          >
            <option value={UnitOfMeasure.piece}>Cái</option>
            <option value={UnitOfMeasure.box}>Thùng</option>
          </select>
        </div>
      </div>
      <TfiClose
        size={18}
        className="cursor-pointer hover:text-red-1"
        onClick={() => removeProductFromCart(product.id)}
      />
    </div>
  );
};

const SlideCart = (props: ISlideCart) => {
  const { isOpenCart, handleOpenCart } = props;
  const { cart } = useCart();

  const openClass = isOpenCart ? 'open' : '';

  return (
    <div>
      <div className={`cart-widget-side ${openClass}`}>
        <div className="flex items-center justify-between border-b border-b-[rgba(0, 0, 0, 0.105)] px-[20px] py-[17px]">
          <span className="font-bold text-[18px]">Giỏ hàng</span>
          <TfiClose
            size={20}
            className="cursor-pointer"
            onClick={() => {
              handleOpenCart(false);
            }}
          />
        </div>

        {cart.length > 0 ? (
          <>
            <div className="max-h-[calc(100%_-_280px)] overflow-y-auto mt-4">
              {cart.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>

            <div className="absolute bottom-0 w-full">
              <div className="flex items-center justify-between px-[20px] py-[17px] border-t border-[rgba(0, 0, 0, 0.105)]">
                <p className="text-[15px]">Tổng cộng:</p>
                <p className="font-medium text-[18px]">
                  {cart.length} sản phẩm
                </p>
              </div>
              <div className="px-5 mb-6">
                <Link href="/thanh-toan" passHref>
                  <Button
                    variant="outline"
                    className="flex w-full rounded-[20px] mb-4"
                    onClick={() => {
                      handleOpenCart(false);
                    }}
                  >
                    Liên hệ đặt hàng
                  </Button>
                </Link>

                <Link href="/gio-hang" passHref>
                  <Button
                    variant="by_now"
                    className="flex w-full rounded-[20px]"
                    onClick={() => {
                      handleOpenCart(false);
                    }}
                  >
                    Xem giỏ hàng
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div>
            <BsCartX size={100} className="mx-auto mt-10 text-[#ededed]" />
            <p className="text-center mt-6 text-[14px]">
              Chưa có sản phẩm nào trong giỏ hàng.
            </p>

            <Link href="/cua-hang" passHref>
              <Button
                variant="outline"
                className="mx-auto flex items-center mt-6 bg-main text-white"
                onClick={() => {
                  handleOpenCart(false);
                }}
              >
                Quay lại cửa hàng
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div
        className={`overlay ${openClass}`}
        onClick={() => {
          handleOpenCart(false);
        }}
      />
    </div>
  );
};

export default SlideCart;
