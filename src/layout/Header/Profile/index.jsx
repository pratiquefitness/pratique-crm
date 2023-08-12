import { Dropdown } from 'antd'
import { EditOutlined, SettingOutlined, ShopOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons'

const items = [
  {
    key: 'Edit Profile',
    label: 'Edit Profile',
    icon: <EditOutlined />
  },
  {
    key: 'Account Setting',
    label: 'Account Setting',
    icon: <SettingOutlined />
  },
  {
    key: 'Account Billing',
    label: 'Account Billing',
    icon: <ShopOutlined />
  },
  {
    key: 'Help Center',
    label: 'Help Center',
    icon: <QuestionCircleOutlined />
  },
  {
    key: 'Sign Out',
    label: 'Sign Out',
    icon: <LogoutOutlined />
  }
]

export default function ProfileMenu({ children }) {
  return (
    <Dropdown menu={{ items }} placement="bottomLeft" overlayStyle={{ width: 200 }}>
      {children}
    </Dropdown>
  )
}
