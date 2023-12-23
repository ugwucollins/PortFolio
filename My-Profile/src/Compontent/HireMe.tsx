import "./HireMe.css";

const HireMe = ({ sendEmail, form, Close }: any) => {
  return (
    <div className="HireMe">
      <h1> Hire Me Now!</h1>
      <form ref={form} className="email-form" onSubmit={sendEmail}>
        <span className="bx bx-x close-icon" onClick={() => Close()}></span>
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
  );
};

export default HireMe;
