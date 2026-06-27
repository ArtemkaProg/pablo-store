# Project Files Summary

## Core Files

### HTML Pages (User-facing)
- **index.html** - Home page / Catalog with product grid
- **product-1.html** - Product detail page (ID: 1 - Sci-Fi Robot)
- **product-2.html** - Product detail page (ID: 2 - Medieval Castle)
- **product-3.html** - Product detail page (ID: 3 - Spaceship Voyager)
- **product-template.html** - Template for creating new product pages
- **checkout.html** - Purchase checkout & payment page
- **admin.html** - Admin dashboard (hidden, access directly)

### Styling & Logic
- **style.css** - All styling, responsive design, dark theme
- **main.js** - Core JavaScript: localStorage, product data, utilities

### Configuration & Documentation
- **README.md** - Complete project documentation
- **QUICK_START.md** - Quick reference guide
- **DEPLOYMENT.md** - GitHub Pages deployment guide
- **FILES.md** - This file

### Project Setup
- **.gitignore** - Git ignore rules for clean repository

## Folders

### /images/
Placeholder for product images. Add:
- Thumbnail images (catalog cards)
- Full-size product images (detail pages)
- Gallery images

### /downloads/
Placeholder for downloadable model files. Add:
- robot-model.zip
- castle-model.zip
- spaceship-model.zip
- (your own model ZIP files)

## Data Structure (localStorage)

### products array
```javascript
{
  id: number,
  name: string,
  shortDescription: string,
  fullDescription: string,
  price: number,
  thumbnailPath: string,
  imagePaths: array,
  downloadFilePath: string
}
```

### orders array
```javascript
{
  id: timestamp,
  productId: number,
  buyerName: string,
  buyerEmail: string,
  timestamp: ISO string,
  downloadUnlocked: boolean
}
```

### inquiries array
```javascript
{
  id: timestamp,
  productId: number,
  buyerName: string,
  buyerEmail: string,
  message: string,
  timestamp: ISO string
}
```

## Key Features Implemented

✅ Dynamic product catalog
✅ Individual product detail pages
✅ Image gallery with thumbnails
✅ Checkout process
✅ Stripe payment placeholder
✅ Customer inquiry forms
✅ Admin dashboard
✅ Data export (JSON)
✅ Responsive design (mobile-friendly)
✅ LocalStorage data persistence
✅ Modern dark theme
✅ Hamburger menu for mobile

## How to Use

### Adding a New Product

1. **Add product data to main.js:**
   ```javascript
   {
     id: 4,
     name: "New Product",
     // ... other fields
   }
   ```

2. **Create new HTML file:** Copy `product-template.html` as `product-4.html`

3. **Add images:** Place in `images/` folder

4. **Add download:** Place ZIP in `downloads/` folder

5. **Push to GitHub:** `git add . && git commit -m "Add new product" && git push`

### Accessing Different Pages

| Page | URL |
|------|-----|
| Catalog | index.html |
| Product 1 | product-1.html |
| Product 2 | product-2.html |
| Product 3 | product-3.html |
| Checkout | checkout.html |
| Admin | admin.html |

### Testing Admin Functions

1. Open admin.html
2. Click "Load Sample Data" to populate with test data
3. Create test orders in checkout.html
4. Add test inquiries in product pages
5. View all data in Admin Dashboard
6. Export data as JSON backup

## Customization Points

### Colors (style.css)
```css
--bg-primary: #0a0e27;
--accent: #00d9ff;
--text-primary: #e0e0ff;
```

### Products (main.js)
Edit SAMPLE_PRODUCTS array to add/edit products

### Stripe (checkout.html)
Replace `YOUR_LINK_HERE` with actual Stripe checkout URL

### Brand Name
Search for "ModelShop" and replace with your brand name

## Tech Stack

- **HTML5** - Page structure
- **CSS3** - Styling & responsive design
- **Vanilla JavaScript** - No frameworks, no build tools
- **localStorage API** - Client-side data storage
- **Google Fonts** - Typography (Inter, DM Sans)
- **Stripe** - Payment processing (placeholder)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## File Sizes

- style.css: ~15 KB
- main.js: ~6 KB
- index.html: ~4 KB
- product-*.html: ~5 KB each
- checkout.html: ~6 KB
- admin.html: ~9 KB

**Total: ~50 KB (before images)**

## Performance Notes

- All files are static (no server required)
- GitHub Pages caches static files
- Load times are fast (under 1s for page load)
- Image optimization recommended for fast loading

## Security Notes

- No sensitive data stored
- All data is client-side only
- No user passwords needed
- Admin panel has no authentication (keep URL private)

## Future Enhancements

- [ ] Add search/filter
- [ ] Add shopping cart
- [ ] Add customer reviews
- [ ] Add email notifications
- [ ] Add analytics
- [ ] Add real Stripe integration
- [ ] Add product categories
- [ ] Add wishlist feature

## File Modification Guide

### To Add New Features

1. Add HTML elements
2. Add CSS styling
3. Add JavaScript logic to main.js or page-specific script
4. Test locally
5. Commit and push to GitHub

### To Change Colors

Edit CSS variables in style.css:
```css
:root {
  --bg-primary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
  /* etc */
}
```

### To Change Fonts

Update Google Fonts link in HTML files and font-family in CSS

### To Add Product Categories

Extend the product object with a `category` field in main.js

---

**All files are ready to use!** See QUICK_START.md for next steps.
