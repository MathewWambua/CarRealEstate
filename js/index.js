// Sample car data (you can replace this with dynamic data from localStorage or a backend)
const cars = [
  {
    "name": "2025 Tesla Model S",
    "price": "$80,000",
      "mileage": "10,000 miles",
      "location": "Nairobi",
      "image": "/images/download (5).jpg"
  },
  {
    "name": "2024 ford Mustang",
    "price": "$45,000",
      "mileage": "5,000 miles",
      "location": "Accra",
      "image": "/images/download (6).jpg"
  }
  {
      "name": "2023 BMW M3",
      "price": "$70,000",
      "mileage": "8,000 miles",
      "location": "Lagos",
      "image": "/images/download (7).jpg"
  }
  ];
  
  // Sample property data (again, can be replaced with dynamic data)
  const properties = [
    {
      name: "Luxury Villa",
      location: "California, USA",
      price: "$1,200,000",
      image: "images/luxury-villa.jpg",
      description: "A stunning villa with ocean views and modern amenities."
    },
    {
      name: "City Apartment",
      location: "New York, USA",
      price: "$850,000",
      image: "images/city-apartment.jpg",
      description: "A modern apartment located in the heart of the city."
    },
    {
      name: "Mountain Retreat",
      location: "Colorado, USA",
      price: "$650,000",
      image: "images/mountain-retreat.jpg",
      description: "A cozy retreat nestled in the mountains with amazing views."
    }
  ];
  
  // Function to render car listings
  function renderCarListings() {
    const carContainer = document.querySelector('.car-listing-container');
    carContainer.innerHTML = ''; // Clear any existing car listings
    
    cars.forEach(car => {
      // Create car card
      const carCard = document.createElement('div');
      carCard.classList.add('listing-card');
      
      const carImage = document.createElement('img');
      carImage.src = car.image;
      carImage.alt = car.name;
      
      const carName = document.createElement('h4');
      carName.textContent = car.name;
      
      const carModel = document.createElement('p');
      carModel.textContent = `Model: ${car.model}`;
      
      const carPrice = document.createElement('p');
      carPrice.classList.add('price');
      carPrice.textContent = car.price;
      
      const carDescription = document.createElement('p');
      carDescription.textContent = car.description;
      
      // Append elements to the car card
      carCard.appendChild(carImage);
      carCard.appendChild(carName);
      carCard.appendChild(carModel);
      carCard.appendChild(carPrice);
      carCard.appendChild(carDescription);
      
      // Append the car card to the container
      carContainer.appendChild(carCard);
    });
  }
  
  // Function to render property listings
  function renderPropertyListings() {
    const propertyContainer = document.querySelector('.property-listing-container');
    propertyContainer.innerHTML = ''; // Clear any existing property listings
    
    properties.forEach(property => {
      // Create property card
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('listing-card');
      
      const propertyImage = document.createElement('img');
      propertyImage.src = property.image;
      propertyImage.alt = property.name;
      
      const propertyName = document.createElement('h4');
      propertyName.textContent = property.name;
      
      const propertyLocation = document.createElement('p');
      propertyLocation.textContent = `Location: ${property.location}`;
      
      const propertyPrice = document.createElement('p');
      propertyPrice.classList.add('price');
      propertyPrice.textContent = property.price;
      
      const propertyDescription = document.createElement('p');
      propertyDescription.textContent = property.description;
      
      // Append elements to the property card
      propertyCard.appendChild(propertyImage);
      propertyCard.appendChild(propertyName);
      propertyCard.appendChild(propertyLocation);
      propertyCard.appendChild(propertyPrice);
      propertyCard.appendChild(propertyDescription);
      
      // Append the property card to the container
      propertyContainer.appendChild(propertyCard);
    });
  }
  
  // Function to handle the form submission (optional)
  function handleSubmitForm(event) {
    event.preventDefault();
    
    // Example: Process form data here (e.g., for a contact form or registration form)
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    
    if (userName && userEmail) {
      alert(`Thank you, ${userName}. We will get in touch with you at ${userEmail}.`);
      
      // Optionally store form data in localStorage or a database
      localStorage.setItem('userName', userName);
      localStorage.setItem('userEmail', userEmail);
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Function to handle the page load logic
  function onPageLoad() {
    renderCarListings(); // Render the car listings
    renderPropertyListings(); // Render the property listings
    
    // Attach event listeners for any forms
    const form = document.querySelector('#contactForm');
    if (form) {
      form.addEventListener('submit', handleSubmitForm);
    }
    
    // Optionally, load data from localStorage (e.g., check if the user is logged in)
    const userName = localStorage.getItem('userName');
    if (userName) {
      document.querySelector('.welcome-message').textContent = `Welcome, ${userName}!`;
    }
  }
  
  // Wait for the DOM to fully load before executing the page load logic
  document.addEventListener('DOMContentLoaded', onPageLoad);
  