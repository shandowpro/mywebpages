// Fourth  component [Contact] :

import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

  const [state, handleSubmit] = useForm("xkndeqzg");


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
        <form onSubmit={handleSubmit} action="" className="">
          <div className="flex">
            <label htmlFor="email"> Email Address : </label>
            <input type="email" name="email" id="email"  autoComplete="off"  required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> Your message : </label>

            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
             {state.submitting ? 'Submitting' : 'Submit'}
          </button>

          {
             state.succeeded &&  
             (<p style={{'color':'red' , 'textAlign': 'center' , 'marginTop' : '1.7rem' , 'fontSize' : '25px'  }}   >Thanks for joining!</p> )
          }
        </form>

        <div className="animation"> Animation </div>
      </div>
    </section>
  );
};

export default Contact;
