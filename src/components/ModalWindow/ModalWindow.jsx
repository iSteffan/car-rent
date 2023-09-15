import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalContainer,
  CloseButton,
  CloseIcon,
} from './ModalWindow.styled';

export const ModalWindow = ({ data, handlerCloseModal }) => {
  const modalRoot = document.querySelector('#modal-root');

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) handlerCloseModal();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseButton onClick={handlerCloseModal}>
          <CloseIcon />
        </CloseButton>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
