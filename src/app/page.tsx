"use client";

import Background from "@/components/portfolio/Background";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import HeroSection from "@/components/portfolio/HeroSection";
import Navigation from "@/components/portfolio/Navigation";
import OverviewSection from "@/components/portfolio/OverviewSection";
import { ProjectCard } from "@/components/portfolio/project-card";
import WorkExperience from "@/components/portfolio/WorkExperience";
import { DATA } from "@/data/resume";

// import {
//   Background,
//   HeroSection,
//   Navigation} from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Tech Stack Section */}
        {/* <TechStackSection /> */}
        <WorkExperience />

        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project) => (
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <ExperienceSection /> */}

        {/* Projects Section */}
        {/* <ProjectsSection /> */}

        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Certifications Section */}
        {/* <CertificationsSection /> */}

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
