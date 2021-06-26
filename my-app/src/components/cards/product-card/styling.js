import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
`;

export const Image = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  border-radius: 16px 16px 0 0;
  background-size: cover;
  background-position: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 25px 0;
  padding: 15px 20px 0 20px;
  cursor: pointer;
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 15px;
`;

export const Tag = styled.div`
  display: inline-block;
  width: max-content;
  background: #fafafa;
  margin: 0 0 0 5px;
  padding: 0 5px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #3c3e43;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Like = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-size: cover;
  cursor: pointer;
`;

export const Title = styled.div`
  margin: 0 0 15px 0;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.5px;
  color: #3c3e43;
`;
export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
`;

export const Trolly = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  background-size: cover;
  cursor: pointer;
`;

export const Price = styled.div`
  font-size: 25px;
`;
