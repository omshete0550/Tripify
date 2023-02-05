import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
    return(
        <div>
           <Navbar />
           <Hero 
           cName="hero" heroImg=" https://sustainabletravel.org/wp-content/uploads/Small-Islands-Header-Image-Web.jpg"
           title="Travel. Experience. Live."
           text="Travel Your Favourite Destination."
           buttonText="Explore More"
           url="/"
           btnClass="show"
           />
           <Destination/>
           <Trip />
           <Footer />
        </div>
    )
}

export default Home;