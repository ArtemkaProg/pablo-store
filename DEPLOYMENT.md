# Deploying to GitHub Pages

This guide will help you deploy your 3D Model Store to GitHub Pages.

## Prerequisites

- GitHub account (https://github.com)
- Git installed on your computer (https://git-scm.com)
- Your project files (you already have these!)

## Step-by-Step Deployment

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com and log in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `pablo_site` (or whatever you prefer)
4. Choose **Public** (required for free GitHub Pages)
5. Do NOT add README, .gitignore, or license yet
6. Click **Create repository**

### Step 2: Initialize Git Locally

Open terminal/PowerShell in your project folder and run:

```bash
cd c:\Users\user\Desktop\Files\pablo_site
git init
```

### Step 3: Add Your Files

```bash
git add .
git commit -m "Initial commit - 3D Model Store"
```

### Step 4: Connect to GitHub

Replace `YOUR_USERNAME` and `pablo_site` with your GitHub username and repository name:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pablo_site.git
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 6: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/pablo_site
```

Or check your repository Settings → Pages section for the exact URL.

## Updating Your Site

After making changes, push them to GitHub:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Changes will be live within 1-2 minutes.

## Common Issues

### "Repository not found"
- Make sure you replaced `YOUR_USERNAME` with your actual GitHub username
- Check the URL is correct: `https://github.com/YOUR_USERNAME/pablo_site`

### "File not found" errors on site
- Check that all image paths use forward slashes `/` not backslashes `\`
- Make sure files are in the correct folders (images/, downloads/)
- Verify file names match exactly (case-sensitive on GitHub)

### Site doesn't update after push
- Wait 1-2 minutes for GitHub to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check Settings → Pages to see deployment status

### 404 errors for images/downloads
- Make sure image files exist in `images/` folder
- Make sure ZIP files exist in `downloads/` folder
- File paths in HTML should match exactly

## Using a Custom Domain (Optional)

If you have your own domain:

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `mystore.com`)
3. Update your domain DNS settings (instructions provided by domain registrar)

## Making Your Repository Private

**After initial setup**, if you want to keep code private but site public:

1. Go to Settings → Visibility
2. Change to **Private**
3. In Settings → Pages, Pages can still be public even with private repo

## Useful Git Commands

```bash
# Check status
git status

# Add specific file
git add filename.html

# View commit history
git log

# Undo last commit (before push)
git reset HEAD~1

# Remove a file from git
git rm filename
```

## Backup Your Data

Always keep a backup of your admin export:

1. Go to `admin.html` on your live site
2. Click "Export Data (JSON)"
3. Save the JSON file in a safe location
4. Back it up to cloud storage or email it to yourself

## Next Steps

After deployment, you should:

1. ✅ Add your product images to `images/` folder
2. ✅ Add your model ZIP files to `downloads/` folder
3. ✅ Update products in `main.js`
4. ✅ Configure Stripe payment link in `checkout.html`
5. ✅ Test the site thoroughly
6. ✅ Share your link!

## Support Resources

- **GitHub Pages Docs:** https://pages.github.com
- **Git Documentation:** https://git-scm.com/doc
- **Stripe Integration:** https://stripe.com/docs/payments/checkout

---

**Your site is now live! 🚀**

Questions? Check the README.md or review the comments in your code files.
