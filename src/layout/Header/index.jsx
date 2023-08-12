import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, BellOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setMenuToggle } from '@/redux/slices/global'
import { HeaderButton, HeaderButtons, HeaderContainer, Logo, Separator } from './styled'
import { app } from '@/configs'
import Profile from './Profile'

export default function Header() {
  const dispatch = useDispatch()
  const { menuToggle } = useSelector(state => state.global)

  const onMenuToggle = () => {
    dispatch(setMenuToggle(!menuToggle))
  }

  return (
    <HeaderContainer>
      <Logo menuToggle={menuToggle}>
        {menuToggle ? (
          <img src={app.icon} width="30" height="30" alt="Logo" />
        ) : (
          <img src={app.logo} width="144" height="30" alt="Icon" />
        )}
      </Logo>
      <HeaderButtons menuToggle={menuToggle}>
        <Separator>
          <HeaderButton icon={menuToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={onMenuToggle} />
        </Separator>
        <Separator>
          <HeaderButton icon={<BellOutlined />} />
          <HeaderButton icon={<SettingOutlined />} />
          <Profile>
            <HeaderButton>
              <Avatar size={32} icon={<UserOutlined />} style={{ backgroundColor: '#87d068', marginTop: -4 }} />
            </HeaderButton>
          </Profile>
        </Separator>
      </HeaderButtons>
    </HeaderContainer>
  )
}
