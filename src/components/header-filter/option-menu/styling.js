import styled from "styled-components";

export const OptionMenu = styled.div`
  position: absolute;
  left: 0px;
  top: 90px;
  border-radius: 6px;
  width: 130px;
  background: #fff;
  padding: 5px 0;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: #31394d;
  cursor: pointer;
  box-sizing: border-box;
`;

export const List = styled.p`
  width: 100%;
  opacity: 0.7;
  padding: 0 15px;
  box-sizing: border-box;

  &:hover {
    opacity: 1;
    background: #31394d2b;
  }
`;
