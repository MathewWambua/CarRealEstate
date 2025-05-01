// Sample property data (replace with dynamic data from localStorage or a backend)
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
  
  // Function to handle the form submission (e.g., adding a property to the saved list)
  function handlePropertyFormSubmit(event) {
    event.preventDefault();
    
    const propertyName = document.querySelector('#propertyName').value;
    const propertyLocation = document.querySelector('#propertyLocation').value;
    const propertyPrice = document.querySelector('#propertyPrice').value;
    const propertyDescription = document.querySelector('#propertyDescription').value;
    const propertyImage = document.querySelector('#propertyImage').value;
    
    // Validate form inputs
    if (propertyName && propertyLocation && propertyPrice && propertyDescription && propertyImage) {
      const newProperty = {
        name: propertyName,
        location: propertyLocation,
        price: propertyPrice,
        image: propertyImage,
        description: propertyDescription
      };
      
      // Save the new property to the properties array
      properties.push(newProperty);
      
      // Optionally, store it in localStorage for persistence
      localStorage.setItem('properties', JSON.stringify(properties));
      
      // Re-render property listings
      renderPropertyListings();
      
      // Reset the form
      resetPropertyForm();
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Function to reset the property form
  function resetPropertyForm() {
    const form = document.querySelector('#propertyForm');
    if (form) {
      form.reset();
    }
  }
  
  // Function to handle page load logic
  function onPageLoad() {
    // Render the initial property listings
    renderPropertyListings();
    
    // Attach event listener for the property form submission
    const form = document.querySelector('#propertyForm');
    if (form) {
      form.addEventListener('submit', handlePropertyFormSubmit);
    }
    
    // Optionally, load data from localStorage if properties were saved before
    const storedProperties = localStorage.getItem('properties');
    if (storedProperties) {
      const parsedProperties = JSON.parse(storedProperties);
      properties.length = 0; // Clear current properties array
      properties.push(...parsedProperties); // Load the stored properties back
      renderPropertyListings(); // Re-render the listings with the stored data
    }
  }
  
  // Wait for the DOM to fully load before executing the page load logic
  document.addEventListener('DOMContentLoaded', onPageLoad);
  