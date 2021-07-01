import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
  background: ${(props) => (props.primary ? "#f4f7fa;" : "#31394d")};
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1220px;
  height: 100px;
  margin: auto;
  padding: 10px 15px 10px 15px;
  transition: 0.9s;
  z-index: 2;
  box-sizing: border-box;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  box-sizing: border-box;
`;

export const HLogo = styled.div`
  width: 75px;
  height: 75px;
  background-size: cover;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const WelcomeLogo = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 15px;
  background-size: cover;

  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

export const Nav = styled.nav`
  width: 60%;
`;

export const A = styled.span`
  text-align: right;
  width: 10%;
  min-width: 60px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 1px;
  color: ${(props) => (props.primary ? "#31394d;" : "#f4f7fa")};
`;
