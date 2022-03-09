import { Layout, Col, Select } from 'antd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Colors = {
  grey1: "#152238",
  grey2: "rgb(221,221,221)",
  grey9: "rgb(47,79,79)",
  fail1: "rgb(220,220,220)",
}

export const StyledSider = styled(Layout.Sider)`
  && {
    background-color: ${Colors.grey1};
    /* background-color: red; */
    height: 100vh;

    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
  }
`

interface LogoContainerProps {
  align: string
}

export const LogoContainer = styled(Col)<LogoContainerProps>`
  && {
    padding: 15px 0;
    /* background-color: ${Colors.fail1}; */
  }
`

export const Logo = styled.img`
  width: 41%;
`

interface SiderNavProps {
  selected: boolean
}

export const SiderNav = styled.div<SiderNavProps>`
  padding: 20px 30px;
  color: ${Colors.grey9};
  background-color: ${(props) =>
     props.selected ? Colors.grey2 : Colors.grey1}; 
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${Colors.grey2};
  }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  && {
    margin-right: 15px;
  }
`

export const StyledSelect = styled(Select)`
  && {
    width: 80%;
    margin-left: 20px;
    margin-top: auto;
    margin-bottom: 20px;

    & .ant-select-selector {
      border-radius: 5px;
    }
  }
`
