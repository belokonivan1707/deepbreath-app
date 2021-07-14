import { Ul, Li, Arrow } from './styling'
import ArrowDown from '../../../assets/header/down-arrow.svg'
import ArrowDownWhite from '../../../assets/header/down-arrow-white.svg'
import ArrowUp from '../../../assets/header/up-arrow.svg'
import ArrowUpWhite from '../../../assets/header/up-arrow-white.svg'

const HeaderMenuLinks = ({ title, isOpen, setOpened, handleClick, primary }) => {
  const handler = () => {
    if (isOpen) {
      setOpened(null)
    } else {
      setOpened(title)
    }
    handleClick(title)
  }
  return (
    <Ul>
      <Li onClick={handler} fuck={primary}>
        {title}
        {isOpen ? (
          <Arrow
            style={primary ? { backgroundImage: `url(${ArrowUp})` } : { backgroundImage: `url(${ArrowUpWhite})` }}
          />
        ) : (
          <Arrow
            style={primary ? { backgroundImage: `url(${ArrowDown})` } : { backgroundImage: `url(${ArrowDownWhite})` }}
          />
        )}
      </Li>
    </Ul>
  )
}

export default HeaderMenuLinks
