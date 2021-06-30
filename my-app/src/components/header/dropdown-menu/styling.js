import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const DropDownWrap = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  background: ${(props) => (props.primary ? "#31394d;" : "white")};
  border-top: ${(props) => (props.primary ? "1px solid #5a6070;" : "none")};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
`;
export const DropItemWrap = styled.div`
  display: flex;
  flex: flex-start;
  width: 1320px;
  top: 101px;
  margin: 0 auto;
  padding: 40px 5px 10px 5px;

  box-sizing: border-box;
`;

export const DropDownItem = styled.div`
  width: calc(20% - 0px);

  &:not(:first-child) {
    margin-left: 15px;
  }

  &:hover p {
    opacity: 1;
  }
`;

export const DropImage = styled.div`
  width: 100%;
  height: 140px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 10px;

  &:hover {
    filter: opacity(75%);
  }
`;

export const P = styled.p`
  opacity: 0.7;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
