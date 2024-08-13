import "./Contact.css";
import "./HireMe.css";

const Contact = ({ sendEmail, form }: any) => {
  return (
    <>
      <div className="Contact" id="Contact">
        <h1> Contact Me!</h1>
        <div className="p">Let me Help You</div>

        <div className="Contact-work">
          <div className="Contact-form">
            <form ref={form} className="email-form" onSubmit={sendEmail}>
              <div className="clicked">
                <input
                  type="text"
                  className="input"
                  placeholder="Full Name"
                  name="user_name"
                  required
                />
                <label className="label">Full Name</label>
              </div>

              <div className="clicked">
                <input
                  type="email"
                  placeholder="Email ..."
                  name="user_email"
                  required
                  className="input"
                />
                <label className="label">Email</label>
              </div>

              <div className="clicked">
                <input
                  type="text"
                  placeholder="phone number"
                  name="user_phonenumber"
                  required
                  className="input"
                />
                <label className="label">Phone Number </label>
              </div>
              <div className="clicked">
                <input
                  type="text"
                  placeholder="Project ..."
                  name="user_subject"
                  required
                  className="input"
                />
                <label className="label">Project</label>
              </div>
              <div className="clicked text">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Message"
                  cols={30}
                  rows={10}
                  required
                ></textarea>
                <label className="label">Message</label>
              </div>

              <div className="button">
                <button
                  role="submit"
                  value="Send"
                  type="submit"
                  className="form-button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="contact-image">
            <div className="contact-all">
              <div className="image-words">
                <h4 className="h4">Get In Touch</h4>
                <h1 className="h1">Have a Project On Your Mind</h1>
                <button className="hover-btn">
                  <p>Contact Me</p>
                </button>
              </div>

              <div className="contact-care">
                <img src="cares.png" className="image" alt="customer care" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
