import React, {Component} from 'react';
import { Container,Row,Form,textarea } from 'react-bootstrap';

class Contact extends Component{
    render(){
        return(

        <div className="page-section contact-area" id="contact">
            <Container>
                <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>

                <Row>
                    <div className="col-lg-12">
                    <Form id="contactForm">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                            <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-lg text-uppercase" type="submit">Send Message</button>
                        </div>
                        </div>
                    </Form>
                    </div>
                </Row>
	  

            </Container>
        </div>


        )
    }
}

export default Contact;