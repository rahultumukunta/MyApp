import SideNav from '../src/components/SideNav';
import type { AppProps } from 'next/app'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import PrimaryHeader from '@/src/components/Header';
import Content from '@/src/components/content';
import ListContainer from '@/src/containers/listContainer';
import ListView from '@/src/containers/listView';

const theme = {}

const StyledLayout = styled(Layout)`
  && {
    height: 100vh;
    /* background-color: blue; */
    overflow: auto;
  }
  `
const StyledContent = styled(Layout.Content)`
  && {
    overflow-y: auto ;
    padding-left: 30px;
    padding-top: 30px;
    height: 100vh;
    background-color: #D3D3D3;
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
          <SideNav></SideNav>
        <Layout>
        <PrimaryHeader/>
            <StyledContent>
              <Component {...pageProps} />
              {/* <Content/> */}
              {/* <ListContainer/> */}
              {/* <ListView/> */}
            </StyledContent>
        </Layout >
      </StyledLayout>
    </ThemeProvider>
  )
}