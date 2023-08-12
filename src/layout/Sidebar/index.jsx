import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useTheme } from '@emotion/react'
import { MenuStyled, Sider } from './styled'
import routes from '@/constants/routes'

export default function Sidebar() {
  const theme = useTheme()
  const router = useRouter()

  const { menuToggle } = useSelector(state => state.global)

  const onClickMenu = ({ item }) => {
    router.push(item.props.path)
  }

  return (
    <Sider
      background={theme.token.colorBgContainer}
      collapsedWidth={theme.siderMenuToggle.true}
      width={theme.siderMenuToggle.false}
      collapsed={menuToggle}
      trigger={null}
      collapsible
    >
      <MenuStyled
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        onClick={onClickMenu}
        items={routes}
        theme={theme.mode}
        token={theme}
      />
    </Sider>
  )
}
