import { createRef, useContext, useEffect, useState } from 'react'
import { Row, Col, Form, Input, Button, Divider, message } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { AuthContext } from '@/contexts/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { setAuthenticated } from '@/redux/slices/login'

export default function Formulario() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.login)
  const { signIn } = useContext(AuthContext)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [form] = Form.useForm()

  const autoFocus = createRef()

  useEffect(() => {
    autoFocus.current.focus()
  }, [])

  function onSave() {
    dispatch(setAuthenticated(true))
    // setSubmitLoading(true)
    // form
    //   .validateFields()
    //   .then(async values => {
    //     const login = await signIn(values)
    //     if (!login) {
    //       setSubmitLoading(false)
    //       message.error('Usuário ou senha invalidos!')
    //     }
    //   })
    //   .catch(info => {
    //     console.warn(info)
    //     message.error('Por favor verifique as regras de preenchimento.')
    //   })
  }

  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={20} lg={20}>
        <Form layout="vertical" name="login-form" form={form}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: 'Informe o seu e-mail.'
              }
            ]}
          >
            <Input prefix={<MailOutlined className="text-primary" />} ref={autoFocus} />
          </Form.Item>
          <Form.Item
            name="senha"
            label="Senha"
            rules={[
              {
                required: true,
                message: 'Informe sua senha.'
              }
            ]}
          >
            <Input.Password prefix={<LockOutlined className="text-primary" />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={submitLoading || loading} onClick={() => onSave()}>
              Entrar
            </Button>
          </Form.Item>
          <Button block>
            <Link href="/cadastro">Esqueceu sua senha?</Link>
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
