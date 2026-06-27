/**
 * MAIN.JS - Shared app logic for the 3D model store.
 * Uses Firebase Firestore instead of localStorage so the store is shared.
 */

const firebaseConfig = {
  apiKey: "AIzaSyAlnOyNqYSW7JJNZEMr8iTQgaS6-7lhWIU",
  authDomain: "pablo-store-45338.firebaseapp.com",
  projectId: "pablo-store-45338",
  storageBucket: "pablo-store-45338.firebasestorage.app",
  messagingSenderId: "879023640155",
  appId: "1:879023640155:web:97a6b78905957ca908f97e",
  measurementId: "G-L7XFXH0MFY"
};

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

let db = null;

function initializeFirebase() {
  if (db) {
    return Promise.resolve(db);
  }

  if (typeof firebase === "undefined") {
    throw new Error("Firebase SDK is not loaded.");
  }

  const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
  db = app.firestore();
  return Promise.resolve(db);
}

async function initializeStorage() {
  await initializeFirebase();
  const products = await getProducts();
  if (!products.length) {
    await seedSampleProducts();
  }
}

async function seedSampleProducts() {
  if (!db) {
    await initializeFirebase();
  }

  const batch = db.batch();
  SAMPLE_PRODUCTS.forEach((product) => {
    const ref = db.collection("products").doc(String(product.id));
    batch.set(ref, {
      ...product,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
}

async function getProducts() {
  await initializeFirebase();
  const snapshot = await db.collection("products").get();
  return snapshot.docs.map((doc) => ({ id: Number(doc.id), ...doc.data() }));
}

async function saveProducts(products) {
  await initializeFirebase();
  const batch = db.batch();
  products.forEach((product) => {
    const ref = db.collection("products").doc(String(product.id));
    batch.set(ref, {
      ...product,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  });
  await batch.commit();
}

async function getProductById(id) {
  await initializeFirebase();
  const ref = await db.collection("products").doc(String(id)).get();
  return ref.exists ? { id: Number(ref.id), ...ref.data() } : null;
}

async function deleteProductById(id) {
  await initializeFirebase();
  await db.collection("products").doc(String(id)).delete();
}

async function getOrders() {
  await initializeFirebase();
  const snapshot = await db.collection("orders").orderBy("timestamp", "desc").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function getInquiries() {
  await initializeFirebase();
  const snapshot = await db.collection("inquiries").orderBy("timestamp", "desc").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function addOrder(productId, buyerName, buyerEmail) {
  await initializeFirebase();
  const payload = {
    productId: Number(productId),
    buyerName,
    buyerEmail,
    timestamp: new Date().toISOString(),
    downloadUnlocked: true
  };
  const ref = await db.collection("orders").add(payload);
  return { id: ref.id, ...payload };
}

async function addInquiry(productId, buyerName, buyerEmail, message) {
  await initializeFirebase();
  const payload = {
    productId: Number(productId),
    buyerName,
    buyerEmail,
    message,
    timestamp: new Date().toISOString()
  };
  const ref = await db.collection("inquiries").add(payload);
  return { id: ref.id, ...payload };
}

async function createProductId() {
  const products = await getProducts();
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
  initializeStorage().catch((error) => {
    console.error("Firestore initialization failed", error);
  });
  setupNavigation();
});
