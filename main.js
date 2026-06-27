/**
 * MAIN.JS - Shared JavaScript Logic
 * Handles: localStorage, navigation, UI interactions
 */

// ============================================================
// SAMPLE PRODUCTS DATA
// Edit this array to add new products
// ============================================================
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Sci-Fi Robot",
    shortDescription: "Futuristic humanoid robot model",
    fullDescription: "Highly detailed sci-fi robot with moving parts. Perfect for games, visualizations, and renders. Includes textures and materials.",
    price: 29.99,
    thumbnailPath: "images/robot-thumb.jpg",
    imagePaths: [
      "images/model1.png",
      "images/robot-2.jpg",
      "images/robot-3.jpg"
    ],
    downloadFilePath: "downloads/robot-model.zip"
  },
  {
    id: 2,
    name: "Medieval Castle",
    shortDescription: "Detailed fantasy castle model",
    fullDescription: "Complete medieval castle with high polygon count. Includes interior and exterior details, perfect for game environments or architectural visualization.",
    price: 49.99,
    thumbnailPath: "images/castle-thumb.jpg",
    imagePaths: [
      "images/castle-1.jpg",
      "images/castle-2.jpg"
    ],
    downloadFilePath: "downloads/castle-model.zip"
  },
  {
    id: 3,
    name: "Spaceship Voyager",
    shortDescription: "Modern space exploration vessel",
    fullDescription: "Sleek spacecraft design with detailed interior. Great for sci-fi projects, games, and 3D animation. Fully rigged and textured.",
    price: 39.99,
    thumbnailPath: "images/spaceship-thumb.jpg",
    imagePaths: [
      "images/spaceship-1.jpg",
      "images/spaceship-2.jpg",
      "images/spaceship-3.jpg"
    ],
    downloadFilePath: "downloads/spaceship-model.zip"
  }
];

// ============================================================
// INITIALIZE LOCALSTORAGE WITH SAMPLE DATA
// ============================================================
function initializeStorage() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(SAMPLE_PRODUCTS));
  }

  if (!localStorage.getItem("orders")) {
    localStorage.setItem("orders", JSON.stringify([]));
  }

  if (!localStorage.getItem("inquiries")) {
    localStorage.setItem("inquiries", JSON.stringify([]));
  }
}

// ============================================================
// UTILITY FUNCTIONS - LocalStorage
// ============================================================

function getProducts() {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
}

function getProductById(id) {
  return getProducts().find(p => p.id == id);
}

function getOrders() {
  const data = localStorage.getItem("orders");
  return data ? JSON.parse(data) : [];
}

function getInquiries() {
  const data = localStorage.getItem("inquiries");
  return data ? JSON.parse(data) : [];
}

function addOrder(productId, buyerName, buyerEmail) {
  const orders = getOrders();
  const newOrder = {
    id: Date.now(),
    productId: parseInt(productId),
    buyerName,
    buyerEmail,
    timestamp: new Date().toISOString(),
    downloadUnlocked: true
  };
  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));
  return newOrder;
}

function addInquiry(productId, buyerName, buyerEmail, message) {
  const inquiries = getInquiries();
  const newInquiry = {
    id: Date.now(),
    productId: parseInt(productId),
    buyerName,
    buyerEmail,
    message,
    timestamp: new Date().toISOString()
  };
  inquiries.push(newInquiry);
  localStorage.setItem("inquiries", JSON.stringify(inquiries));
  return newInquiry;
}

// ============================================================
// UTILITY FUNCTIONS - DOM & UI
// ============================================================

function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.thumbnailPath}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="short-desc">${product.shortDescription}</p>
        <div class="product-footer">
          <span class="price">$${product.price.toFixed(2)}</span>
          <a href="product-${product.id}.html" class="btn-primary">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

// ============================================================
// NAVIGATION
// ============================================================

function setupNavigation() {
  // This function can be expanded to add dynamic nav items
  // For now, it's a placeholder for shared nav logic
}

// ============================================================
// INIT ON PAGE LOAD
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initializeStorage();
  setupNavigation();
});
