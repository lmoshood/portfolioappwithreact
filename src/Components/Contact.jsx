import React, { useState , useRef} from "react";
import Swal from 'sweetalert2'

//import emailjs from 'emailjs-com';//
 import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [details, setDetails] = useState({
    email: "",
    name: "",
    subject: "",
    body: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setDetails({ ...details, [event.target.name]: event.target.value });
    console.log('details = ');
    console.log(details);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(details);
    
    emailjs.sendForm('service_jcta1id', 'template_zk0wrhb', form.current, '_CJJY2Dbq883EdV5V')
    .then((result) => {
        console.log(result.text);
        if(result.text.toLocaleLowerCase() === 'ok'){
          Swal.fire('Success', 'Record submitted successfully', 'success')
        }
      
        console.log(form.current);
    }, (error) => {
      Swal.fire('Errpr message', 'Error occured not submitted successfully', 'error')
        console.log(error.text);
    });
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="container-fluid ">
        <br />
        <h2 style={{ fontFamily: "30px", color: "#00ddff" }}>
          &lt; Contact /&gt;
        </h2>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            {/* <p style={{ color: "red" }}>Form is temporarily disabled</p> */}
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  name="name"
                  // value={details.name}
                   onChange={handleChange}
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  name="email"
                  // value={details.email}
                   onChange={handleChange}
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  name="subject"
                  // value={details.subject}
                  type="text"
                   onChange={handleChange}
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  name="body"
                  // value={details.body}
                   onChange={handleChange}
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="col-8 pt-2 mx-auto">
                <input
                  type="submit"
                  className="resume"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      
      </div>
     
    </section>
  );
};
export default Contact;
