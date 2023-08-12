import { Layout as AntdLayout } from 'antd'
import { AppLayout } from './styled'
import { useSelector } from 'react-redux'
import { app } from '@/configs'
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body'
import LoginView from '@/pages/login'

const { Footer } = AntdLayout

export default function Layout({ children }) {
  const { authenticated } = useSelector(state => state.login)
  return !authenticated ? (
    <LoginView />
  ) : (
    <AppLayout>
      <Header />
      <AntdLayout>
        <Sidebar />
        <AntdLayout>
          <Body>{children}</Body>
          <Footer style={{ textAlign: 'center' }}>
            {app.title} © v{app.version} Created by {app.author}
          </Footer>
        </AntdLayout>
      </AntdLayout>
    </AppLayout>
  )
}
