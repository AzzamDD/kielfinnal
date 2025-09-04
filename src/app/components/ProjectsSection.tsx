"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projects = [
    {
      title: "Next Project",
      desc: "On Process",
      link: "#",
      image: "/me.jpg", // ganti dengan gambar project
    },
    {
      title: "Next Project",
      desc: "On Process",
      link: "#",
      image: "/me.jpg",
    },
    {
      title: "Next Project",
      desc: "On Process",
      link: "#",
      image: "/me.jpg",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card" data-aos="zoom-in">
            <img src={p.image} alt={p.title} className="project-img" />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" className="project-btn">
                Next Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
