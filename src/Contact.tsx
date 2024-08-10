function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <h3>Drop us a Message</h3>
      <div>
        <form className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input id="name" />
          <label htmlFor="email">Email</label>
          <input id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" className="" />
        </form>
        <img src="" alt="contact" />
      </div>
    </section>
  );
}

export default Contact;
