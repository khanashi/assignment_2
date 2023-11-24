// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample categories data from books.json (you should replace this with actual data)
    const categories = ["Fiction", "Dystopian", "Classic", "Science Fiction", "Mystery"];
  
    // Function to populate the dropdown menu with categories
    function populateCategories() {
      const categoryDropdown = document.getElementById("category-dropdown");
  
      categories.forEach(category => {
        const categoryLink = document.createElement("a");
        categoryLink.textContent = category;
        categoryLink.href = `#category-${category.toLowerCase()}`;
        categoryDropdown.appendChild(categoryLink);
      });
    }
  
    // Call the function to populate categories
    populateCategories();
  });
// categories.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample data (replace with actual data from your books.json file)
    const books = [
      {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "price": 12.99,
        "description": "Classic novel set in the American South during the 1930s.",
        "cover_image": "images/to_kill_a_mockingbird.jpg"
      },
      {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "category": "Dystopian",
        "price": 9.99,
        "description": "Classic dystopian novel about totalitarianism and surveillance.",
        "cover_image": "images/1984.jpg"
      },
      {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Classic",
        "price": 11.50,
        "description": "A story of the Jazz Age and the American Dream.",
        "cover_image": "images/great_gatsby.jpg"
      },
      {
        "id": 4,
        "title": "Moby-Dick",
        "author": "Herman Melville",
        "category": "Classic",
        "price": 13.25,
        "description": "Novel about the voyage of the whaling ship Pequod.",
        "cover_image": "images/moby_dick.jpg"
      },
      {
        "id": 5,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "category": "Science Fiction",
        "price": 10.75,
        "description": "A dystopian social science fiction novel.",
        "cover_image": "images/brave_new_world.jpg"
      },
      {
        "id": 6,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Classic",
        "price": 9.99,
        "description": "Classic romantic novel of manners.",
        "cover_image": "images/pride_and_prejudice.jpg"
      },
      // Add more books here
    ];
  
    // Function to populate book details
    function populateBooks(category) {
      const categoryDiv = document.querySelector(`#${category.toLowerCase()}`);
      if (!categoryDiv) return;
  
      books.forEach(book => {
        if (book.category === category) {
          const bookDiv = document.createElement("div");
          bookDiv.classList.add("book");
          bookDiv.innerHTML = `
            <img src="${book.cover_image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: $${book.price.toFixed(2)}</p>
          `;
          categoryDiv.appendChild(bookDiv);
        }
      });
    }
  
    // Call the function to populate book details for each category
    categories.forEach(category => {
      populateBooks(category);
    });
  });
    // cart.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample cart data (replace with actual data from your cart)
    const cartItems = [
      { id: 1, title: "To Kill a Mockingbird", price: 12.99, quantity: 2 },
      // Add more items here
    ];
  
    // Function to populate the cart and calculate total amount
    function populateCart() {
      const cartDiv = document.querySelector(".cart");
      const totalAmountSpan = document.getElementById("total-amount");
  
      let total = 0;
  
      cartItems.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
          <h3>${item.title}</h3>
          <p>Price: $${item.price.toFixed(2)}</p>
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" value="${item.quantity}">
          <button class="remove-item">Remove</button>
        `;
  
        const quantityInput = cartItemDiv.querySelector("#quantity");
  
        quantityInput.addEventListener("input", function() {
          // Update the quantity and recalculate the total
          item.quantity = parseInt(quantityInput.value);
          total = calculateTotal();
          totalAmountSpan.textContent = total.toFixed(2);
        });
  
        const removeButton = cartItemDiv.querySelector(".remove-item");
        removeButton.addEventListener("click", function() {
          // Remove the item and recalculate the total
          const index = cartItems.indexOf(item);
          cartItems.splice(index, 1);
          cartDiv.removeChild(cartItemDiv);
          total = calculateTotal();
          totalAmountSpan.textContent = total.toFixed(2);
        });
  
        cartDiv.appendChild(cartItemDiv);
  
        // Calculate the initial total
        total += item.price * item.quantity;
      });
  
      totalAmountSpan.textContent = total.toFixed(2);
    }
  
    function calculateTotal() {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    // Call the function to populate the cart and calculate total amount
    populateCart();
  });
  // payment.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample cart data (replace with actual data from your cart)
    const cartItems = [
      { id: 1, title: "To Kill a Mockingbird", price: 12.99, quantity: 2 },
      // Add more items here
    ];
  
    const paymentReceipt = document.querySelector(".payment-receipt");
    const returnLink = document.querySelector(".return-link");
  
    // Function to populate the payment receipt
    function populatePaymentReceipt() {
      let total = 0;
  
      paymentReceipt.innerHTML = `
        <h2>Payment Receipt</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
      `;
  
      cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
  
        paymentReceipt.innerHTML += `
          <tr>
            <td>${item.title}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
          </tr>
        `;
      });
  
      paymentReceipt.innerHTML += `
          </tbody>
        </table>
        <p>Total Amount: $${total.toFixed(2)}</p>
      `;
    }
  
    // Call the function to populate the payment receipt
    populatePaymentReceipt();
  });
  // contact.js
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Send the form data for processing (you can implement this part as needed)
      console.log("Name: " + name);
      console.log("Email: " + email);
      console.log("Message: " + message);
      alert("Thank you for your message!");
      contactForm.reset();
    });
  });
  fetch('books.json')
  .then(response => response.json())
  .then(data => displayBooks(data))
  .catch(error => console.error('Error:', error));

function displayBooks(books) {
  const bookListSection = document.getElementById('bookList');
  
  books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    const coverImage = document.createElement('img');
    coverImage.src = book.cover_image;
    coverImage.alt = book.title;

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const category = document.createElement('p');
    category.textContent = `Category: ${book.category}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${book.price}`;

    bookCard.appendChild(coverImage);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(category);
    bookCard.appendChild(price);

    bookListSection.appendChild(bookCard);
  });
}
  