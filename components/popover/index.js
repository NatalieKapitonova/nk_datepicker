import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
export default (props) => {
  const {children, open, size} = props;
  if (open) {
    return /* @__PURE__ */ React.createElement(Modal, null, /* @__PURE__ */ React.createElement(ModalContent, {
      size
    }, /* @__PURE__ */ React.createElement(Close, {
      onClick: () => props.onClose && props.onClose()
    }, "×"), children));
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
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
`;
const ModalContent = styled.div`
  background-color: #fefefe;
  text-align: center;
  margin: 10% auto;
  top: -100px;
  padding: 15px;
  padding-top: 30px;
  padding-left: ${(props) => props.size === "sm" ? "30px" : "50px"};
  margin-bottom: ${(props) => props.size === "sm" ? "15px" : "50px"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: ${(props) => props.size === "sm" ? "300px" : "1000px"};
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
