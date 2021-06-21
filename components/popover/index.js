import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {useWindowDimensions} from "../calendar/utils/index.js";
export default (props) => {
  const {children, open, size = "sm"} = props;
  const {mobile} = useWindowDimensions();
  if (open) {
    return /* @__PURE__ */ React.createElement(Modal, null, /* @__PURE__ */ React.createElement(ModalContent, {
      size,
      mobile
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
const getWidth = (size, mobile) => {
  if (size === "sm") {
    return "250px";
  }
  if (mobile) {
    return "100%";
  }
  return "1000px";
};
const getPaddingLeft = (size, mobile) => {
  if (size === "sm") {
    return "30px";
  }
  if (mobile) {
    return "10px";
  }
  return "50px";
};
const getPaddingRight = (size, mobile) => {
  if (size === "sm") {
    return "30px";
  }
  if (mobile) {
    return "10px";
  }
  return "50px";
};
const ModalContent = styled.div`
  background-color: #fefefe;
  text-align: center;
  margin: ${(props) => props.mobile && props.size === "lg" ? "0" : "10% auto"};
  top: ${(props) => props.mobile ? "0" : "-100px"};
  padding-bottom: ${(props) => props.mobile ? "15px" : "30px"};
  padding-top: 30px;
  padding-left: ${(props) => getPaddingLeft(props.size, props.mobile)};
  padding-right: ${(props) => getPaddingRight(props.size, props.mobile)};
  margin-bottom: ${(props) => props.size === "sm" ? "15px" : "50px"};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: ${(props) => getWidth(props.size, props.mobile)};
  position: relative;
  overflow: hidden;

  transition: width 0.3s, height 0.5s;

  animation-name: fade-in-up;
  animation-duration: 0.8s;

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
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;
`;
