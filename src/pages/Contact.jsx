import "../styles/Contact.css";

// Socials
const socials = [
  { label: "GitHub", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 lg:px-28 py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Top label */}
        <div className="label mb-8">
          Get in Touch — {new Date().getFullYear()}
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
          className="text-4xl md:text-6xl text-white/90 mb-2"
        >
          Let's
        </h1>
        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.1,
          }}
          className="text-4xl md:text-6xl text-white/45 mb-10"
        >
          Connect
        </h1>

        {/* Intro */}
        <p
          className="text-white/60 text-sm leading-[1.85] max-w-sm"
          style={{ fontWeight: 300 }}
        >
          Have a question, idea, or just want to say hello? Fill out the form
          below or reach out directly via any of the channels listed.
        </p>

        <div className="divider" />

        {/* Two-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Form */}
          <form
            className="md:col-span-3 flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="field-label">Name</label>
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="field-label">Email</label>
                <input
                  className="contact-input"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="field-label">Subject</label>
              <input
                className="contact-input"
                type="text"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="field-label">Message</label>
              <textarea
                className="contact-input"
                placeholder="Write your message here…"
                rows={5}
                style={{ resize: "none" }}
              />
            </div>

            <div>
              <button type="submit" className="submit-btn">
                Send Message
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Right col — contact info */}
          <div className="md:col-span-2 flex flex-col gap-8 md:pt-1">
            <div>
              <div className="label mb-4">Direct</div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:sahupranjal1619@gmail.com"
                  className="contact-link"
                >
                  <span>sahupranjal1619@gmail.com</span>
                  <svg
                    className="link-arrow"
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />

            <div>
              <div className="label mb-4">Elsewhere</div>
              <div className="flex flex-col gap-4">
                {socials.map(({ label, href }) => (
                  <a key={label} href={href} className="contact-link">
                    <span>{label}</span>
                    <svg
                      className="link-arrow"
                      width="9"
                      height="9"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M1 9L9 1M9 1H3M9 1V7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="w-full h-px"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />

            <div>
              <div className="label mb-3">Response Time</div>
              <p
                className="text-white/50 text-xs leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                Usually within{" "}
                <span
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  24–48 hours.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Footer label */}
        <div className="label text-right">End of Page</div>
      </div>
    </div>
  );
};

export default Contact;
