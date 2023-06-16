import React, { useState, useEffect } from "react"
import * as emailjs from "emailjs-com";
import { Container, Row, Col, Alert } from "react-bootstrap";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import "./Contact.css"

const meta = {
  title: "Harness World",
  description:
    "Harness World",
};

const contactConfig = {
  YOUR_EMAIL: "worldofharness@gmail.com",
  YOUR_MOBILE: "+91-7022731287",
  YOUR_FONE: "080-42247396",
  description:
    "MC Sarovar Annex,  Adjacent to KR Puram RTO Office, Hosabasavanapura, Krishnarajapura, Bengaluru, Karnataka 560049 ",
  YOUR_SERVICE_ID: "service_81a6l5q",
  YOUR_TEMPLATE_ID: "template_ogha24u",
  YOUR_USER_ID: "jccO56NGwboLHToav",
};

const Contact = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
     <section className='contact background container'>
        <div className='container d_flex title'>
          <h1>CONTACT US</h1>
        </div>
        <div className='content contact'>
          <h1>Harness World</h1>
          <p>1st main road, opposite to seegehalli govt school,</p>
          <p> Bangalore - 560049</p>
          <p> Karnataka, India</p>
  
          <div className="phone email">
            <div class="left row">
              <i class="fa fa-phone"></i>
              <label> +91 7022731287 , +91 9591452240 </label>
            </div>
            {/* <div class="left row">
              <label>  +91 9591452240 </label>
            </div> */}
            <div class="left row">
              <i class="fa fa-envelope"></i>
              <label> worldofharness@gmail.com</label>
            </div>
          </div>
          {isMobile && (  <div>
            <h2>Get In touch</h2>
          </div>)}


        <div className={isMobile ? "mobileGrid container email-contact" : "container grid2 email-contact"} >
          { !isMobile && (
            <div class="box">
              <h2>Get In touch</h2>
            </div>
          )}


          <div class="container send-email">
            <HelmetProvider>
                <Container>
                  <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description} />
                  </Helmet>
                    <Row className="sec_sp">
                      <Col lg="12" className="d-flex justify-content-center flex-wrap">
                        <Alert
                          //show={formData.show}
                          variant={formData.variant}
                          className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"
                            }`}
                          onClose={() => setFormdata({ show: false })}
                          dismissible
                        >
                          <p className="my-0">{formData.alertmessage}</p>
                        </Alert>
                      </Col>
                      <Col lg="7" className="d-flex justify-content-center flex-wrap">
                        <form onSubmit={handleSubmit} className="contact__form w-100">
                          <Row>
                            <Col
                              lg="6"
                              className="form-group d-flex justify-content-center flex-wrap"
                            >
                              <input
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name || ""}
                                type="text"
                                required
                                onChange={handleChange}
                              />
                            </Col>
                            <Col
                              lg="6"
                              className="form-group d-flex justify-content-center flex-wrap"
                            >
                              <input
                                className="form-control rounded-0"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                value={formData.email || ""}
                                required
                                onChange={handleChange}
                              />
                            </Col>
                          </Row>
                          <textarea
                            className="form-control rounded-0 mb-3"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                          <br />
                          <Row>
                            <Col
                              lg="12"
                              className="form-group d-flex justify-content-center flex-wrap"
                            >
                              <button
                                type="submit"
                                id="submit-btn"
                                variant="outline-info"
                              >
                                {formData.loading ? "Sending..." : "Send"}
                              </button>
                            </Col>
                          </Row>
                        </form>
                      </Col>
                    </Row>
                  
                </Container>
                <div className={formData.loading ? "loading-bar" : "d-none"}></div>
            </HelmetProvider>
          </div>
        </div>

  
        </div>
      </section>
    </>
  )
}

export default Contact
