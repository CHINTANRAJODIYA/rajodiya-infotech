import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {FaInstagram,FaLinkedin,FaFacebook} from "react-icons/fa";

function footer() {
    return (
        <>
            <div className="footer-bg">
                <Container className='w-75 pt-5'>
                    <Row>
                        <Col lg={7}>
                            <Row>
                                <Col><div className='footer-title fw-medium'>Brilliant solutions for your business</div></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='footer-line'>We build modern web tools to help you jump-start your daily business work.</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='align-right'>
                            <Button variant="primary" className='footer-btn fw-medium mt-3'>Check now</Button>
                        </Col>
                    </Row>
                    <hr className='hr-style mb-5 mt-5' size={5}></hr>
                    <Row>
                        <Col lg={4} gap={4}>
                            <Row>
                                <Col>
                                {/* <Image src='https://workdo.io/wp-content/uploads/2024/04/workdo-logo.png' height={45}/> */}
                                <img src={require('./image/rajodiya-logo.png')} height={45} alt='' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className='footer-sec-line fw-medium mt-4'>
                                Modernise your business with tech savvy IT solutions. Our diversified service comprises of Web, Cloud and CMS services.</div></Col>
                            </Row>
                            <Row>
                                <Col className='mt-4'>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/elite.svg' width={30}/>
                                <Image  className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/was_featured.svg' width={30}/>
                                <Image   className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/had_featured_item.svg' height={34} width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/had_free_file.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/author_level_8.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/month-20.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/exclusive.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/community_health.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/was_weekly_top_seller.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/had_trending_item.svg' width={30}/>
                                <Image className='footer-img' src='https://workdo.io/wp-content/themes/storefront-child/assets/images/icons/veteran_level_4.svg' width={30}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className='footer-icon'>
                                <FaLinkedin></FaLinkedin>
                                </div>
                                <div className='footer-icon'>
                                <FaFacebook></FaFacebook>
                                </div>
                                <div className='footer-icon'>
                                <FaInstagram></FaInstagram>
                                </div>
                                </Col>  
                            </Row>
                        </Col>
                        <Col xl={{ span: 4, offset: 4 }}>
                            <Row>
                                <Col>
                                    <h6 className='mb-4 text-white'>Company</h6>
                                    <ul className='footer-list-unstyle'>
                                        <li className='mb-2'> <a href="#">About</a></li>
                                        <li className='mb-2'>  <a href="#">Testimonials</a></li>
                                        <li className='mb-2'>  <a href="#">Service </a></li>
                                        <li className='mb-2'>  <a href="#">Contact</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                <h6 className='mb-4 text-white'>Resources</h6>
                                    <ul className='footer-list-unstyle'>
                                        <li className='mb-2'><a href="#">Helpdesk</a></li>
                                        <li className='mb-2'><a href="#">Support Policy</a></li>
                                        <li className='mb-2'><a href="#">Refund Policy</a></li>
                                        <li className='mb-2'><a href="#">Licences</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr className='hr-style mt-5 mb-4' size={5}></hr>
                    <Row>
                        <Col>
                            <div className='footer-last mb-4'>
                        © 2021 <a className='font-color' href='https://rajodiya.com/'> Rajodiya Infotech.</a> All rights reserved </div>
                        </Col> 
                        <Col>
                        <ul className='footerlast-main'>
                            <li className='fotter-last-2'><a href="#">Terms</a></li>
                            <li className='fotter-last-2'><a href="#">Privacy</a></li>
                        </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

}

export default footer;
