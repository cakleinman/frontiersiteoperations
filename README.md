# Frontier Site Operations Website

A modern, mobile-first website for Frontier Site Operations - contractor support services in Utah County.

## 🎨 Brand Colors

- **Primary Orange**: `#FF4500` - Used for CTAs, accents, and brand identity
- **Charcoal**: `#2D3748` - Main text and headings
- **Gray Medium**: `#718096` - Secondary text
- **Gray Light**: `#E2E8F0` - Borders and backgrounds
- **Gray Lighter**: `#F7FAFC` - Section backgrounds

## 📁 File Structure

```
frontier-site/
├── index.html              # Homepage
├── services.html           # Detailed services page
├── about.html              # About us page
├── contact.html            # Contact form page
├── service-area.html       # Service area coverage
├── styles.css              # All styles (mobile-first)
├── script.js               # Navigation and interactions
└── images/
    ├── logo.svg            # Branded logo
    └── hero-truck.svg      # Hero section truck illustration
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Follow the prompts to create your account

### Step 2: Create a New Repository
1. Click the "+" icon in the top right
2. Select "New repository"
3. Name it: `frontiersiteoperations` (or any name you prefer)
4. Make it **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 3: Upload Your Files
1. On the repository page, click "uploading an existing file"
2. Drag and drop ALL files from your `frontier-site` folder
3. Make sure to include the `images` folder with all its contents
4. Add a commit message: "Initial website upload"
5. Click "Commit changes"

### Step 4: Enable GitHub Pages
1. Go to your repository "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Your Site is Live!
Your site will be available at:
`https://[your-username].github.io/frontiersiteoperations/`

## 🌐 Custom Domain Setup

### Connect Your Existing Domain (frontiersiteoperations.com)

1. **In GitHub Repository Settings:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `www.frontiersiteoperations.com`
   - Click "Save"
   - Check "Enforce HTTPS" (wait a few minutes if not available yet)

2. **In Your Domain Registrar (where you bought your domain):**
   
   Add these DNS records:

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: [your-username].github.io
   TTL: 3600
   ```

   **For root domain (optional but recommended):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

3. **Wait for DNS to propagate (15 minutes - 24 hours)**
   - Usually takes 15-30 minutes
   - Check status at: https://www.whatsmydns.net

## 📱 Features

- ✅ **Mobile-First Design** - Optimized for contractors on job sites
- ✅ **Fast Loading** - Lightweight and optimized
- ✅ **Brand-Consistent Colors** - Orange (#FF4500) + Charcoal/Grays
- ✅ **Clear CTAs** - Easy click-to-call buttons
- ✅ **Professional Design** - Modern, bold, memorable
- ✅ **SEO-Friendly** - Proper meta tags and structure
- ✅ **Accessible** - Following web accessibility guidelines

## 🔧 Customization Guide

### Update Phone Number
Find and replace `(801) 555-1234` throughout all HTML files with your actual phone number.
Also update the `tel:+18015551234` links.

### Update Email
Replace `info@frontiersiteops.com` with your actual email address.

### Add Real Photos
When you get your equipment:
1. Take high-quality photos of your truck, trailer, and equipment
2. Optimize them (compress to web size - aim for under 500KB each)
3. Replace the SVG placeholders in the `images` folder
4. Update the `<img>` tags in the HTML files

### Google Analytics (Optional)
Add this before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📞 Contact Form Setup

The contact form currently shows a JavaScript alert. To make it functional:

**Option 1: Use Formspree (Free)**
1. Go to https://formspree.io
2. Create an account
3. Get your form endpoint
4. Update `contact.html` form tag:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST" class="contact-form">
```

**Option 2: Use Netlify Forms (Free)**
If you deploy to Netlify instead of GitHub Pages:
1. Add `netlify` attribute to form tag
2. Forms automatically work!

## 🎯 SEO Recommendations

1. **Google My Business** - Claim and optimize your listing
2. **Local Directories** - List on Yelp, Yellow Pages, etc.
3. **Google Search Console** - Submit your sitemap
4. **Meta Descriptions** - Already included in all pages
5. **Schema Markup** - Consider adding local business schema

## 🛠️ Troubleshooting

**Site not showing up?**
- Wait 2-5 minutes after enabling GitHub Pages
- Check that your repository is public
- Make sure index.html is in the root folder

**Images not loading?**
- Verify all images are in the `images` folder
- Check that file names match exactly (case-sensitive)
- Make sure you uploaded the entire folder structure

**Custom domain not working?**
- Verify DNS records are correct
- Wait 24 hours for DNS propagation
- Check HTTPS is enforcing (may need to wait)

## 📈 Next Steps

1. **Get Equipment** - Complete VOSB GSA program
2. **Professional Photos** - Replace placeholder images
3. **Customer Testimonials** - Add when available
4. **Service Expansion** - Update "Coming Soon" badges when ready
5. **Google Ads** - Consider PPC for local contractors
6. **Regular Updates** - Keep content fresh and accurate

## 💡 Tips for Success

- **Keep phone number visible** - Contractors want to call, not fill forms
- **Update regularly** - Add photos, testimonials, project examples
- **Mobile testing** - Always check on a real phone
- **Fast response** - When that phone rings, answer it!
- **Local SEO** - Focus on "Utah County" + service keywords

## 📄 License

© 2024 Frontier Site Operations LLC. All rights reserved.

---

**Need Help?** If you run into issues deploying, email the details of what's not working and any error messages you're seeing.
