import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container"> 
        <h1>Send a message to us!</h1>
        <form action="/">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Subject" />
            <textarea name="" id="" rows="4" placeholder="Message"></textarea>
            <button>Send Message</button>
        </form>
    </div>     
    )
}

export default ContactForm