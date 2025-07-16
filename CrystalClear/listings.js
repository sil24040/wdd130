const properties = [
  {
    id: "camden",
    title: "Spacious Room in Camden",
    location: "Camden, London",
    price: "£1,200/month",
    availability: "Available from May 2025",
    description: "Beautifully renovated studio in London's vibrant Camden district.",
    images: ["laxelyclose.jpg", "images/laxely2.jpeg"]
  },
  {
    id: "soho",
    title: "Modern Studio in Soho",
    location: "Soho, London",
    price: "£950/month",
    availability: "Available now",
    description: "Large bedroom with ensuite bathroom in a shared house in Soho.",
    images: ["images/studio1.png", "images/studio2.jpeg"]
  },
  {
    id: "central-london",
    title: "One Bed Apartment",
    location: "Central London",
    price: "£1,500/month",
    availability: "Available from June 2025",
    description: "One-bedroom apartment in Central London, perfect for professionals.",
    images: ["images/collegepark.jpg", "images/bathroom1.png", "images/bedroom1.png"]
  },
  {
    id: "riverside",
    title: "Riverside View Apartment",
    location: "River Thames, London",
    price: "£2,000/month",
    availability: "Available from April 2025",
    description: "Modern apartment with stunning river views in the heart of London.",
    images: ["images/viewing1.jpeg", "images/viewing2.jpeg", "images/viewing3.jpeg"]
  }
];

let slideIndexes = [];

function renderProperties() {
  const container = document.getElementById("propertyContainer");
  container.innerHTML = "";

  properties.forEach((property, index) => {
    const card = document.createElement("div");
    card.classList.add("property-card");
    card.id = property.id;

    const slideContainer = document.createElement("div");
    slideContainer.classList.add("property-slide-container");

    property.images.forEach((img, i) => {
      const image = document.createElement("img");
      image.src = img;
      image.alt = property.title;
      image.className = `property-slides slide-${index}`;
      image.style.display = i === 0 ? "block" : "none";
      slideContainer.appendChild(image);
    });

    const prev = document.createElement("button");
    prev.className = "property-prev";
    prev.innerHTML = "&#10094;";
    prev.onclick = () => plusSlides(-1, index);
    slideContainer.appendChild(prev);

    const next = document.createElement("button");
    next.className = "property-next";
    next.innerHTML = "&#10095;";
    next.onclick = () => plusSlides(1, index);
    slideContainer.appendChild(next);

    const info = document.createElement("div");
    info.classList.add("property-info");
    info.innerHTML = `
      <h3>${property.title}</h3>
      <p><strong>Location:</strong> ${property.location}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Availability:</strong> ${property.availability}</p>
      <p>${property.description}</p>
    `;

    card.appendChild(slideContainer);
    card.appendChild(info);
    container.appendChild(card);

    slideIndexes[index] = 0;
  });
}

function plusSlides(n, index) {
  const slides = document.getElementsByClassName(`slide-${index}`);
  slideIndexes[index] = (slideIndexes[index] + n + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexes[index]].style.display = "block";
}

document.addEventListener("DOMContentLoaded", renderProperties);