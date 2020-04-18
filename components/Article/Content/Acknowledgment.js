import React from "react";

function Acknowledgement() {
  return (
    <section className="bg-pink-100 p-4 flex justify-center pb-16">
      <div
        className="text-gray-900 p-4"
        style={{ maxWidth: "980px", width: "100%" }}
      >
        <h5 className="text-normal text-gray-900 font-display font-semibold mb-2">
          Met dank aan
        </h5>
        <ul>
          <li className="font-body text-sm mb-1">
            <span aria-hidden>👨‍🎨 </span>
            <a
              href="https://www.jeroenkrul.nl/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-body font-medium text-pink-700 hover:underline"
            >
              Jeroen Krul - Illustraties
            </a>
          </li>
          <li className="font-body text-sm mb-1">
            <span aria-hidden>👨‍💻 </span>
            <a
              href="https://github.com/jbovenschen"
              target="_blank"
              rel="noreferrer noopener"
              className="font-body font-medium text-pink-700 hover:underline"
            >
              Jaco Bovenschen - Website
            </a>
          </li>
          <li className="font-body text-sm mb-1">
            <span aria-hidden>🔍 </span>
            <a
              href="https://www.linkedin.com/in/kim-timmermans-8803b394/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-body font-medium text-pink-700 hover:underline"
            >
              Kim Timmermans - Eindredactie
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Acknowledgement;
