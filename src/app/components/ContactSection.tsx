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
          href="https://www.instagram.com/kkiellrh?igsh=MWQzM3Z4MmN6azZsOA=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn instagram"
        >
          📷 Instagram
        </a>
        <a
          href="https://wa.me/6289509327150"
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

