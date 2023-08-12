import { Button, Layout } from 'antd'
import styled from '@emotion/styled'
import React from 'react'

export const HeaderContainer = styled(Layout.Header)(({ theme }) => ({
  backgroundColor: theme.token.colorPrimary,
  height: theme.headerHeight,
  padding: 0,
  display: 'flex'
}))

export const Logo = styled.div(({ theme, menuToggle }) => ({
  width: theme.siderMenuToggle[menuToggle],
  height: theme.headerHeight,
  padding: '17px 16px',
  lineHeight: '24px',
  fontWeight: 800,
  fontSize: 24
}))

export const Icon = styled.div(() => ({
  fontSize: 16
}))

export const Separator = styled.div(({ theme }) => ({
  lineHeight: `${theme.headerHeight}px`
}))

export const HeaderButtons = styled.div(({ theme, menuToggle }) => ({
  width: `calc(100% - ${theme.siderMenuToggle[menuToggle]}px)`,
  display: 'flex',
  justifyContent: 'space-between'
}))

const AntButton = React.forwardRef((props, ref) => (
  <Button type="text" style={{ color: 'white' }} ref={ref} {...props} />
))

export const HeaderButton = styled(AntButton)(({ theme }) => ({
  width: theme.headerHeight,
  height: theme.headerHeight,
  borderRadius: 0,
  fontSize: 16,
  color: theme.token.colorBgContainer,
  '&:hover': {
    background: 'none',
    color: theme.token.colorBgContainer
  },
  '&:focus': {
    background: 'none',
    color: theme.token.colorBgContainer
  },
  '&:hover span': {
    color: theme.token.colorBgContainer
  },
  '&:active span': {
    color: theme.token.colorBgContainer
  }
}))
