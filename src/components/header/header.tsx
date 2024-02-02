import React from "react";
import "./header.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">
              <Logo className="Logo" />
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <div className="Divider-vertical" />
          <li>
            <a
              href="https://www.linkedin.com/in/tobias-justinger/"
              className="LinkedInLink"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
