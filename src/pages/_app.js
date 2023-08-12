import { ConfigProvider as AntdProvider } from 'antd'
import { Provider as ReduxProvider } from 'react-redux'
import Layout from '@/layout'
import ptBR from 'antd/locale/pt_BR'
import { getTheme } from '@/configs/theme'
import { ThemeProvider } from '@emotion/react'
import store from '@/redux/store'
import '@/styles/index.scss'

export default function App({ Component, pageProps }) {
  const theme = getTheme('red', 'light')

  return (
    <AntdProvider theme={theme} locale={ptBR}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </ThemeProvider>
    </AntdProvider>
  )
}
