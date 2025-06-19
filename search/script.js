const hotels = [
  {
    name: "Ocean View Resort",
    location: "Goa",
    price: "₹4500/night",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21057"
  },
  {
    name: "Himalayan Lodge",
    location: "Manali",
    price: "₹3200/night",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1606312619344-cd3a4b9a5940"
  },
  {
    name: "City Lights Hotel",
    location: "Mumbai",
    price: "₹5800/night",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1590490360188-0e5c6bd26e47"
  }
];

function searchHotels() {
  const location = document.getElementById("location").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = '';

  const filtered = hotels.filter(hotel =>
    hotel.location.toLowerCase().includes(location)
  );

  if (filtered.length === 0) {
    results.innerHTML = "<p>No hotels found.</p>";
    return;
  }

  filtered.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${hotel.image}" alt="${hotel.name}" />
      <div class="card-content">
        <h3>${hotel.name}</h3>
        <p>${hotel.location}</p>
        <p>${hotel.price}</p>
        <p>⭐ ${hotel.rating}</p>
      </div>
    `;
    results.appendChild(card);
  });
}
