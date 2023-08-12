import { Layout, Menu } from 'antd'
import styled from '@emotion/styled'

export const MenuStyled = styled(Menu)(() => ({
  borderInlineEnd: '0 !important',
  '.ant-menu-item, .ant-menu-submenu-title': {
    height: 42
  }
}))

export const Sider = styled(Layout.Sider)(({ background }) => ({
  borderRight: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 4px -1px',
  background: `${background} !important`
}))
