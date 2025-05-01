// Function to toggle the visibility of an element (useful for modals, error messages, etc.)
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
  }
  
  // Function to validate if an input is empty (for form validation)
  function isEmpty(input) {
    return input.trim() === '';
  }
  
  // Function to show an error message for form validation
  function showErrorMessage(message, elementId) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
  
    const element = document.getElementById(elementId);
    if (element) {
      element.appendChild(errorElement);
    }
  }
  
  // Function to clear all error messages
  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
      error.remove();
    });
  }
  
  // Function to retrieve data from localStorage by key
  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  // Function to save data to localStorage with a specific key
  function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Function to validate form input (general form validation)
  function validateForm(inputs) {
    let isValid = true;
    clearErrorMessages();
  
    inputs.forEach(input => {
      if (isEmpty(input.value)) {
        isValid = false;
        showErrorMessage(`${input.name} is required.`, input.id);
      }
    });
  
    return isValid;
  }
  
  // Function to initialize or reset the form
  function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
      form.reset();
    }
  }
  
  // Function to handle page load activities (like initializing common functionalities)
  function onPageLoad() {
    // Example: Check if user is logged in (this is just a placeholder for actual logic)
    const user = getDataFromLocalStorage('user');
    if (user) {
      // Show logged-in user's name or other actions
      console.log('User is logged in:', user.name);
    }
  
    // Additional initialization tasks can be added here
  }
  
  // Event listener for page load
  document.addEventListener('DOMContentLoaded', onPageLoad);
  