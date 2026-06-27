/**
 * MAIN.JS - Shared app logic for the 3D model store.
 * Handles localStorage, products, orders, inquiries, and reusable UI helpers.
 */

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Metal Kettle",
    shortDescription: "Low-poly metal kettle model",
    fullDescription: "A clean low-poly metal kettle model that works well for scenes, renders, and simple game assets.",
    price: 1.99,
    thumbnailPath: "images/kettle.jpg",
    imagePaths: ["images/kettle.jpg"],
    downloadFilePath: "downloads/MOKA_POT.zip"
  },
  {
    id: 2,
    name: "Medieval Castle",
    shortDescription: "Detailed fantasy castle model",
    fullDescription: "A detailed medieval castle with strong silhouettes for game environments or visualizations.",
    price: 49.99,
    thumbnailPath: "images/castle-thumb.jpg",
    imagePaths: [],
    downloadFilePath: "downloads/castle-model.zip"
  },
  {
    id: 3,
    name: "Spaceship Voyager",
    shortDescription: "Modern spacecraft design",
    fullDescription: "A sleek spacecraft with a polished sci-fi style, ready for games and animation scenes.",
    price: 39.99,
    thumbnailPath: "images/spaceship-thumb.jpg",
    imagePaths: [],
    downloadFilePath: "downloads/spaceship-model.zip"
  }
];

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

function getProducts() {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function getProductById(id) {
  const products = getProducts();
  return products.find((product) => String(product.id) === String(id));
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
    productId: parseInt(productId, 10),
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
    productId: parseInt(productId, 10),
    buyerName,
    buyerEmail,
    message,
    timestamp: new Date().toISOString()
  };
  inquiries.push(newInquiry);
  localStorage.setItem("inquiries", JSON.stringify(inquiries));
  return newInquiry;
}

function createProductId() {
  const products = getProducts();
  const ids = products.map((product) => Number(product.id) || 0);
  return ids.length ? Math.max(...ids) + 1 : 1;
}

function normalizeDownloadPath(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) {
    return "";
  }
  return trimmed.startsWith("downloads/") ? trimmed : `downloads/${trimmed}`;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readMultipleFilesAsDataURLs(files) {
  return Promise.all(Array.from(files || []).map((file) => readFileAsDataURL(file)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function createProductCard(product) {
  const thumbnail = product.thumbnailPath || "images/placeholder.jpg";
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${thumbnail}" alt="${escapeHtml(product.name)}" onerror="this.src='images/placeholder.jpg'">
      </div>
      <div class="product-info">
        <h3>${escapeHtml(product.name)}</h3>
        <p class="short-desc">${escapeHtml(product.shortDescription || "")}</p>
        <div class="product-footer">
          <span class="price">$${Number(product.price || 0).toFixed(2)}</span>
          <a href="product.html?id=${product.id}" class="btn-primary">View Details</a>
        </div>
      </div>
    </div>
  `;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}

function setupNavigation() {
  // Shared nav logic can be extended here if needed.
}

document.addEventListener("DOMContentLoaded", () => {
  initializeStorage();
  setupNavigation();
});
