"use client";
import { useState } from "react";
import { FaUser, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">MyPortfolio</a>
        <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
        <ul className={`menu ${open ? "active" : ""}`}>
          <li>
            <a href="#about"><FaUser /> About</a>
          </li>
          <li>
            <a href="#projects"><FaProjectDiagram /> Projects</a>
          </li>
          <li>
            <a href="#skills"><FaCode /> Skills</a>
          </li>
          <li>
            <a href="#contact"><FaEnvelope /> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
