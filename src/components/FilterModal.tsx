import Modal from '@/components/Modal';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof Modal>;

const FilterModal = ({ dialogRef, children }: Props) => {
  const handleClose = () => {
    dialogRef.current?.close();
  };

  return (
    <Modal dialogRef={dialogRef}>
      {children}
      <button type="button" onClick={handleClose} />
    </Modal>
  );
};

export default FilterModal;
