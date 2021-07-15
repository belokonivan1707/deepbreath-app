import styled from 'styled-components'

export const ArrowBox = styled.span`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  margin-left: 5px;
  opacity: 0.3;
`

export const ArrowUpTag = styled.img`
  background: ${(props) => (props.test ? 'black' : 'white')};
  ${'' /* background: black; */}
`
