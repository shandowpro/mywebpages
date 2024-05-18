// Fourth  component [Contact] :

import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

import Lottie from "lottie-react";
// @ts-ignore
import doneAnimation from "../../animation/done.json";
// @ts-ignore
import contactAnimation from "../../animation/messageSent.json";

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

      <div style={{ justifyContent: "space-between", gap: '100px' }} className="flex">
        <form onSubmit={handleSubmit} action="" className="">
          <div className="flex">
            <label htmlFor="email"> Email Address : </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
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
            {state.submitting ? "Submitting" : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "1.7rem",
                fontSize: "25px",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: 100 , marginTop: -30 }}
                animationData={doneAnimation}
              />
              Thanks for joining!
            </p>
          )}
        </form>

        <div className="animation" >
          <Lottie
            className="contact-animation"
            loop={true}
            style={{ height:300  }}
            animationData={contactAnimation}
          />           
        </div>
      </div>
    </section>
  );
};

export default Contact;
