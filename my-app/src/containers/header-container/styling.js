import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1220px;
  height: 100px;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px 10px 10px 10px;
  background: ${(props) => (props.primary ? "#31394d" : "none;")};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
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

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Arrow = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  background-size: cover;
  cursor: pointer;
  transition: 0.3s;
`;
