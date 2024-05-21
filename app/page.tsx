
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import Projects from "@/components/Projects";
import { FloatingNavBar } from "@/components/ui/FloatingNavBar";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex items-center justify-center overflow-hidden mx-auto flex-col sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={[
          {name:'Home',link:'/',icon:<FaHome/>},
          {name:'About',link:'#about',icon:<FaUser/>},
          {name:'Projects',link:'#projects',icon:<FaProjectDiagram/>}

        ]}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <MyProjects/>
        <Footer/>
        
      </div>
    </main>
  );
}
