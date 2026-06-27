# 3D Model Store - GitHub Pages E-Commerce Site

A modern, static e-commerce website for selling downloadable 3D models. Built with pure HTML, CSS, and vanilla JavaScript. No backend required!

## 🚀 Features

✅ **Product Catalog** - Beautiful grid layout with product cards
✅ **Product Pages** - Detailed product views with image galleries
✅ **Shopping Cart & Checkout** - Simple checkout process
✅ **Stripe Integration Ready** - Placeholder for Stripe payment links
✅ **Customer Inquiries** - Per-product contact forms
✅ **Admin Dashboard** - View orders and messages
✅ **Local Storage** - All data saved in browser (no backend needed)
✅ **Mobile Responsive** - Works on all devices
✅ **Dark Modern Design** - Professional tech aesthetic

## 📁 Project Structure

```
pablo_site/
├── index.html              # Catalog / Home page
├── product-1.html          # Product detail page (example)
├── product-2.html          # Product detail page (example)
├── product-3.html          # Product detail page (example)
├── checkout.html           # Checkout & purchase page
├── admin.html              # Admin dashboard (hidden from nav)
├── style.css               # Main stylesheet
├── main.js                 # Shared JavaScript logic
├── downloads/              # Folder for downloadable model files
│   └── README.txt          # Instructions for adding files
└── images/                 # Folder for product images
    ├── robot-thumb.jpg
    ├── robot-1.jpg
    ├── robot-2.jpg
    └── ...
```

## 🛠️ Setup Instructions

### 1. **Add Your Images**
Place product images in the `images/` folder:
- Thumbnail images (smaller, for the catalog grid)
- Full-size product images (for the detail pages)

Example naming:
```
images/
├── robot-thumb.jpg
├── robot-1.jpg
├── robot-2.jpg
├── castle-thumb.jpg
├── castle-1.jpg
└── spaceship-thumb.jpg
```

### 2. **Add Your 3D Model Files**
Place downloadable ZIP files in the `downloads/` folder:
```
downloads/
├── robot-model.zip
├── castle-model.zip
└── spaceship-model.zip
```

### 3. **Configure Products**
Edit `main.js` and update the `SAMPLE_PRODUCTS` array:

```javascript
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Your Model Name",
    shortDescription: "Short description shown in catalog",
    fullDescription: "Full description shown on product page",
    price: 29.99,
    thumbnailPath: "images/your-thumb.jpg",
    imagePaths: [
      "images/your-1.jpg",
      "images/your-2.jpg"
    ],
    downloadFilePath: "downloads/your-model.zip"
  },
  // Add more products...
];
```

### 4. **Add Stripe Payment Link**
In `checkout.html`, find the line:
```html
<a href="https://buy.stripe.com/YOUR_LINK_HERE" class="btn-primary" target="_blank" id="stripeLink">
```

Replace `YOUR_LINK_HERE` with your actual Stripe Checkout link:
```html
<a href="https://buy.stripe.com/test_14k6qKa0JexHbZC28d" class="btn-primary" target="_blank" id="stripeLink">
```

