import Link from "next/link";
import * as motion from "motion/react-client";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fuatogur",
    icon: Github,
    color: "hover:text-[#333] dark:hover:text-white",
  },
  /*{
    name: "LinkedIn",
    href: "https://linkedin.com/in/fuatogur",
    icon: Linkedin,
    color: "hover:text-[#0A66C2]",
  },*/
  {
    name: "Email",
    href: "mailto:fuatogur0@gmail.com",
    icon: Mail,
    color: "hover:text-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <motion.div
        className="flex flex-col items-center space-y-8 text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Merhaba, ben{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fuat Oğur
            </span>
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
            Web ve yazılım geliştirme alanında çalışıyorum.
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base text-muted-foreground max-w-xl sm:text-lg"
        >
          Modern web teknolojileri kullanarak kullanıcı dostu, performanslı ve
          ölçeklenebilir uygulamalar geliştiriyorum. Açık kaynak projelere
          katkıda bulunmayı ve yeni teknolojileri öğrenmeyi seviyorum.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/projeler">
            <Button size="lg" className="w-full sm:w-auto group">
              Projelerimi İncele
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/iletisim">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              İletişime Geç
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 pt-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-muted-foreground transition-colors ${link.color}`}
              aria-label={link.name}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 border-t w-full max-w-md"
        >
          <p className="text-sm text-muted-foreground">
            Laravel, Next.js, React, TypeScript ve modern web teknolojileri ile çalışıyorum.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

