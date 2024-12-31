import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Modal, { ModalProps } from '@/components/ui/Modal';

interface IOrderSuccessModal extends ModalProps {}

const OrderSuccessModal = (props: IOrderSuccessModal) => {
  const modalRef = useRef<any>(null);

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

      <div
        className="mt-4 text-right"
        onClick={() => {
          modalRef.current.close();
        }}
      >
        <Button variant="secondary">Đóng</Button>
      </div>
    </Modal>
  );
};

export default OrderSuccessModal;
