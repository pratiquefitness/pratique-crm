import { Card, Row, Col } from 'antd'
import Formulario from './_Formulario'

export default function LoginView() {
  return (
    <div className="login-background">
      <div className="container d-flex flex-column justify-center h-100">
        <Row justify="center">
          <Col flex="350px">
            <Card className="shadow">
              <div className="my-4">
                <div className="text-center my-4">
                  <img src="/logo-color.svg" alt="" height="35" width="160" />
                </div>
                <Formulario />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
