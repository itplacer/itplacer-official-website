import React from "react";
import styles from "./style.module.css";
import Image from "../../assets/contact_form_img.svg";

const ContactForm = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.left_container}>
            <h2>Talk to our experts</h2>
            <p>
              Still Confused how PrepBytes can help you <br /> achieve your
              dream? Talk to our experts
            </p>
            <div>
              <img src={Image} alt="svg_Image" />
            </div>
          </div>
          <div className={styles.right_container}>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
              <textarea placeholder="Query" cols="20" rows="5"></textarea>
              <button type="submit">Request a call</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
