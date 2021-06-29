import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
`;

export const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 80px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 -140px;
  padding: 90px 20px 180px 20px;
  background: #f4f7fa;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 20%);
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
  box-sizing: border-box;
`;

export const MakersTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding-top: 40px;
`;

export const TitleSvg = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
`;
