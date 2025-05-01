document.getElementById("listingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
  
    const type = document.getElementById("type").value.trim();
    const title = document.getElementById("title").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").value.trim();
  
    // Validate all required fields
    if (!type || !title || !description || !image || isNaN(price)) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    // ✅ Price must be greater than zero
    if (price <= 0) {
      alert("Price must be greater than zero.");
      return;
    }
  
    const listing = { type, title, price, description, image };
    const listings = JSON.parse(localStorage.getItem("listings") || "[]");
    listings.push(listing);
    localStorage.setItem("listings", JSON.stringify(listings));
  
    alert("Listing submitted successfully!");
    document.getElementById("listingForm").reset();
  });
  