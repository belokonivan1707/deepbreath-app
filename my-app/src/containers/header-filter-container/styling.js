import styled from "styled-components";
import HeaderBackgroundSvg from "../../assets/header/header-background.svg";
import HeaderBottomPng from "../../assets/header/wave.png";

export const MainWrap = styled.div`
  width: 100%;
  margin-bottom: 120px;
  background: #31394d;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 13px;
    position: absolute;
    bottom: -12px;
    left: 0;
    background: url(${HeaderBottomPng});
    z-index: 1;
  }
`;

export const MainContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: auto;

  &:before {
    content: "";
    position: absolute;
    top: -140px;
    left: 0;
    max-width: 708px;
    width: 100%;
    max-height: 550px;
    height: 100%;
    background: url(${HeaderBackgroundSvg});
    z-index: 0;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
`;
