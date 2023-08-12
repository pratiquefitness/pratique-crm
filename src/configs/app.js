import packageJson from '../../package.json'

const app = {
  title: 'CRM Pratique Fitness',
  author: packageJson.author || '',
  version: packageJson.version || '',
  logo: '/logo.svg',
  icon: '/logo-min.svg'
}

export default app
