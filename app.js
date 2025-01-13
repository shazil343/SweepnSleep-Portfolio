// Grab the main container
const app = document.getElementById('app');

// 1) Navbar (optional for JS build; you can also manage this via HTML)
const navbar = document.createElement('nav');
navbar.className = 'navbar';
navbar.innerHTML = `
  <div class="nav-container">
    <div class="nav-logo">Sweep & Sleep</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#success">Success</a></li>
      <li><a href="#founder">Founder</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
`;
document.body.prepend(navbar);

// 2) Hero Section
const heroHeader = document.createElement('header');
heroHeader.setAttribute('data-aos', 'fade-up');
heroHeader.innerHTML = `
  <h1>Transform Your Rental Experience</h1>
  <p>
    At Sweep & Sleep, we’re redefining shared living by empowering landlords with complete oversight 
    and providing tenants a clean, private, and respectful environment. Join us and discover a fair, 
    transparent solution where everyone wins.
  </p>
`;
app.appendChild(heroHeader);

// 3) About Section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
aboutSection.setAttribute('data-aos', 'fade-up');
aboutSection.innerHTML = `
  <h2>About Sweep & Sleep</h2>
  <p>
    We believe that everyone deserves a clean and quiet living space. Our platform 
    connects landlords with responsible roommates and offers an all-inclusive rental management 
    system to ensure fair and transparent experiences for everyone involved.
  </p>
`;
app.appendChild(aboutSection);

// 4) Features Section
const featuresSection = document.createElement('section');
featuresSection.id = 'features';
featuresSection.setAttribute('data-aos', 'fade-up');
featuresSection.innerHTML = `
  <h2>Key Features</h2>
  <div class="features-list">
    <div class="feature-card">
      <h3>All-Inclusive Rental Management</h3>
      <p>
        Manage rental agreements, tenant records, and property info in one place. Our flexible monthly contracts give both parties the freedom to stay or move on, ensuring minimal hassle and maximum control.
      </p>
    </div>
    <div class="feature-card">
      <h3>Neatkeeper & Weekly Video Updates</h3>
      <p>
        Each week, a Neatkeeper visits your unit, sends a video update, and scores roommates on cleanliness. Stay informed and keep your property pristine.
      </p>
    </div>
    <div class="feature-card">
      <h3>Private Rooms & Fair Chore System</h3>
      <p>
        Tenants enjoy private, locked rooms in a shared living space. Our platform tracks chores and ensures accountability.
      </p>
    </div>
    <div class="feature-card">
      <h3>Apartment Renter (Local Leadership)</h3>
      <p>
        Assign a lead roommate to handle day-to-day issues and offer guidance. They receive a rent discount in return.
      </p>
    </div>
    <div class="feature-card">
      <h3>Centralized Information</h3>
      <p>
        Everything from Wi-Fi passwords to property details is stored in one place, streamlining communication.
      </p>
    </div>
    <div class="feature-card">
      <h3>Flexible & Free</h3>
      <p>
        Our platform is currently free—experience the benefits of an efficient, transparent rental system at no cost.
      </p>
    </div>
  </div>
`;
app.appendChild(featuresSection);

// 5) Success Stories Section
const successSection = document.createElement('section');
successSection.id = 'success';
successSection.setAttribute('data-aos', 'fade-up');
successSection.innerHTML = `
  <h2>Success Stories</h2>
  <div class="testimonial">
    <h4>Shazil, Landlord in Calgary</h4>
    <p>
      “I purchased a property in Edmonton through Todd’s guidance and listed it on Sweep & Sleep. 
      Even though I’m hours away, the system keeps me fully informed. Weekly updates and streamlined 
      processes have made tenant turnover smooth and stress-free.”
    </p>
  </div>
  <div class="testimonial">
    <h4>Seth, Newcomer from Ukraine</h4>
    <p>
      “Since arriving in Canada, I’ve used Sweep & Sleep to find a clean, private room. The platform 
      even connects me with local work opportunities, making it a win-win situation.”
    </p>
  </div>
`;
app.appendChild(successSection);

// 6) Founder Section
const founderSection = document.createElement('section');
founderSection.id = 'founder';
founderSection.setAttribute('data-aos', 'fade-up');
founderSection.innerHTML = `
  <h2>Meet Todd – Our Founder</h2>
  <p>
    With over <strong>30 years</strong> of experience as a landlord, Todd Ogryzlo has witnessed and solved many rental challenges.
    His vision for a fair and transparent rental experience led to the creation of Sweep & Sleep.
  </p>
`;
app.appendChild(founderSection);

// 7) CTA Section
const ctaSection = document.createElement('section');
ctaSection.id = 'cta';
ctaSection.innerHTML = `
  <h2>Ready to Experience Peace of Mind?</h2>
  <p>
    Join Sweep & Sleep today for a free, no-obligation trial and discover the benefits of an efficient, transparent system.
  </p>
  <div class="cta-buttons">
    <a href="#contact" class="btn">Sign Up for Free</a>
  </div>
`;
app.appendChild(ctaSection);

// 8) Contact Section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.setAttribute('data-aos', 'fade-up');
contactSection.innerHTML = `
  <h2>Contact Us</h2>
  <p>Questions? Fill out the form below and we'll get in touch.</p>
  <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="_replyto" required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit" class="btn">Send Message</button>
  </form>
`;
app.appendChild(contactSection);

// 9) Footer
const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Sweep & Sleep. All Rights Reserved.</p>
`;
app.appendChild(footer);

