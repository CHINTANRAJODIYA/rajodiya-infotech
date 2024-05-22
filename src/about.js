import { BiSolidCheckboxChecked } from "react-icons/bi";
import { LuPenLine } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoCallOutline } from "react-icons/io5";
import { FaSmile, FaCog } from "react-icons/fa";
import { FaPersonSkiing } from "react-icons/fa6";
import Image from 'react-bootstrap/Image';


function About() {
    return (
        <>
            <div className='about-main-image'>
                <Container className='w-75'>
                    <Row>
                        <Col lg={8}>
                            <div className='about-title margintop-200 fw-medium'>
                                We offer comprehensive web solutions for all your business needs with utmost ease and perfection.
                            </div>
                        </Col>
                        <Row>
                            <Col lg={8}>
                                <div className='about-lines mt-5'>
                                    Our only aim is to continue offering proficient web services by maintaining our mark of excellence throughout.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="about-contact-btn">
                                <Button variant="warning" className='about-contact-btn fw-medium mt-5'><LuPenLine></LuPenLine> &nbsp;&nbsp;Contact us</Button>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
            <Container className='w-75 margintop-80'>
                <Row>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col>
                                <div className='our-vision-btn'>
                                    Our vision
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='about-vision-left fw-medium mt-4'>
                                    We aim to bring disruptive web innovations that remains accessible to all. Our only goal is to satisfy our clientele cohort by becoming their one stop destination for all IT solutions.
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='about-vision-right mt-5'>
                            At Rajodiya Infotech, we diligently work towards bringing you effective IT solutions that could transform the way your business functions. We won't confuse you with the complexities of web services. Instead, our complete efforts are dedicated towards bringing you web solutions in the most simplified way possible.<br></br><br></br>From Web development to Web maintenance, we are dedicated towards easing your work seamlessly.
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='margintop-120 w-75'>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className='why-choose-btn'>
                                    Why choose us
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='whychoose-left fw-medium mt-4'>
                                    We promise to deliver the requisite web services with utmost proficiency and simplicity. We distinct ourselves from our competitors mainly on these 4 parameters.
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className='mt-4 text-manage'>
                                    <BiSolidCheckboxChecked className='check-icon me-3'></BiSolidCheckboxChecked>Affordable pricing
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='mt-2 text-manage'>
                                    <BiSolidCheckboxChecked className='check-icon me-3'></BiSolidCheckboxChecked>Customised solutions
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='mt-2 text-manage'>
                                    <BiSolidCheckboxChecked className='check-icon me-3'></BiSolidCheckboxChecked>Reliable Services
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-5">
                                <div className='mt-2 text-manage'>
                                    <BiSolidCheckboxChecked className='check-icon me-3'></BiSolidCheckboxChecked>Complete assistance and support
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                <div className='card card-bg-warning'>
                                    <div className="about-box-number fw-medium">1300+
                                        <div className="about-box-line fw-medium">Customers</div>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className="about-box-number blue fw-medium">4200+
                                        <div className="about-box-line text-warning fw-medium">Download</div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                <div className='card'>
                                    <div className="about-box-number blue fw-medium">99%
                                        <div className="about-box-line fw-medium text-primary">Happy Clients</div>
                                    </div>
                                </div>
                                <div className='card card-bg-primary'>
                                    <div className="about-box-number fw-medium">460+
                                        <div className="about-box-line fw-medium">Reviews</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="w-75">
                        <div className="contactus-box">
                            <Row>
                                <Col lg={8} md={7} sm={12}><div className="box-title fw-medium text-md-center">Looking for customised web solutions?</div>
                                    <Row>
                                        <Col lg={10} md={12} sm={12} className=" text-md-center">
                                            <div className="box-lines mt-3">
                                                Connect with us and discuss your idea. We would conceptualize that idea through our web services.
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="text-center">
                                    <Button variant="warning" className="contact-box-btn fw-medium mt-4"><IoCallOutline></IoCallOutline>&nbsp;&nbsp; &nbsp;Contact us</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="CMS-ERP-BG margintop-150">
                <Container className="w-75">
                    <Row>
                        <Col className="text-centerr">
                            <Row>
                                <Col className="mt-5">
                                    <div className="about-store-btn margintop-120">About Store</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="cms-title mt-4 fw-medium">
                                        CMS, ERP and Web Apps
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={8}>
                                    <div className="cms-lines mt-5">
                                        Creating and distributing creative web solutions for the productivity and growth of various businesses. We aim at offering high end prolific tech products at competitive rates, making it accessible for all.
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={2} lg={3} md={4} sm={4}>
                                    <div className="cms-box margintop-80">
                                        <div className="cms-box-count">35 +
                                            <div className="cms-box-line">Products</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={4}>
                                    <div className="cms-box margintop-80">
                                        <div className="cms-box-count">4200 +
                                            <div className="cms-box-line">Purchase</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={4}>
                                    <div className="cms-box margintop-80">
                                        <div className="cms-box-count">99 %
                                            <div className="cms-box-line">Satisfaction</div>
                                        </div>
                                     </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="w-75 margintop-120">
                <Row>
                    <Col lg={6}>
                    <Image src='https://rajodiya.com/svg/illustrations/illustration-9.svg' fluid /></Col>
                    <Col lg={1}></Col>
                    <Col className="text-centerr">
                        <Row>
                            <Col lg={12}><div className="results-title fw-medium">We deliver the high quality end results you need</div></Col>
                        </Row>
                        <Row>
                            <Col><div className="results-lines mt-4">We adhere to our fundamentals that helps us to deliver best services, consistently.</div></Col>
                        </Row>
                        <Row>
                            <Col><div className="icon-shape1  mt-5 me-3"><FaSmile></FaSmile></div>
                                <div className="fw-medium mt-5">Client Satisfaction</div></Col>
                        </Row>
                        <Row>
                            <Col><div className="icon-shape2 mt-3 me-3"><FaPersonSkiing></FaPersonSkiing></div>
                                <div className="fw-medium mt-3">Prompt servicing</div></Col>
                        </Row>
                        <Row>
                            <Col><div className="icon-shape3 mt-3 me-3"><FaCog></FaCog></div>
                                <div className="fw-medium mt-3">Easily headphones</div></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;