import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  color: ${(props) => (props.primary ? "#31394d;" : " #f4f7fa")};
  cursor: pointer;
  transition: 0.3s;
`;

export const Arrow = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  background-size: cover;
  cursor: pointer;

  &:background {
    color: green;
    background: green;
  }
`;
