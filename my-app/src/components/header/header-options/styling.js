import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background-size: cover;
  cursor: pointer;
`;

export const Mail = styled.li`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background-size: cover;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
