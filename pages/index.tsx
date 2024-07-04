import Navbar from "@/app/components/navbar";
import "../app/globals.css"
import Image from "next/image";
import Hero from "@/app/components/hero";
import Trusted from "@/app/components/trusted";
import Areas from "@/app/components/areas";
import Simplify from "@/app/components/simplify";
import Services from "@/app/components/services";
import About from "@/app/components/about";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";
const Home = () =>{

    return(
        <div className="">
            <Navbar/>
            <Hero/>
            <Trusted/>
            <Areas/>
            <Simplify/>
            <Services/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )

}

export default Home;