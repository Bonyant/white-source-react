import React from "react";

export default function Contacts() {
  return (
    <div>
      <section class="contactus">
        <div class="headcont">
          <h2>Contacts</h2>
          <p className="space"></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            officiis facilis vel veniam? Delectus quo voluptates veritatis
            obcaecati necessitatibus architecto dignissimos perspiciatis itaque
            earum temporibus atque quis, asperiores sunt voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            officiis facilis vel veniam? Delectus quo voluptates veritatis
            obcaecati necessitatibus architecto dignissimos perspiciatis itaque
            earum temporibus atque quis, asperiores sunt voluptatum?
          </p>
          <div className="content">
            <div className="contactusBx">
              <a href="/" className="fa fa-facebook">
                <span>Facebook</span>
              </a>{" "}
              <span className="spmar"></span>
              <a href="/" className="fa fa-twitter">
                <span>Twitter</span>
              </a>{" "}
              <span className="spmar"></span>
              <a href="/" className="fa fa-instagram">
                <span>Instagram</span>
              </a>{" "}
              <span className="spmar"></span>
              <a href="/" className="fa fa-youtube">
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
