import React from "react";

const Footer = () => {
  return (
    <footer className="position-absolute bottom-0 w-100 bg-dark pt-2 p-1">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p className="text-white">
            Welcome to Task Management Website 🙂 !!
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Manage your time <cite title="Source Title"> And elevate your productivity 😄</cite>
        </figcaption>
      </figure>
    </footer>
  );
};

export default Footer;