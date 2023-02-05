import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/contact-img.svg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return(
        <div>
            <Navbar />
           <Hero 
           cName="hero-mid" 
           heroImg={AboutImg}
           title="Contact"
           btnClass="hide"
           />
           <ContactForm />
           <Footer />
        </div>
    )
}

export default Contact;