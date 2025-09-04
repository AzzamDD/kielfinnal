import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


export default function SkillsSection() {
  return (
    <section id="skills" className="section" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills">
        <span><FaHtml5 color="#E44D26" /> HTML</span>
        <span><FaCss3Alt color="#264de4" /> CSS</span>
        <span><FaJs color="#F0DB4F" /> JavaScript</span>
        <span><FaReact color="#61DBFB" /> React</span>
        <span><SiNextdotjs color="black" /> Next.js</span>
        <span><FaGithub color="#000000ff" /> GitHub</span>
      </div>
    </section>
  );
}
