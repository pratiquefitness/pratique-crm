import { DashboardOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons'

const routes = [
  {
    key: 'dashboard',
    path: '/',
    label: 'Dashboard',
    icon: <DashboardOutlined />
  },
  {
    key: 'unidades',
    path: '/unidades',
    label: 'Unidades',
    icon: <HomeOutlined />
  },
  {
    key: 'configuracoes',
    path: '/configuracoes',
    label: 'Configurações',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'configuracoes-usuarios',
        path: '/usuarios',
        label: 'Usuários'
      },
      {
        key: 'configuracoes-permissoes',
        path: '/permissoes',
        label: 'Permissões'
      }
    ]
  }
]

export default routes
