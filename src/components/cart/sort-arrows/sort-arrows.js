import ArrowDown from '../../../assets/cart-container/sort-arrow-down.svg'
import ArrowUp from '../../../assets/cart-container/sort-arrow-up.svg'
import { ArrowBox } from './styling'

const SortArrows = () => {
  return (
    <ArrowBox>
      <img src={ArrowUp} alt="arrow-up" />
      <img src={ArrowDown} alt="arrow-down" />
    </ArrowBox>
  )
}
export default SortArrows
