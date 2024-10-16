const yearElement = document.getElementById("currentyear");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salta Argentina",
    location: "Salta, Argentina",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg",
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg",
  },
  
];

function displayTemples(templeArray) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  templeArray.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");
    card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq. ft.</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
    container.appendChild(card);
  });
}
displayTemples(temples);

const menuButton = document.getElementById("menu")
const navigation = document.querySelector(".navigation")

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open")
    menuButton.classList.toggle("show")
})

function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
    case "old":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() < 1900
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated).getFullYear() > 2000
      );
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
      break;
  }

  displayTemples(filteredTemples);
}

document
  .getElementById("home-filter")
  .addEventListener("click", () => filterTemples("all"));
document
  .getElementById("old-filter")
  .addEventListener("click", () => filterTemples("old"));
document
  .getElementById("new-filter")
  .addEventListener("click", () => filterTemples("new"));
document
  .getElementById("large-filter")
  .addEventListener("click", () => filterTemples("large"));
document
  .getElementById("small-filter")
  .addEventListener("click", () => filterTemples("small"));
