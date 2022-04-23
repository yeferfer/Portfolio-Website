import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" className="form-Email" />
          <textarea placeholder="Message" className="form-Message"></textarea>
          <button
            type="submit"
            onClick={() => {
              console.log(document.querySelector(".form-Email"));
              document.querySelector(".form-Email").value = "";
              document.querySelector(".form-Message").value = "";
            }}
          >
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP 😊</span>}
        </form>
      </div>
    </div>
  );
}
