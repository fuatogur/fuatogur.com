import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fuatogur",
    icon: Github,
  },
  /* {
    name: "LinkedIn",
    href: "https://linkedin.com/in/fuatogur",
    icon: Linkedin,
  }, */
  {
    name: "Email",
    href: "mailto:fuatogur0@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Fuat Oğur. Tüm hakları saklıdır.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
