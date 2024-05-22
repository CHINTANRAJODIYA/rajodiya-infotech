import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function home(){
    return(
        <>
        <Container className='w-75'>
        <Row>
          <Col  xxl={6} xl={6} lg={6} md={6} className='order-md-1 order-2'>
            <Row>
              <Col> <div className='fw-medium Home-page-title'>It's time to upscale your <div className='text-online'>online business</div></div></Col>
            </Row>
            <Row>
              <Col xl={11}><div className='text-secondary Home-page-lines'>Tell us about your needs, we would brew some exceptional web solutions for you.</div></Col>
            </Row>
            <Row>
              <Col>
                <div className='Home-page-buttons'>
                  <Button variant="primary" className='fw-medium me-5 First-button'>Get started &nbsp;&nbsp;<FaArrowRight></FaArrowRight></Button>
                  <Button className='fw-medium Second-button d-none d-xl-inline-block'>Learn more</Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6}  className='mt-5 order-md-2 order-1'>
            <Row>
              <Col>
                <Image src='https://rajodiya.com/svg/illustrations/illustration-1.svg' fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='w-75 margintop-120'>
        <Row>
          <Col  xl={6} lg={6} md={12}>
            <Row>
              <Col>
                <div className='twenty mt-2'>
                  20+
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='Home-page-bottom-lines mt-2'>
                  We use high end technology to offer tech solutions with the help of our expert designers and developers.
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={6} lg={6} md={12}>
            <Row>
              <Col className='fw-medium Home-page-bottom-title'>
                Successfuly completed projects & ideas
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className='w-75 margintop-80'>
        <Row >
          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className='card-bg-color1 border-0'>
              <Card.Img className='mt-5' src="https://rajodiya.com/svg/illustrations/design-team.svg" height={200}  />
              <Card.Body className='mt-5 ms-3 me-3'>
                <Card.Title className='card-title'>Proficient design services</Card.Title>
                <Card.Text className='mb-4 mt-3 card-lines opacity6'>
                We house talented web designers that would offer great layout to your rather dull websites.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className='card2-margin-top card-bg-color2 border-0'>
              <Card.Img className='mt-5' src="https://rajodiya.com/svg/illustrations/development.svg" height={200} />
              <Card.Body className='mt-5 ms-3 me-3'>
                <Card.Title className='card-title'>Prompt development</Card.Title>
                <Card.Text className='mb-4 mt-3 card-lines opacity6'>
                Our highly skilled developers from varied fields would build web apps.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} lg={4} md={4} sm={12}>
            <Card className='card3-margin-top card-bg-color3 border-0'>
              <Card.Img className='mt-5' src="https://rajodiya.com/svg/illustrations/maintenance.svg" height={200} />
              <Card.Body className='mt-5 ms-3 me-3'>
                <Card.Title className='card-title'>We help you with Upgrade</Card.Title>
                <Card.Text className='mb-4 mt-3 card-lines opacity6'>
                We would help you maintain and revamp your website according to changing times.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default home;