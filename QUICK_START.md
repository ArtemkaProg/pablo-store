# Quick Start Guide

Get your 3D Model Store ready in 5 minutes!

## ⚡ Quick Setup

### 1. Add Products (Edit `main.js`)

Open `main.js` and update the products array. Example:

```javascript
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "My First Model",
    shortDescription: "Amazing 3D model",
    fullDescription: "Full description here...",
    price: 29.99,
    thumbnailPath: "images/model1-thumb.jpg",
    imagePaths: ["images/model1-1.jpg", "images/model1-2.jpg"],
    downloadFilePath: "downloads/model1.zip"
  },
  // Add more products...
];
```

### 2. Add Images

Place product images in the `images/` folder:
- `model1-thumb.jpg` (for catalog)
- `model1-1.jpg` (for product detail)
- `model1-2.jpg` (for gallery)

### 3. Add Model Files

Place ZIP files in the `downloads/` folder:
- `model1.zip`
- `model2.zip`
- etc.

### 4. Create Product Pages

For each product, create a file named `product-X.html` (where X is the product ID):

**Option A: Copy Template**
1. Copy `product-template.html`
2. Rename to `product-4.html` (if adding 4th product)
3. Done! (The page auto-loads data from `main.js`)

**Option B: Copy Existing Product**
1. Copy `product-1.html`
2. Rename to `product-4.html`
3. Done!

### 5. Setup Stripe (Optional for testing)

In `checkout.html`, find this line:
```html
<a href="https://buy.stripe.com/YOUR_LINK_HERE" ...
```

Replace `YOUR_LINK_HERE` with your Stripe payment link (optional - you can test without it).

## 🧪 Testing Locally

1. Open `index.html` in your browser
2. Click on a product
3. Try the checkout (click "Payment Complete" to test)
4. Check admin.html to see your test order
5. Open browser DevTools (F12) to check for errors

## 🚀 Deploy to GitHub

```bash
cd c:\Users\user\Desktop\Files\pablo_site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pablo_site.git
git push -u origin main
```

Then go to GitHub → Repository Settings → Pages → Enable with `main` branch

Your site will be live at: `https://YOUR_USERNAME.github.io/pablo_site`

## 📊 Admin Panel

Test everything at: `admin.html`

**Features:**
- View orders & messages
- Export data
- Clear data
- Load sample data

## 🎨 Customization

**Change colors** - Edit CSS variables at top of `style.css`:
```css
--accent: #00d9ff;        /* Cyan */
--bg-primary: #0a0e27;    /* Dark blue */
```

**Change fonts** - Edit the Google Fonts link in HTML files

**Change name/logo** - Edit "ModelShop" text in navigation

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| Images not showing | Check paths match exactly, ensure files exist in `images/` |
| Product not loading | Verify product ID in filename matches ID in `main.js` |
| Downloads not working | Check ZIP files exist in `downloads/` |
| Mobile menu broken | Open browser console (F12) to check for errors |

## 📚 Full Docs

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **product-template.html** - Well-commented template

## 💡 Pro Tips

1. **Add 5+ products** before launch for better store feel
2. **Use high-quality images** (800x600px+ recommended)
3. **Compress images** before uploading (use TinyPNG.com)
4. **Test checkout flow** before sharing with customers
5. **Export admin data regularly** as backup
6. **Set up real Stripe** before accepting payments

## 🎯 Next Steps

- [ ] Add all your products to `main.js`
- [ ] Add all images to `images/` folder
- [ ] Add all model ZIPs to `downloads/` folder
- [ ] Create product HTML pages for each product
- [ ] Test locally with sample data
- [ ] Configure Stripe payment link
- [ ] Deploy to GitHub Pages
- [ ] Share your store URL!

---

**Everything ready? Start building! 🚀**

For detailed help, see README.md or inline code comments.
