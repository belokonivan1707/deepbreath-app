import styled from 'styled-components'

export const Wrap = styled.div`
  padding: 25px;
  border-bottom: 1px solid #eaebed;
  box-sizing: border-box;
`

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const BoxImageQuantity = styled.div`
  display: flex;
  width: 75%;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 15px;
  }
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`
export const BoxQuantity = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #31394d;

  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 40px;
  border: 1px solid rgba(49, 57, 77, 0.2);
  border-radius: 6px;
`

export const Decrease = styled.div`
  width: 33%;
  text-align: center;
  cursor: pointer;
`

export const ShowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34%;
  height: 100%;
  border-left: 1px solid rgba(49, 57, 77, 0.2);
  border-right: 1px solid rgba(49, 57, 77, 0.2);
`
export const Show = styled.div``

export const Increase = styled.div`
  width: 33%;
  text-align: center;
  cursor: pointer;
`

export const Image = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

export const NameBox = styled.div`
  margin-left: 10px;
`
export const Name = styled.div`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: #31394d;
`
export const MakerId = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #5375cb;
`

export const BoxPriceDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const BoxPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 32px;
    max-width: 230px;
    padding: 0 10px;
    background: #f8f8f8;
    border-radius: 6px;
  }
`
export const BoxBtn = styled.div`
  width: 30%;
  text-align: end;
  display: flex;
  justify-content: flex-end;
`
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 6px;
  border: 2px solid rgba(49, 57, 77, 0.2);
`
export const Delete = styled.img`
  background-size: cover;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const P = styled.p`
  width: 50%;
  min-width: 50px;
  text-align: end;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  color: #31394d;

  @media (max-width: 1024px) {
    display: flex;
    width: 100px;
    font-size: 12px;
    color: #838894;
  }
`
export const Span = styled.span`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`
export const Text = styled.span`
  @media (max-width: 1024px) {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #31394d;
  }
`
