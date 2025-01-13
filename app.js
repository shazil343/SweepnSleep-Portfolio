// app.js

// Grab the main container
const app = document.getElementById('app');

// 1) Create a fixed navbar (optional)
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
document.body.prepend(navbar); // Place before #app

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
        Manage rental agreements, tenant records, and property info in one place. 
        Our flexible monthly contracts give both parties the freedom to stay or move on, ensuring 
        minimal hassle and maximum control for you as a landlord.
      </p>
    </div>
    <div class="feature-card">
      <h3>Neatkeeper & Weekly Video Updates</h3>
      <p>
        Each week, a Neatkeeper visits your unit, sends a video update, and scores
        roommates on cleanliness. Say goodbye to surprise messes—stay informed and keep your 
        property pristine, even if you live far away.
      </p>
    </div>
    <div class="feature-card">
      <h3>Private Rooms & Fair Chore System</h3>
      <p>
        Tenants enjoy their own locked, private rooms in a shared environment. The 
        platform tracks weekly chores and can remove consistently underperforming roommates, 
        protecting you from chronic messes or rent issues.
      </p>
    </div>
    <div class="feature-card">
      <h3>Apartment Renter (Local Leadership)</h3>
      <p>
        Assign a lead roommate to show the unit, handle small issues, and provide 
        feedback. They get a rent discount, you get on-the-ground leadership—and fewer 
        headaches managing day-to-day tenant affairs.
      </p>
    </div>
    <div class="feature-card">
      <h3>Essential Info in One Place</h3>
      <p>
        Everything from Wi-Fi passwords to property details is centralized. This 
        all-in-one approach streamlines communication and ensures every roommate stays informed 
        about house rules, updates, and monthly schedules.
      </p>
    </div>
    <div class="feature-card">
      <h3>Flexible & Free</h3>
      <p>
        Our software is currently <strong>free</strong>—we aim to onboard more landlords 
        so they can experience the unique benefits of our system. Enjoy peace of mind and 
        enhanced control, with no financial risk.
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
      Even though I’m hours away, I’ve never had to visit in person. The weekly Neatkeeper updates 
      keep me fully informed, and tenant turnover is smooth—roommates show the place for me. 
      It’s unbelievably efficient!”
    </p>
  </div>

  <div class="testimonial">
    <h4>Mohamad, Roommate & Developer</h4>
    <p>
      “I started as just another roommate under Todd’s system, but quickly saw how powerful 
      it was to unify all property info, chores, and communication. I ended up helping develop 
      the website, and now I’m proud to say the platform runs like a well-oiled machine.”
    </p>
  </div>

  <div class="testimonial">
    <h4>Seth, Newcomer from Ukraine</h4>
    <p>
      “Since arriving in Canada, I’ve used Sweep & Sleep’s platform to find a clean, private 
      room. I also picked up some small renovation gigs for Todd, which helped me settle in 
      financially. It's a system that fosters both community and individual respect.”
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
    With over <strong>30 years</strong> of experience as a landlord, Todd Ogryzlo 
    has seen it all: late rent, poor cleanliness, troublesome tenants. His frustration led 
    him to create an approach where fairness, cleanliness, and flexibility are front and center. 
    At Sweep & Sleep, tenants pay half the rent before the new month starts and the rest on the 
    1st, ensuring stability for everyone. 
  </p>
  <p>
    Thanks to weekly Neatkeeper reports and the leadership model of an <strong>apartment renter</strong>, 
    Todd’s properties maintain high standards—and now, he wants to share that success with you. 
    No more guesswork, no more nightmares. Just a proven system that keeps your rental running 
    smoothly.
  </p>
`;
app.appendChild(founderSection);

// 7) CTA Section
const ctaSection = document.createElement('section');
ctaSection.id = 'cta';
ctaSection.innerHTML = `
  <h2>Ready to Experience Peace of Mind?</h2>
  <p>
    Join Sweep & Sleep today for a free, no-obligation trial. Discover how you can maximize 
    control and profitability by creating a secure, respectful environment for your tenants.
  </p>
  <div class="cta-buttons">
    <a href="#contact" class="btn">Sign Up for Free</a>
  </div>
`;
app.appendChild(ctaSection);

// 8) Contact Section (Optional)
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.setAttribute('data-aos', 'fade-up');
contactSection.innerHTML = `
  <h2>Contact Us</h2>
  <p>Questions about our system? Fill out the form below and we’ll get in touch.</p>
  <form action="https://formspree.io/f/your-form-id" method="POST" class="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="_replyto" required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <button type="submit">Send Message</button>
  </form>
`;
app.appendChild(contactSection);

// 9) Footer
const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Sweep & Sleep. All Rights Reserved.</p>
`;
app.appendChild(footer);

