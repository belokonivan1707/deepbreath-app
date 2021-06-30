import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
`;
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1220px;
  height: 100px;
  margin: auto;
  margin-bottom: 30px;
  padding: 10px 10px 10px 10px;
  background: ${(props) => (props.primary ? "#31394d;" : "")};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: 0.3s;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const HLogo = styled.div`
  width: 75px;
  height: 75px;

  background-size: cover;
`;

export const WelcomeLogo = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 15px;
  background-size: cover;
`;
