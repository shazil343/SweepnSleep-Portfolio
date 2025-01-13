// Get a reference to the main container
const app = document.getElementById('app');

// Create and append the header section
const header = document.createElement('header');
header.innerHTML = `
  <h1>Welcome to Sweep and Sleep!</h1>
  <p>
    At Sweep and Sleep, we are dedicated to providing a fair and transparent service for everyone involved.
    We understand the importance of living in a clean and quiet environment and we are committed to connecting
    landlords with responsible and respectful roommates. We look forward to helping you find the perfect living
    environment.
  </p>
`;
app.appendChild(header);

// Create and append the About section
const aboutSection = document.createElement('section');
aboutSection.id = 'about';
aboutSection.innerHTML = `
  <h2>About Us</h2>
  <p>
    Together, Todd and Mohamad have combined their expertise to create Sweep and Sleep, a platform that offers a 
    clean and quiet living environment, private and locked rooms, and a suite of tools for landlords to manage 
    their rental properties. We are dedicated to ensuring a fair and transparent service for every client.
  </p>
`;
app.appendChild(aboutSection);

// Create and append the Team section
const teamSection = document.createElement('section');
teamSection.id = 'team';
teamSection.innerHTML = `<h2>Our Team</h2>`;
  
// Data for team members
const teamMembers = [
  {
    name: "Todd Ogryzlo",
    role: "Founder",
    description: "Todd is a landlord who has years of experience managing rental properties. He understands the challenges landlords face in finding responsible and respectful tenants. He has used his experience to provide landlords with the tools they need to manage their properties efficiently.",
  }
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

// (Optional) You can add more sections here as needed
