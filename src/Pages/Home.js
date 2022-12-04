import React from 'react';
import './Home.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CiUser, CiDeliveryTruck} from 'react-icons/ci';
import {BsGraphUp} from 'react-icons/bs';

export const Home = () => {
  return (
    <>
        <Header />
        <div className='container-fluid'>
            <div className='row align-items-center'>
                
                <div className='col-12 col-md-6'>
                   <img className='img-fluid' src="https://sell.jumia.com/wp-content/uploads/2022/02/91375-lMmtoU-2048x1633.png" alt="" /> 
                </div>
                <div className='col-12 col-md-6'>
                    <h1 className='mb-5 fw-bold text-md-start text-center mx-auto' style={{color: '#ffaa00', maxWidth: '600px'}}>Sell on TagStore and grow your business all over Egypt</h1>
                    <div className='row d-flex justify-content-around'>
                        <div className='text-center col-12 col-md-6 my-1'>
                            <h6 style={{color: '#ffaa00'}} st>New Seller?</h6>
                            <button className='btn rounded-pill shadow my-2 registerHome'>Register Here</button>
                        </div>
                        <div className='text-center col-12 col-md-6 my-1'>
                            <h6 style={{color: '#ffaa00'}}>Already have an account</h6>
                            <button className='btn rounded-pill shadow my-2 loginHome'>Log in</button>
                        </div>
                    </div>
                </div>
                <div className='bgImg w-100 d-none d-md-block'>
                <svg className='w-100' height='300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	                <path fill="#ffaa00" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
                </div>
            </div>
            <div style={{backgroundColor: '#ffaa00'}}>
                <h2 className='text-center' style={{color: '#fff',fontSize: '45px',fontWeight: '600',textShadow: '4px 2px 0px rgb(0 0 0 / 30%)'}}>Why sell on TagStore?</h2>
                <p className='text-center' style={{color: '#fff'}}>The advantages of selling on Jumia</p>
                <div className="row d-flex justify-content-around p-4" style={{fontSize: '15px', fontWeight: '300', color: 'grey'}}>
            <Card className='col-12 col-md m-4' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='text-center p-2'>
                    <CiUser style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='text-center'  style={{color: '#ffaa00'}}>Reach customers all over Egypt</Card.Title>
                    <Card.Text className='text-start'>
                    Show your products to all Jumia’s customers in all over Egypt and reach millions of views and visits to your offers while you are at your place.
                    </Card.Text>
                    <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '15px', fontWeight: '300'}}>Learn more</Button>
                </Card.Body>
            </Card>

            <Card className='col-12 col-md m-4' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='text-center p-2'>
                    <CiDeliveryTruck style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='text-center' style={{color: '#ffaa00'}}>Easy shipping and delivery</Card.Title>
                    <Card.Text className='text-start'>
                    Jumia will deliver all your orders anywhere in Egypt easily and quickly, whether you store the products at your own store or at Jumia’s warehouse.
                    </Card.Text>
                    <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '15px', fontWeight: '300'}}>Learn more about shipping methods</Button>
                </Card.Body>
            </Card>

            <Card className='col-12 col-md m-4' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='text-center p-2'>
                    <BsGraphUp style={{fontSize: '130px', fontWeight: '100', color: '#ffaa00'}}/>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='text-center'  style={{color: '#ffaa00'}}>Reach customers all over Egypt</Card.Title>
                    <Card.Text className='text-start'>
                    Costs on Jumia are simple, and you can make big profits after displaying and selling your products on Jumia
                    </Card.Text>
                    <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '15px', fontWeight: '300'}}>Learn more about pricing and costs</Button>
                </Card.Body>
            </Card>
            </div>
            <h2 className='text-center' style={{color: '#fff',fontSize: '30px',fontWeight: '600'}}>How do I start selling on Jumia?</h2>
            <p className='text-center' style={{color: '#fff'}}>Start selling on Jumia in just 3 steps</p>

            <div className="row">
                <img className='col-12 col-md-4 p-5' src="https://sell.jumia.com/wp-content/uploads/2022/04/1.png" alt="" />
                <img className='col-12 col-md-4 p-5' src="https://sell.jumia.com/wp-content/uploads/2022/04/2.png" alt="" />
                <img className='col-12 col-md-4 p-5' src="https://sell.jumia.com/wp-content/uploads/2022/04/3.png" alt="" />
            </div>
            </div>
            <div className='bgImg2 w-100 border-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path fill="#ffaa00"  d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
            </svg>
                </div>

                <div className='rounded p-4 m-3 shadow-lg '>
                <h2 className='text-center' style={{color: '#ffaa00',fontSize: '30px',fontWeight: '600'}}>Reviews of our partners</h2>
                    <div className='row'>
                    <iframe className='col-12 col-md p-2' src="https://www.youtube.com/embed/5a3ASgr9z4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='col-12 col-md p-2' src="https://www.youtube.com/embed/4Qsw4Wb5o0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='col-12 col-md p-2' src="https://www.youtube.com/embed/71PNukAKz9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <h2 className='text-center mt-5' style={{color: '#ffaa00',fontSize: '30px',fontWeight: '600'}}>Do you need help with registration?</h2>
                <div className="row d-flex justify-content-around p-4" style={{fontSize: '15px', fontWeight: '300', color: 'grey'}}>
            <Card className='col-12 col-md m-5' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='text-center p-2'>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='text-center'  style={{color: '#ffaa00'}}>Learn more about the requirements to open a new account on JUMIA</Card.Title>
                    
                    <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '15px', fontWeight: '300'}}>Learn more</Button>
                </Card.Body>
            </Card>

            <Card className='col-12 col-md m-5' style={{boxShadow: '15px 12px 10px 0px rgb(0 0 0 / 50%)'}}>
                <div className='text-center p-2'>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title className='text-center' style={{color: '#ffaa00'}}>Attend a training that explains everything about managing your store on Jumia</Card.Title>
                    
                    <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '15px', fontWeight: '300'}}>Book your place</Button>
                </Card.Body>
            </Card>

            <div className='text-center'>
                <Button className="btn rounded-pill shadow my-2 border-0 registerHome" style={{fontSize: '20px', fontWeight: '300'}}>Contact Us</Button></div>
            </div>
                
        </div>
        <Footer />
    </>
  )
}
