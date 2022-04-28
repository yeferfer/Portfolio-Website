import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const valuesEmail = {
    to_name: "",
    from_name: "",
    message: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .send(
        "service_02k5eh9",
        "template_3o1t7bm",
        valuesEmail,
        "gx0ao35F7FUBXP7OE"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2 className="aboutTitle">Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="form-Name" />
          <input type="text" placeholder="Email" className="form-Email" />
          <textarea placeholder="Message" className="form-Message"></textarea>
          <button
            type="submit"
            onClick={() => {
              valuesEmail.to_name = document.querySelector(".form-Name").value;
              valuesEmail.from_name =
                document.querySelector(".form-Email").value;
              valuesEmail.message =
                document.querySelector(".form-Message").value;
              document.querySelector(".form-Name").value = "";
              document.querySelector(".form-Email").value = "";
              document.querySelector(".form-Message").value = "";
              setTimeout(() => {
                document
                  .querySelector(".sendEmailText")
                  .classList.toggle("hidden");
              }, 3000);
            }}
          >
            Send
          </button>
          {message && (
            <span className="sendEmailText">Thanks, I'll reply ASAP 😊</span>
          )}
        </form>
      </div>
    </div>
  );
}
