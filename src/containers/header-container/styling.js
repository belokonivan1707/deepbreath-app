import styled from 'styled-components'

export const MainWrap = styled.div`
  width: 100%;
  background: ${(props) => (props.fuck ? '#balck;' : '#31394d')};
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  max-width: 1220px;
  height: 100px;
  margin: auto;
  padding: 30px 15px 30px 15px;
  transition: 0.9s;
  z-index: 2;
  box-sizing: border-box;
`

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  max-width: ${(props) => (props.fuck ? '0px' : '220px')};
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 1024px) {
    min-width: 70px;
  }
`

export const HLogo = styled.div`
  width: 55px;
  height: 50px;
  background-size: cover;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

export const WelcomeLogo = styled.div`
  width: 150px;
  height: 42px;
  margin: 0 0 -14px 15px;
  background-size: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  z-index: 1;
`

export const Box = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  z-index: 1;
`

export const A = styled.span`
  text-align: right;
  width: 10%;
  min-width: 60px;
  margin-left: 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 1px;
  color: ${(props) => (props.primary ? '#31394d;' : '#f4f7fa')};
`
