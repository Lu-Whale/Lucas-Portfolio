import MainSection from "./components/mainPage/MainSection";
import Navbar from "./components/navBar/Navbar";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer/Footer";
import AchievementsSection from "./components/achievements/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
