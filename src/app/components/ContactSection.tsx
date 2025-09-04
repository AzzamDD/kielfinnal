export default function ContactSection() {
  return (
    <section id="contact" className="section" data-aos="fade-up">
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Tambahan IG & WA */}
      <div className="social-links">
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          📷 Instagram
        </a>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn whatsapp"
        >
          💬 WhatsApp
        </a>
      </div>
    </section>
  );
}
