// app.js

// Grab the main container
const app = document.getElementById('app');

// 1) Hero Section (Content over the video background)
const heroSection = document.createElement('section');
heroSection.className = 'hero-content';
heroSection.setAttribute('data-aos', 'fade-up');
heroSection.innerHTML = `
  <h1>Transform Your Rental Experience</h1>
  <p>
    At Sweep & Sleep, we’re redefining shared living by empowering landlords with complete oversight 
    and providing tenants a clean, private, and respectful environment.
  </p>
  <div id="typed-text"></div>
`;
app.appendChild(heroSection);

// 2) About Section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
aboutSection.setAttribute('data-aos', 'fade-up');
aboutSection.innerHTML = `
  <h2>About Sweep & Sleep</h2>
  <p>
    We believe that everyone deserves a clean and quiet living space. Our platform connects landlords with responsible tenants,
    offering an all-inclusive rental management system for fair, transparent, and efficient living.
  </p>
`;
app.appendChild(aboutSection);

// 3) Features Section with Modal Trigger
const featuresSection = document.createElement('section');
featuresSection.id = 'features';
featuresSection.setAttribute('data-aos', 'fade-up');
featuresSection.innerHTML = `
  <h2>Key Features</h2>
  <div class="features-list">
    <div class="feature-card">
      <h3>All-Inclusive Rental Management</h3>
      <p>
        Manage all aspects of your rental properties—contracts, tenant records, maintenance requests—in one platform.
      </p>
      <button class="btn modal-trigger" data-modal="feature1-modal">Learn More</button>
    </div>
    <!-- You can add more feature cards here -->
  </div>
`;
app.appendChild(featuresSection);

// 4) Create Modal Pop-up for Feature Details
const createModal = (modalId, contentHTML) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = modalId;
  modal.innerHTML = `
    <div class="modal-content" data-aos="fade-up">
      <button class="modal-close" aria-label="Close Modal">&times;</button>
      ${contentHTML}
    </div>
  `;
  document.body.appendChild(modal);
};
createModal('feature1-modal', `
  <h3>All-Inclusive Rental Management</h3>
  <p>
    Our platform enables seamless management of rental agreements, tenant records, and property details in a single system.
  </p>
  <img src="images/background.png" alt="Feature Image">
`);

// Open modals
document.querySelectorAll('.modal-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
    }
  });
});
// Close modals
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('active');
  });
});

// 5) Testimonial Slider Section using Swiper
const testimonialSection = document.createElement('section');
testimonialSection.id = 'testimonials';
testimonialSection.setAttribute('data-aos', 'fade-up');
testimonialSection.innerHTML = `
  <h2>Success Stories</h2>
  <div class="swiper-container testimonial-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <h4>Shazil, Landlord in Calgary</h4>
        <p>
          “Sweep & Sleep keeps me informed with weekly updates and stress-free tenant management.”
        </p>
      </div>
      <div class="swiper-slide">
        <h4>Seth, Roommate</h4>
        <p>
          “I found a clean, private room and even connected with local work opportunities.”
        </p>
      </div>
    </div>
    <!-- Navigation buttons (optional) -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
`;
app.appendChild(testimonialSection);

// Initialize Swiper after content loads
setTimeout(() => {
  const swiper = new Swiper('.swiper-container', {
    autoplay: { delay: 5000 },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 500);

// 6) Founder Section
const founderSection = document.createElement('section');
founderSection.id = 'founder';
founderSection.setAttribute('data-aos', 'fade-up');
founderSection.innerHTML = `
  <h2>Meet Todd – Our Founder</h2>
  <p>
    With over 30 years of experience as a landlord, Todd Ogryzlo revolutionized rental management 
    to create a fair, transparent system that works for everyone.
  </p>
  <img src="images/Todd.jpg" alt="Todd" style="max-width:200px; border-radius:8px;">
`;
app.appendChild(founderSection);

// 7) CTA Section
const ctaSection = document.createElement('section');
ctaSection.id = 'cta';
ctaSection.innerHTML = `
  <h2>Ready to Experience Peace of Mind?</h2>
  <p>
    Join Sweep & Sleep today for a free trial and discover the benefits of an efficient, transparent rental system.
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
  <p>Questions? Fill out the form below and we’ll get in touch.</p>
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


