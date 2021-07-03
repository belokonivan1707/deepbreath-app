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
    height: 12px;
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
  flex-direction: column;
  height: 450px;
  padding: 80px 0 140px 0;
  box-sizing: border-box;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;


`;

export const Title = styled.h1`
  text-align: center;
  padding: 0 15px;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0.5px;
  color: #fff;
  @media (max-width: 1180px) {
    font-size: 45px;
  }
  @media (max-width: 1124px) {
    font-size: 35px;
  }
  @media (max-width: 692px) {
    font-size: 28px;
  }
`;
export const Description = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #fff;

  @media (max-width: 892px) {
    font-size: 22px;
  }
`;

export const Red = styled.span`
  color: #eb5769;
`;
