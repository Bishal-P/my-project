
import "./Contact.css"


function Contact() {
    return (
        <>
        <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and I will get back to you within 24 hours</h3>
                        <ul className="info-details">
                            
                    <li><a href={""}><i className="fas fa-phone-alt"></i>
                                <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a></a></li>
                            <li>
                        <i className="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li>
                        <i className="fas fa-globe"></i>
                        <span>Website:</span> <a href={"#"}>yoursite.com</a>
                            </li>
                            <ul className="social-icons">
                            <li><a href={"#"}><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href={"#"}><i className="fa-brands fa-square-github"></i></a></li>
                                <li><a href={"#"}><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                    
                    
                </ul>
            </div>
            <div className="form-wrap">
                <form action="#" method="POST">
                    <h2 className="form-title">Send me a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Mail"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                </form>
            </div>
                </div>
                <div className="design-by">
                    <p> Designed with ❤️ by <ba> Bishal Prasad</ba></p>
                </div>
    </section>

  
        </>
    )
}


export default Contact;