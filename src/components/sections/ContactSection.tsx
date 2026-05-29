import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:ramasri.2904@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Ramasrij" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rama-sri-j-a65537251/" },
  // { icon: Twitter, label: "Twitter", href: "#" },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.currentTarget,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        setSent(true);
        (e.target as HTMLFormElement).reset();
      })
      .catch(() => {
        alert("Failed to send ❌");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 md:p-12 text-center space-y-8"
      >
        <h2 className="text-3xl font-bold text-foreground">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of something great.
        </p>

        <div className="max-w-md mx-auto text-left">
  {sent ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-4 py-8"
    >
      <div className="text-5xl">🎉</div>
      <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
      <p className="text-muted-foreground text-sm">
        Your message has been received. I'll get back to you soon!
      </p>
      <button
        onClick={() => setSent(false)}
        className="glass-strong px-6 py-2 rounded-xl text-sm font-medium text-foreground hover:scale-105 transition-all duration-300"
      >
        Send Another Message
      </button>
    </motion.div>
  ) : (
           <form onSubmit={sendEmail} className="space-y-5">

            <div className="space-y-2">

              <label className="text-sm font-medium text-muted-foreground">Name</label>

              <input

                type="text"

                name="user_name"

                required

                className="w-full glass-strong rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"

                placeholder="Your name"

              />

            </div>



            <div className="space-y-2">

              <label className="text-sm font-medium text-muted-foreground">Email</label>

              <input

                type="email"

                name="user_email"

                required

                className="w-full glass-strong rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"

                placeholder="your@email.com"

              />

            </div>



            <div className="space-y-2">

              <label className="text-sm font-medium text-muted-foreground">Message</label>

              <textarea

                name="message"

                required

                rows={4}

                className="w-full glass-strong rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 resize-none"

                placeholder="Tell me about your project..."

              />

            </div>



            <button

              type="submit"

              disabled={sending}

              className="w-full glass-strong py-3 rounded-xl text-sm font-semibold text-foreground hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"

            >

              {sending ? "Sending..." : "Send Message"}

            </button>

          </form>
  )}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="glass-strong p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>

        {/* <p className="text-sm text-muted-foreground/60">ramasri.2904@gmail.com</p> */}
      </motion.div>

      <div className="text-center py-8 text-sm text-muted-foreground/40">
        © 2026 Ramashree, ramasri.2904@gmail.com.
      </div>
    </section>
  );
};

export default ContactSection;
