import styled from "styled-components";

export const FoundProductsBox = styled.div`
  display: flex;
  position: absolute;
  top: 90px;
  right: 20px;
  max-width: 650px;
  width: 80%;
  ${"" /* padding: 10px 0 0 15px; */}
  padding: 0 0 0 15px;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  z-index: 1;

  @media (max-width: 1124px) {
    width: 78%;
  }
  @media (max-width: 1040px) {
    width: 76%;
  }
  @media (max-width: 980px) {
    width: 74%;
  }
  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 200px;
    right: 0px;
    top: 70px;
    max-height: 150px;
    border-radius: 0 0 8px 8px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

export const FoundProducts = styled.div`
  max-width: 650px;
  width: 100%;

  @media (max-width: 768px) {
    max-height: 150px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export const Li = styled.li`
  opacity: 0.7;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: #31394d;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: #31394d2b;
  }
`;
