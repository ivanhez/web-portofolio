import React from "react";
import profilePhoto from "../assets/profile1.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <h2>Contacto</h2>
        <h3>
          <u></u>
        </h3>
        <table>
          <tbody>
            <tr>
              <td>Teléfono</td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+50235900356"
                >
                  +502 3590 0356
                </a>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:ivanhez96@gmail.com"
                >
                  ivanhez96@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Github</td>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ivanhez/"
                >
                  github.com/ivanhez/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="contact-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
    </section>
  );
};

export default Contact;
