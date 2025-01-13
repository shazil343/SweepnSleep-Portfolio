// app.js

// 1. Grab the main container
const app = document.getElementById('app');

// 2. Create NAVBAR (optional)
const navbar = document.createElement('nav');
navbar.className = 'navbar';
navbar.innerHTML = `
  <div class="nav-container">
    <div class="nav-logo">Sweep and Sleep</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
`;
document.body.prepend(navbar); // Insert at top

// 3. Create Hero Header
const header = document.createElement('header');
header.innerHTML = `
  <h1 data-aos="fade-up">Welcome to Sweep and Sleep!</h1>
  <p data-aos="fade-up" data-aos-delay="100">
    At Sweep and Sleep, we are dedicated to providing a fair and transparent service for everyone involved.
    We understand the importance of living in a clean and quiet environment and we are committed to connecting
    landlords with responsible and respectful roommates. We look forward to helping you find the perfect living
    environment.
  </p>
`;
app.appendChild(header);

// 4. About Section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
aboutSection.setAttribute('data-aos', 'fade-up');
aboutSection.innerHTML = `
  <h2>About Us</h2>
  <p>
    Together, Todd and Mohamad have combined their expertise to create Sweep and Sleep, a platform that offers a 
    clean and quiet living environment, private and locked rooms, and a suite of tools for landlords to manage 
    their rental properties. We are dedicated to ensuring a fair and transparent service for every client.
  </p>
`;
app.appendChild(aboutSection);

// 5. Team Section
const teamSection = document.createElement('section');
teamSection.id = 'team';
teamSection.setAttribute('data-aos', 'fade-up');
teamSection.innerHTML = `<h2>Our Team</h2>`;

// Data for team members
const teamMembers = [
  {
    name: "Todd Ogryzlo",
    role: "Founder",
    image: "images/todd.png", // Update with actual image path
    description: "Todd is a landlord who has years of experience managing rental properties. He understands the challenges landlords face in finding responsible and respectful tenants. He has used his experience to provide landlords with the tools they need to manage their properties efficiently.",
  },
  {
    name: "Mohamad",
    role: "Co-Founder",
    image: "images/mohamad.png", // Update with actual image path
    description: "Mohamad brings his passion for creating streamlined user experiences to Sweep and Sleep. He is dedicated to ensuring that our platform is intuitive, fair, and meets the needs of both landlords and roommates.",
  },
];

// Create a container for team members
const teamContainer = document.createElement('div');
teamContainer.className = 'team-container';

// Loop over team members and create a card for each
teamMembers.forEach(member => {
  const memberDiv = document.createElement('div');
  memberDiv.className = 'team-member';
  memberDiv.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <div class="member-info">
      <h3>${member.name}</h3>
      <h4>${member.role}</h4>
      <p>${member.description}</p>
    </div>
  `;
  teamContainer.appendChild(memberDiv);
});
teamSection.appendChild(teamContainer);
app.appendChild(teamSection);

// 6. Contact Section
const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.setAttribute('data-aos', 'fade-up');
contactSection.innerHTML = `
  <h2>Contact Us</h2>
  <p>
    Have questions or want to learn more about our service? Feel free to reach out.
  </p>
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

// 7. Footer
const footer = document.createElement('footer');
footer.innerHTML = `
  <p>&copy; ${new Date().getFullYear()} Sweep and Sleep. All Rights Reserved.</p>
`;
app.appendChild(footer);
