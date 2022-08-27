
import './styleContact.css';
const pop=()=>{
  alert("Thank you for contacting us. We will reply you soon")
}
const ContactUs=(props)=>{
    return(
     
        <div className='contactbg'>
           <a name="contactus"></a>
            <h1 className="header">Contact Us</h1>
         <main>
        <div className="map">
          <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.463248408319!2d88.37354301374589!3d22.78529253087478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b2cc517395b%3A0xd3ef6d3e2a230019!2sTasty%20Food%20Plaza!5e0!3m2!1sen!2sin!4v1645029787473!5m2!1sen!2sin' width='430' height='500' />"}} />;
          {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.463248408319!2d88.37354301374589!3d22.78529253087478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b2cc517395b%3A0xd3ef6d3e2a230019!2sTasty%20Food%20Plaza!5e0!3m2!1sen!2sin!4v1645029787473!5m2!1sen!2sin" width="430" height="500" style="border:0;" loading="lazy">
          </iframe>*/}
        </div>
        <div className="contactform">
            <form>
              <div className="msg-input">

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" id="ps">Name</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Full Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
                </div>
                
                <div className="form-group">
                  <label htmlFor="floatingTextarea2" >Message</label>
                 <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea2" style={{height: 100}}></textarea>
                 
                </div>
              </div>
                <div className="msg">
                <button  className="btn btn-primary ml-auto mr-auto" onClick={pop}>Submit</button>
              </div>
              </form>

        </div>

    </main>
    <footer>
      <div className="phone">
        <img src="images/icons8-phone-64.png" width="50" height="50"  />
        <p>033-2432-6789</p>
        <p>033-2432-6781</p>

      </div>
      <div className="mail">
        <img src="images/email-logo-png-1102.png" width="57" height="55"  />
        <p>abcds23@gmail.com</p>

      </div>
      <div className="location">
        <img src="images/icons8-address-48.png" width="50" height="50"  />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, consequatur.</p>

      </div>

    </footer>
        </div>
    );
}

export default ContactUs;