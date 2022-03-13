import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-regular-svg-icons'
import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  StyledSider,
  LogoContainer,
  Logo,
  SiderNav,
  StyledFontAwesomeIcon,
} from './styles'

const SideNav = () => {
  const router = useRouter()
  const [option, setOption] = useState(router.pathname)

  useEffect(() => {
    setOption(router.pathname)
  }, [router.pathname])

  const navList = [
    {
      path: "/",
      nav: {
        icon: faArrowAltCircleUp,
        label: "HOME"
      }
    },
    {
      path: "/page1",
      nav: {
        icon: faArrowAltCircleRight,
        label: "PAGE 1"
      }
    }, 
    {
      path: "/page2",
      nav: {
        icon: faArrowAltCircleDown,
        label: "PAGE 2"
      }
    },
    {
      path: "/page3",
      nav: {
        icon: faArrowAltCircleLeft,
        label: "PAGE 3"
      }
    },
    {
      path: "/page4",
      nav: {
        icon: faArrowAltCircleLeft,
        label: "PAGE 4"
      }
    }
  ]
  const navOptions = useMemo(() => {
    return navList.map((el) => (
      <Link href={el.path} key={el.path}>
        <a>
          <SiderNav selected={el.path === option}>
            <StyledFontAwesomeIcon icon={el.nav.icon} />
            {el.nav.label}
          </SiderNav>
        </a>
      </Link>
    ));
  }, [option])

  return (
    <StyledSider breakpoint='lg' collapsedWidth='0'>
      <LogoContainer align='middle'>
        <a href='/' src='/nv-logo.png'>
          <Logo src='/nv-logo.png' />
        </a>
      </LogoContainer>
      {navOptions}
    </StyledSider>
  )
}

export default SideNav
