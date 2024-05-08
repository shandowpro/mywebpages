// Fourth  component [Contact] :

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact US
      </h1>

      <p className="sub-title">
        {" "}
        Contact us for more information and get notified when I push something
        new{" "}
      </p>

      <div className="flex">

        <form action="" >
          <div className="flex">
            <label htmlFor="email"> Email Address : </label>
            <input type="email" name="" id="email"  required />
          </div>

          <div className="flex" style={{ marginTop:'24px' }}  >
            <label htmlFor="message"> Your message : </label>

            <textarea  required   name="" id="message">
              
            </textarea>
          </div>

          <button className='submit'> Submit </button>
        </form>

        <div className="animation"> Animation </div>
      </div>
    </section>
  );
};

export default Contact;
