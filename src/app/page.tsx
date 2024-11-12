"use client";
import Educational from "@/components/education/Educational";
import "./globals.css";
import About from "@/components/about/About";
import HomeBanniere from "@/components/home/HomeBanniere";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeBanniere />
      <About />
      <Educational />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
