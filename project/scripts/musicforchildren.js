const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = "Last Modification: " + document.lastModified;

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

const cardContent = [
  [
    {
      title: "Introducing Instruments",
      description: "Discover the best ways to introduce musical instruments to young children, making learning fun and engaging.",
      image: "https://images.pexels.com/photos/3662762/pexels-photo-3662762.jpeg?w=500&h=300",
      link: "#introducing-instruments"
    },
    {
      title: "Easy Songs for Kids",
      description: "Explore a collection of simple and fun songs to teach your child, promoting musical development and creativity.",
      image: "https://images.pexels.com/photos/4708908/pexels-photo-4708908.jpeg?w=500&h=300",
      link: "#easy-songs-for-kids"
    },
    {
      title: "Music Games and Activities",
      description: "Find out how to make music learning a playful experience with interactive games and activities for kids.",
      image: "https://images.pexels.com/photos/6743148/pexels-photo-6743148.jpeg?w=500&h=300",
      link: "#music-games-and-activities"
    },
    {
      title: "Benefits of Music Education",
      description: "Learn about the importance of music education in a child's cognitive, emotional, and social development.",
      image: "https://images.pexels.com/photos/6647430/pexels-photo-6647430.jpeg?w=500&h=300",
      link: "#benefits-of-music-education"
    },
    {
      title: "Teaching Music Theory",
      description: "Get tips and resources on how to teach music theory to children in a way that's both fun and easy to understand.",
      image: "https://images.pexels.com/photos/7521308/pexels-photo-7521308.jpeg?w=500&h=300",
      link: "#teaching-music-theory"
    },
    {
      title: "Creating a Musical Environment",
      description: "Discover how to create a nurturing environment that encourages children to explore and appreciate music.",
      image: "https://images.pexels.com/photos/8191573/pexels-photo-8191573.jpeg?w=500&h=300",
      link: "#creating-a-musical-environment"
    }
  ]
];

const array = cardContent[0];

const cardSelect = document.getElementById("content");

array.forEach((content) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.description}</p>
    <img src="${content.image}" alt="${content.title}" class="card-image" loading="lazy"/>
    <a href="${content.link}">Read more</a>
  `;
  cardSelect.appendChild(card);
});
