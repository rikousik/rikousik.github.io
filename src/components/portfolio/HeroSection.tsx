import { Icon } from "@iconify/react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  return (
    <div className="relative min-h-dvh flex items-center justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl" />

        {/* Geometric Accents */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full" />
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full" />
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-pink-500/35 rounded-full" />
      </div>

      <section className="relative z-10 max-w-4xl mx-auto px-6 text-center -mb-8">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent z-10">
            {DATA.name}
          </span>
        </h1>

        {/* Typewriter Role Component */}
        <TypewriterRole />

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with clean code and
          thoughtful design
        </p>

        {/* Social Links - keeping exactly the same */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            {
              href: DATA.contact.social.GitHub.url,
              icon: "simple-icons:github",
              label: "GitHub",
              color: "hover:text-gray-900 dark:hover:text-white",
            },
            {
              href: DATA.contact.social.LinkedIn.url,
              icon: "skill-icons:linkedin",
              label: "LinkedIn",
              color: "hover:text-blue-600",
            },
            {
              href: `mailto:${DATA.contact.email}`,
              icon: "material-icon-theme:email",
              label: "Email",
              color: "hover:text-green-600",
            },
          ].map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Skills Preview */}
        {/* <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { icon: "skill-icons:react-dark", label: "React" },
            { icon: "skill-icons:typescript", label: "TypeScript" },
            { icon: "skill-icons:nextjs-dark", label: "Next.js" },
            { icon: "skill-icons:nodejs-dark", label: "Node.js" },
            { icon: "skill-icons:tailwindcss-dark", label: "Tailwind" }
          ].map((skill, index) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Icon icon={skill.icon} width={16} height={16} />
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill.label}</span>
            </div>
          ))}
        </div> */}

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <Link href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
