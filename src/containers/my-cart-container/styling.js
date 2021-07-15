import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const Wrap = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-bottom: 30px;
  background: white;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`

export const Container = styled.div`
  box-sizing: border-box;
`

export const TableBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 25px 10px 25px;
  border-bottom: 1px solid #eaebed;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #838894;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    display: none;
  }
`
export const TableNameQuantBox = styled.div`
  display: flex;
  width: 75%;
`
export const Name = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`
export const TablePriceTotalBox = styled.div`
  display: flex;
  width: 25%;
`
export const Price = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 35%;
`
export const Total = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 35%;
`
export const Empty = styled.div`
  width: 30%;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 30px 30px 0 30px;
`

export const Title = styled.h3`
  max-width: 270px;
  font-size: 32px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.3px;
  color: #3c3e43;
`

export const BtnBox = styled.div`
  min-width: 120px;
`
export const Btn = styled.a`
  max-width: 120px;
  margin-left: 20px;
  padding: 5px 30px;
  background: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: #31394d;
`

export const TotalSumWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
`

export const TotalSumBox = styled.div`
  display: flex;
  align-items: center;
`

export const PolicyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #838894;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Text = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #838894;
`

export const TypeDelivery = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #5375cb;
  cursor: pointer;
`

export const Sum = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #838894;
`

export const TotalSum = styled.span`
  font-weight: 500;
  color: #31394d;
  font-size: 16px;
`

export const TypeDeliveryBox = styled.div`
  display: flex;
  margin-left: 20px;
`

export const ProgresBarBox = styled.div`
  width: 200px;
  margin-left: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #838894;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const TitleBar = styled.div`
  text-align: center;
  margin-bottom: 5px;
`

export const GrayLine = styled.div`
  width: 100%;
  height: 3px;
  background: #838894;
`

export const GreenLine = styled.div`
  height: 3px;
  background: #7ad398;
  animation: ${(props) => progressBar(props.y)} ${(props) => props.time}s;
  animation-fill-mode: forwards;
`

export const Box = styled.div`
  display: flex;
`

export const GrenTag = styled.p`
  letter-spacing: 0.2px;
  color: #7ad398;
`

export const Span = styled.p`
  margin-left: 5px;
`
export const FlexBox = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const progressBar = (y) => keyframes`
  0% {
      width: width: ${y}% 
  }
  100% {
      width: ${y}%
  }
`
