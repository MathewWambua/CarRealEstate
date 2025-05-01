// Sample car data
const carList = [
  {
    id: 1,
    make: "Tesla",
    model: "Model S",
    year: 2025,
    price: "$80,000",
    mileage: "10,000 miles",
    imageUrl: "/images/download (7).jpg",
    description: "A high-performance electric sedan with cutting-edge technology."
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang",
    year: 2024,
    price: "$45,000",
    mileage: "5,000 miles",
    imageUrl: "/images/download (6).jpg",
    description: "An iconic American muscle car with a powerful engine."
  },
  {
    id: 3,
    make: "BMW",
    model: "M3",
    year: 2023,
    price: "$70,000",
    mileage: "8,000 miles",
    imageUrl: "/images/download (5).jpg",
    description: "A luxury sports sedan that combines performance and comfort."
  }
];

// Render listings
const container = document.getElementById("car-list");
carList.forEach(car => {
  const div = document.createElement("div");
  div.className = "listing-item";
  div.innerHTML = `
    <img src="${car.imageUrl}" alt="${car.make} ${car.model}" />
    <h3>${car.year} ${car.make} ${car.model}</h3>
    <p><strong>Price:</strong> ${car.price}</p>
    <p><strong>Mileage:</strong> ${car.mileage}</p>
    <p>${car.description}</p>
    <button class="btn">View Details</button>
  `;
  container.appendChild(div);
});
