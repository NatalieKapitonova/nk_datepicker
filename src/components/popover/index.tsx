import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode | string | number;
  size: 'sm' | 'lg';
}

export default (props: Props) => {
  const { children, open, size } = props;
  // const [open, setOpen] = useState<boolean>(props.open);

  if (open) {
    return (
      <Modal>
        <ModalContent size={size}>
          <Close onClick={() => props.onClose && props.onClose()}>
            &times;
          </Close>
          {children}
        </ModalContent>
      </Modal>
    );
  }
  return null;
};

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background-color: rgba(0, 0, 0, 0.4);
  display: block;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  text-align: center;
  margin: 15% auto;
  top: -100px;
  padding: 15px;
  padding-top: 30px;
  padding-left: ${(props: { size: 'sm' | 'lg' }) =>
    props.size === 'sm' ? '30px' : '50px'};
  padding-bottom: ${(props: { size: 'sm' | 'lg' }) =>
    props.size === 'sm' ? '15px' : '30px'};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: ${(props: { size: 'sm' | 'lg' }) =>
    props.size === 'sm' ? '300px' : '1000px'};
  position: relative;
  overflow: hidden;

  transition: width 0.3s, height 0.5s;

  animation-name: fade-in-up;
  animation-duration: 1s;

  @keyframes fade-in-up {
    from {
      transform: translate3d(0, 60px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @-webkit-keyframes fade-in-up {
    from {
      transform: translate3d(0, 60px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

const Close = styled.span`
  color: #aaa;
  float: right;
  margin-top: -22px;
  font-size: 30px;
  cursor: pointer;
`;
