import type { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'dialog'> & {
  dialogRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
};

const Modal = ({ dialogRef, children }: Props) => (
  <dialog ref={dialogRef}>{children}</dialog>
);

export default Modal;
