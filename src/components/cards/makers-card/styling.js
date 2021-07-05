import styled from "styled-components";

export const Wrap = styled.div`
  margin-bottom: 20px;
  background: #f4f7fa;
  padding: 10px 10px 0 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const ImageBox = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Image = styled.div`
  max-width: 115px;
  width: 100%;
  height: 115px;
  margin-left: 10px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;

  &:first-child {
    margin-left: 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 350px) {
    display: none;
  }
`;

export const Box = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #3c3e43;
`;

export const TagBox = styled.div`
  max-width: 175px;
  width: 100%;
`;

export const Tag = styled.span`
  margin-left: 5px;
  font-weight: 400;
  font-size: 12px;
  line-heght: 14px;
  color: #939d98;

  &:first-child {
    margin-left: 0;
  }
`;

export const StarsBox = styled.div`
  display: flex;
`;
