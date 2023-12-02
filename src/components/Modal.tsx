import { forwardRef } from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Modal = forwardRef<HTMLDialogElement, Props>(function Modal(
  { title, children },
  ref,
) {
  return (
    <dialog ref={ref}>
      <div>{title}</div>
      {children}
    </dialog>
  );
});

export default Modal;
