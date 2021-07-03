import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const DropDownWrap = styled.div`
  position: absolute;
  width: 100%;
  z-index: 10;
  background: ${(props) => (props.fuck ? "#f4f7fa;" : "#31394d;")};
  box-shadow: ${(props) => (props.fuck ? "0 3px 5px -3px hsl(0deg 0% 100% / 8%)" : "0 3px 3px rgb(49 57 77 / 5%)")};
`;

export const DropItemWrap = styled.div`
  display: flex;
  flex: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1320px;
  top: 101px;
  margin: 0 auto;
  padding: 40px 5px 20px 5px;
  border-top: ${(props) => (props.fuck ? "none" : "1px solid #5a6070;")};
  color: ${(props) => (props.fuck ? "#31394d" : "#fff")};
  box-sizing: border-box;
`;

export const DropDownItem = styled.div`
  width: calc(18% - 0px);
  min-width: 235px;
  margin-bottom: 10px;
  padding: 0 10px;
  box-siaing: border-box;

  &:hover p {
    opacity: 1;
  }
`;

export const DropImage = styled.div`
  width: 100%;
  min-width: 180px;
  height: 140px;
  margin-bottom: 15px;
  background-size: cover;
  border-radius: 10px;

  &:hover {
    filter: opacity(75%);
  }
`;

export const P = styled.p`
  opacity: 0.8;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(props) => (props.fuck ? "#31394d;" : "white;")};
`;