### 5. **Deploy to GitHub Pages**
1. Push all files to your GitHub repository
2. Go to **Settings** → **Pages**
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/pablo_site`

## 📝 How to Add New Products

### Step 1: Create Product Images
Add thumbnail and detail images to `images/` folder

### Step 2: Add Product ZIP
Add the model file to `downloads/` folder

### Step 3: Update main.js
Add a new entry to `SAMPLE_PRODUCTS`:
```javascript
{
  id: 4,  // Unique ID, increment from last product
  name: "Cool New Model",
  shortDescription: "Amazing 3D model",
  fullDescription: "Very detailed 3D model with PBR textures...",
  price: 39.99,
  thumbnailPath: "images/cool-thumb.jpg",
  imagePaths: [
    "images/cool-1.jpg",
    "images/cool-2.jpg",
    "images/cool-3.jpg"
  ],
  downloadFilePath: "downloads/cool-model.zip"
}
```

### Step 4: Create Product Page
Copy one of the existing product HTML files (e.g., `product-1.html`) and rename it:
```
product-4.html  (for ID 4)
```

The product page automatically loads the product data using the ID in the filename.

## 🔐 Data Storage

All data is stored in browser `localStorage`:

**Keys used:**
- `products` - Array of product objects
- `orders` - Array of completed purchases
- `inquiries` - Array of customer messages

To export data:
1. Go to Admin Dashboard (`admin.html`)
2. Click "Export Data (JSON)"
3. Data is downloaded as JSON file

## 💳 Payment Processing

### Current Setup (Testing)
- Stripe payment link is a **placeholder**
- Use the "Payment Complete" button to mock a purchase
- No real transactions until configured

### Production Setup
1. Create a Stripe account (https://stripe.com)
2. Create a Stripe Checkout session
3. Get your unique payment link
4. Replace the placeholder link in `checkout.html`

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `style.css`:
```css
:root {
  --bg-primary: #0a0e27;      /* Main background */
  --bg-secondary: #141b3d;    /* Secondary background */
  --text-primary: #e0e0ff;    /* Main text */
  --accent: #00d9ff;          /* Accent color (buttons, links) */
  /* ... more variables ... */
}
```

### Fonts
Google Fonts are already loaded. To change, update in HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

### Navigation
Edit the navbar in each HTML file or create a shared nav component.

## 📊 Admin Dashboard

Access admin panel: `http://your-site.com/admin.html`

**Features:**
- View all orders
- View all customer inquiries
- See revenue stats
- Export data as JSON
- Clear/reset data

**Note:** There's no authentication, so keep the admin link private!

## 🔧 Troubleshooting

### Product images not showing?
- Check image paths are correct (relative paths)
- Ensure image files exist in `images/` folder
- Open browser console (F12) to see any errors

### Download links not working?
- Check file paths in `main.js`
- Ensure ZIP files exist in `downloads/` folder
- Verify CORS is not blocking (shouldn't be an issue on GitHub Pages)

### Orders/Messages not saving?
- localStorage is browser-specific; different devices have separate data
- Check browser console for JavaScript errors
- Try clearing browser cache

### Mobile menu not working?
- Hamburger icon should appear on screens < 768px
- Check browser console for JavaScript errors

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

(Basically any modern browser with ES6 support)

## 🚀 Performance Tips

1. **Optimize Images**
   - Use JPG for photos (better compression)
   - Use PNG for graphics with transparency
   - Compress images before uploading

2. **Keep ZIP Files Small**
   - Remove unnecessary files
   - Use reasonable polygon counts
   - Consider splitting large models into parts

3. **Lazy Load Images** (optional enhancement)
   - Add `loading="lazy"` to img tags for better performance

## 📚 File Reference

| File | Purpose |
|------|---------|
| `main.js` | Core logic, localStorage functions, product data |
| `style.css` | All styling, responsive design, theme |
| `index.html` | Catalog home page |
| `product-X.html` | Individual product detail pages |
| `checkout.html` | Purchase checkout page |
| `admin.html` | Admin dashboard for monitoring |

## 🎓 Learning & Extending

This project is great for learning:
- ✅ Vanilla JavaScript (no frameworks)
- ✅ LocalStorage API
- ✅ HTML5 & modern CSS
- ✅ Responsive Design
- ✅ Basic E-commerce flow

### Potential Enhancements:
- Add search/filter functionality
- Implement shopping cart
- Add customer reviews
- Create email notifications
- Add analytics

## 📄 License

Free to use and modify for your project!

## ✉️ Support

If you need help:
1. Check the troubleshooting section
2. Look at browser console errors (F12)
3. Review the commented code in JavaScript files
4. Test with sample data first (use Admin → Load Sample Data)

---

**Happy selling! 🚀**

For questions about deployment or specific customizations, consult the inline comments in each file.
