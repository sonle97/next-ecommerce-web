import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Modal, { ModalProps } from '@/components/ui/Modal';
import { ACTION_TYPES, useCart } from '@/context/CartContext';

interface IOrderSuccessModal extends ModalProps {}

const OrderSuccessModal = (props: IOrderSuccessModal) => {
  const modalRef = useRef<any>(null);
  const router = useRouter();
  const { dispatch } = useCart();

  function onClose(): void {
    modalRef.current.close();
    router.push('/cua-hang');

    // Reset cart
    dispatch({ type: ACTION_TYPES.CLEAR_CART });
  }

  return (
    <Modal
      {...props}
      ref={modalRef}
      title="Đặt hàng thành công!"
      description={
        <>
          Cảm ơn bạn đã đặt hàng tại{' '}
          <strong className="text-main">sonpack</strong>
        </>
      }
    >
      <ul className="mt-4 list-disc pl-5">
        <li>
          <strong>Mã đơn hàng:</strong> A124
        </li>
        <li>
          <strong>Ngày đặt hàng:</strong> 20/10/2021
        </li>
        <li>
          <strong>Phương thức thanh toán:</strong> Thanh toán khi nhận hàng
        </li>
      </ul>

      <p className="mt-4 italic md:text-base text-sm">
        Chúng tôi sẽ liên hệ với bạn qua số điện thoại để xác nhận đơn hàng. Đơn
        hàng sẽ được giao sau khi chúng tôi đã xác nhận thành công. Mọi thắc mắc
        vui lòng liên hệ hotline: 0347.366.345. Xin cảm ơn!
      </p>

      <div className="mt-4 text-right" onClick={() => onClose()}>
        <Button variant="secondary">Đóng</Button>
      </div>
    </Modal>
  );
};

export default OrderSuccessModal;
