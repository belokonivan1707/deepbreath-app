import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import HSvg from '../../assets/header/h.svg'
import HWhiteSvg from '../../assets/header/h-white.svg'
import WelcomeWhiteSvg from '../../assets/header/welcome-white.svg'
import { MainWrap, Wrap, LogoBox, HLogo, WelcomeLogo, Nav, Box, A } from './styling'
import HeaderOtions from '../../components/header/header-options/header-options'
import DropdownMenu from '../../components/header/dropdown-menu/dropdown-menu'
import BurgerMenu from '../../components/header/burger-menu/burger-menu'
import HeaderMenuLinks from '../../components/header/header-links/header-menu-links'

const Header = ({ primary }) => {
  const [hidenMenuExplore, setHidenMenuExplore] = useState(null)
  const [hidenMenuMakers, setHidenMenuMakers] = useState(null)
  const [openedHeaderMenuLinks, updateOpenedHeaderMenuLinks] = useState(null)
  const [menuSwith, setMenuSwitch] = useState()
  
  const menuExplore = useSelector((state) => state.headerState.menuExplore)
  const makersMenu = useSelector((state) => state.headerState.menuMakers)

  const showMenu = useCallback(
    (id) => {
      if (id === 'EXPLORE') {
        setHidenMenuMakers(null)
        setMenuSwitch(menuExplore)
        setHidenMenuExplore((prev) => !prev)
      }

      if (id === 'FOR FOOD MAKERS') {
        setHidenMenuExplore(null)
        setMenuSwitch(makersMenu)
        setHidenMenuMakers((prev) => !prev)
      }
    },

    [menuExplore, makersMenu]
  )

  useEffect(() => {
    if (!hidenMenuExplore && !hidenMenuMakers) {
      updateOpenedHeaderMenuLinks(null)
    }
  }, [hidenMenuExplore, hidenMenuMakers])

  const burgerMenu = () => {
    console.log('fuck')
  }

  return (
    <MainWrap fuck={primary}>
      <Wrap>
        <BurgerMenu handleClick={burgerMenu} />
        <LogoBox>
          <Link to="/">
            <HLogo style={primary ? { backgroundImage: `url(${HSvg})` } : { backgroundImage: `url(${HWhiteSvg})` }} />
          </Link>
          {primary ? null : (
            <Link to="/">
              <WelcomeLogo style={{ backgroundImage: `url(${WelcomeWhiteSvg})` }} />
            </Link>
          )}
        </LogoBox>
        <Box>
          <HeaderMenuLinks
            primary={primary}
            title={'EXPLORE'}
            isOpen={openedHeaderMenuLinks === 'EXPLORE'}
            setOpened={updateOpenedHeaderMenuLinks}
            handleClick={showMenu}
          />
          <HeaderMenuLinks
            primary={primary}
            title={'FOR FOOD MAKERS'}
            isOpen={openedHeaderMenuLinks === 'FOR FOOD MAKERS'}
            setOpened={updateOpenedHeaderMenuLinks}
            handleClick={showMenu}
          />
        </Box>
        <Nav>
          <HeaderOtions primary={primary} />
        </Nav>
        {primary ? <A primary>SIGN IN</A> : <A>SIGN IN</A>}
      </Wrap>
      <div>
        {hidenMenuExplore ? (
          <DropdownMenu onClickOutside={() => setHidenMenuExplore(null)} props={menuSwith} primary={primary} />
        ) : null}
      </div>
      <div>
        {hidenMenuMakers ? (
          <DropdownMenu onClickOutside={() => setHidenMenuMakers(null)} props={menuSwith} primary={primary} />
        ) : null}
      </div>
    </MainWrap>
  )
}

export default Header
