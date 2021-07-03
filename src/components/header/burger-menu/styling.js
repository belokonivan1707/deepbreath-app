import styled from "styled-components";

export const BurgerBox = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Span = styled.span`
  display: block;
  width: 38px;
  height: 4px;
  background: #f4f7fa;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;
