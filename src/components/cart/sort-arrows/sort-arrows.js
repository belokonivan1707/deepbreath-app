import { useEffect, useState } from 'react'
import ArrowDown from '../../../assets/cart-container/sort-arrow-down.svg'
import ArrowUp from '../../../assets/cart-container/sort-arrow-up.svg'
import { ArrowBox, ArrowUpTag } from './styling'

const SortArrows = ({ arrowState }) => {
  // console.log(arrowState)
  const [test, setTest] = useState(null)

  useEffect(() => {
    if (arrowState === 'ascending') {
      setTest(true)
      // console.log(test)
    } else {
      // console.log('else')
      setTest(null)
    }
  }, [arrowState, test])

  return (
    <ArrowBox>
      <ArrowUpTag src={ArrowUp} alt="arrow-up" test={test} />
      <img src={ArrowDown} alt="arrow-down" />
    </ArrowBox>
  )
}
export default SortArrows
