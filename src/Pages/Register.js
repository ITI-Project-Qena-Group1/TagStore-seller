import React, { useState } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const Register = () => {
    const [step, setStep] = useState(1);
    function goStep2(){
        setStep(2)
    }
    function goStep3(){
        setStep(3)
    }
    function goStep4(){
        setStep(4)
    }
  return (
    <>
        <div className='p-3'>
            <img src="https://sellercenter.jumia.com.eg/templates/default/images/logo.png" alt="" />
        </div>
        <div className="logo-deco mx-4"></div>

        <h4 className='mt-4 p-3'>Register and start selling today - create your own seller account</h4>

        <form>
            <div className='row p-3 justify-content-center'>
                <div className='col-12 col-md-9 m-2 p-3' style={{backgroundColor: '#F2F2F2'}}>
                    {step==1?<div className='account'>
                        <h2>Add Seller Account Information</h2>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalSName">
                            <Form.Label column sm={3}>
                            Shop name *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Choose a unique name for your online shop: this is the name that will appear on the Jumia marketplace! It is forbidden to use a registered trademark in your shop name without the brand authorisation.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAccount">
                            <Form.Label column sm={3}>
                            Please select if you're an Individual or Business Entity/Company *
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Select aria-label="Default select example">
                                    <option>-Choose an option-</option>
                                    <option value="0">Business Entity/Company</option>
                                    <option value="1">Indvidual</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                            <Form.Label column sm={3}>
                            Account Manager First and Last Name *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Your name or the name of the person in your team who will manage your account. This is the contact we will primarily use to contact you.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile">
                            <Form.Label column sm={3}>
                            Account manager phone number *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>When we need to contact you urgently, this is the number we will call.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalMobile2">
                            <Form.Label column sm={3}>
                            Additional phone number
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Another number where we can reach you ?</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            Email Address *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="email" />
                            <p style={{color: 'grey'}}>Your account will be linked to this email address and we will use it to send all our communications.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail2">
                            <Form.Label column sm={3}>
                            Retype Email Address *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                            Password *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="password" />
                            <p style={{color: 'grey'}}>At least 8 characters containing a capital letter, a lower letter and a numeric character</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword2">
                            <Form.Label column sm={3}>
                            Retype Password *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="password" />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3 align-items-center" controlId="formHorizontalCheck">
                            <Form.Label column sm={3}>
                            Econtract Egypt *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Check label="I have read and accepted Econtract Egypt" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Button type="" onClick={()=>goStep2()}>Continue</Button>
                            </Col>
                        </Form.Group>
                    </div>:step==2?
                    <div className='business'>
                        <h2>Add Business Information</h2>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail3">
                            <Form.Label column sm={3}>
                            Referred by (email of referrer)
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="email" />
                            <p style={{color: 'grey'}}>Email of the person who referred you</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAccount2">
                            <Form.Label column sm={3}>
                            Do you already have a shop/several shops on Jumia?
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Select aria-label="Default select example">
                                    <option>-Choose an option-</option>
                                    <option value="0">Yes</option>
                                    <option value="1">No</option>
                                </Form.Select>
                                <p style={{color: 'grey'}}>As per our terms and conditions, it is mandatory to declare if you are already operating a shop on Jumia: any undisclosed shop will be closed once discovered.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName2">
                            <Form.Label column sm={3}>
                            If yes, Please list the names of your existing shops.
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Please list the name(s) of your existing shop(s), separated by semi-colons.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName3">
                            <Form.Label column sm={3}>
                            If yes, why would you like to open a new shop on Jumia?
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>The only valid reason to open a new shop is to sell a new brand/category of products: new shop creations are not allowed to sell products you are/were already selling on another shop.</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName4">
                            <Form.Label column sm={3}>
                            Company registered name
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>If you are a Business Entity/Company, indicate your legal name/company name</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                            <Form.Label column sm={3}>
                            Address 1
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        

                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Button type=""onClick={()=>goStep3()}>Continue</Button>
                            </Col>
                        </Form.Group>
                    </div>:step==3?
                    <div className='bank'>
                    <h2>Add Bank Account</h2>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAccount2">
                            <Form.Label column sm={3}>
                            Bank name list
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Select aria-label="Default select example">
                                    <option value="">-Choose an option-</option>
                                    <option value="0">NBE - National Bank of Egypt</option>
                                    <option value="1">CIB - Commercial International Bank</option>
                                    <option value="2">QNB - Qatar National Bank Alahli</option>
                                    <option value="3">MISR - Banque Misr</option>
                                    <option value="4">AAIB - Arab African International Bank</option>
                                    <option value="5">BDC - Banque Du Caire</option>
                                    <option value="6">CAE - Credit Agricole Egypt</option>
                                    <option value="7">BOA - Bank of Alexandria</option>
                                    <option value="8">HSBC - HSBC</option>
                                    <option value="9">FAIB - Faisal Islamic Bank of Egypt</option>
                                    <option value="10">AUB - Ahly United Bank</option>
                                    <option value="11">AUDI - Audi Bank</option>
                                    <option value="12">ABC - Arab Banking Corporation</option>
                                    <option value="13">ABK - Al Ahli Bank of Kuwait - Egypt</option>
                                    <option value="14">ABRK - Al Baraka Bank Egypt</option>
                                    <option value="15">ADIB - Abu Dhabi Islamic Bank – Egypt</option>
                                    <option value="16">AIB - Arab Investment Bank</option>
                                    <option value="17">ARAB - Arab Bank</option>
                                    <option value="18">BBE - Attijariwafa Bank Egypt S.A.E</option>
                                    <option value="19">BLOM - Blom Bank Egypt</option>
                                    <option value="20">CITI - Citibank</option>
                                    <option value="21">EALB - Egyptian Arab Land Bank</option>
                                    <option value="22">EDBE - Export Development Bank of Egypt</option>
                                    <option value="23">EGB - Egyptian Gulf Bank</option>
                                    <option value="24">ENBD - Emirates National Bank of Dubai</option>
                                    <option value="25">FAB - First Abu Dhabi Bank</option>
                                    <option value="26">HDB - Housing And Development Bank</option>
                                    <option value="27">IDB - Industrial Development Bank</option>
                                    <option value="28">MASH - Mashreq Bank</option>
                                    <option value="29">MIDB - Misr Iran Development Bank</option>
                                    <option value="30">NBG - National Bank of Greece</option>
                                    <option value="31">بنك الكويت الوطني</option>
                                    <option value="32">بنك ناصر الاجتماعي</option>
                                    <option value="33">PDAC - The Principal Bank for Development and Agri.</option>
                                    <option value="34">بنك (سايب) الشركة المصرفية العربية الدولية</option>
                                    <option value="35">SCB - Suez Canal Bank</option>
                                    <option value="36">UB - The United Bank</option>
                                    <option value="37">UNB - Union National Bank</option>
                                    <option value="38">ARIB - Arab International Bank</option>
                                    <option value="39">CBE - Central Bank Of Egypt</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBName">
                            <Form.Label column sm={3}>
                            Bank
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBName2">
                            <Form.Label column sm={3}>
                            Bank Code
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Please input your bank branch name/code</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBName2">
                            <Form.Label column sm={3}>
                            Account Name
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalBName3">
                            <Form.Label column sm={3}>
                            Account Number *
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            <p style={{color: 'grey'}}>Please input digits only without any spaces/characters</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                            <Form.Label column sm={3}>
                            SWIFT
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formFile" className="mb-3">
                            <Form.Label column sm={3}>
                                Select file
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="file" />
                            <p style={{color: 'grey'}}>Allowed types are images, PDF files and MS Word documents</p>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalAddress">
                            <Form.Label column sm={3}>
                            IBAN
                            </Form.Label>
                            <Col sm={5}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={6}>
                            <Button type="" onClick={()=>goStep2()}>Back</Button>
                            </Col>
                            <Col sm={6}>
                            <Button type="" onClick={()=>goStep4()}>Continue</Button>
                            </Col>
                        </Form.Group>
                    </div>:step==4?
                    <div className='summary'>
                        <h4>Thank you for registeration, we will contact you soon after checking your information</h4>
                    </div>:''}
                </div>
                <div className='col-12 col-md-2 m-2 p-3 h-100' style={{backgroundColor: '#F2F2F2'}}>
                    <h2>FAQ</h2>
                        {/* Guidelines for uploading ID Card or Passport copy
                        Guidelines for uploading Passport copy */}
                        {/* <h6>أسئلة وأجوبة</h6>
                        <a>الإرشادات الخاصة بتحميل نسخة من بطاقة الهوية أو جواز السفر</a>
                        <a>الإرشادات الخاصة بتحميل نسخة من جواز السفر</a> */}
                </div>
            </div>
        </form>
    </>
  )
}
