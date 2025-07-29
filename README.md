# Felipe Simões - Personal CV Website

A modern, responsive personal website and CV for Felipe Simões, Sr. Data Scientist at Uber, built with HTML, CSS, and JavaScript, designed specifically for GitHub Pages hosting.

## 🌟 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Professional Sections**: Hero, About, Experience, Skills, Projects, Contact
- **Contact Form**: Built-in form with validation (ready for integration)
- **Performance Optimized**: Fast loading with lazy loading and efficient animations
- **GitHub Pages Ready**: No build process required, deploys instantly

## 🚀 Quick Setup & Deployment

This website has been customized with Felipe Simões' information, including:
- Professional experience at Uber, Liv Up, and UNESP
- Technical skills in AI engineering, machine learning, and data science
- GitHub projects and published research articles
- Contact information and social links

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub:
   - Name it `[your-username].github.io` (e.g., `fdsimoes.github.io`)
   - Make it public
   - Initialize with README

2. **Upload your files**:
   - Clone the repository to your local machine
   - Copy all files (`index.html`, `styles.css`, `script.js`, `README.md`, `FelipeSimoes_2025_new_cv.pdf`) to the repository
   - Commit and push to the main branch

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

4. **Access your website**:
   - Your site will be available at `https://[your-username].github.io`
   - It may take a few minutes to deploy initially

### Option 2: Custom Domain (Optional)

1. Purchase a domain from any domain registrar
2. In your repository, create a file named `CNAME` containing your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS records with your domain provider:
   - Create 4 A records pointing to GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or create a CNAME record pointing to `[your-username].github.io`

## 🎨 Customization Guide

### 1. Personal Information

Update the following in `index.html`:

```html
<!-- Update page title and meta description -->
<title>Your Name - Personal Portfolio & CV</title>
<meta name="description" content="Personal portfolio and CV of [Your Name]">

<!-- Update navigation logo -->
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>

<!-- Update hero section -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Your Job Title & Specialization</p>

<!-- Update contact information -->
<p>your.email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, Your Country</p>
```

### 2. Profile Photo

Replace the placeholder image in the hero section:

```html
<!-- Current placeholder -->
<img src="https://via.placeholder.com/300x300/4f46e5/ffffff?text=Your+Photo" alt="Your Name" id="profile-photo">

<!-- Replace with your photo -->
<img src="images/profile-photo.jpg" alt="Your Name" id="profile-photo">
```

Create an `images` folder and add your profile photo (recommended: 300x300px, square format).

### 3. About Section

Update your personal story in the About section:

```html
<p>
    I'm a passionate [your profession] with [X years] of experience in [your expertise]...
</p>
```

Update the stats:
```html
<div class="stat">
    <h3>X+</h3>
    <p>Years Experience</p>
</div>
```

### 4. Experience Timeline

Replace the sample work experience with your actual experience:

```html
<div class="timeline-item">
    <div class="timeline-date">2022 - Present</div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p>Brief description of your role and achievements...</p>
        <ul>
            <li>Your key accomplishment or responsibility</li>
            <li>Another achievement</li>
            <li>Technical skills used</li>
        </ul>
    </div>
</div>
```

### 5. Skills

Update the skills sections with your technologies:

```html
<div class="skill-category">
    <h3><i class="fas fa-code"></i> Frontend</h3>
    <div class="skill-items">
        <span class="skill-item">Your Skill</span>
        <span class="skill-item">Another Skill</span>
        <!-- Add more skills as needed -->
    </div>
</div>
```

### 6. Projects

Replace sample projects with your actual work:

```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project1.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://your-project-live-url.com" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="https://github.com/yourusername/project-repo" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and what it accomplishes...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
    </div>
</div>
```

### 7. Social Links

Update social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourprofile" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

### 8. Colors & Styling

To change the color scheme, update these CSS variables in `styles.css`:

```css
/* Main brand color */
.btn-primary, .skill-item, .timeline-date {
    background-color: #your-color; /* Replace #4f46e5 */
}

/* Accent color */
.highlight {
    color: #your-accent-color; /* Replace #fbbf24 */
}

/* Gradient backgrounds */
.hero, .contact {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

## 🔧 Contact Form Integration

The contact form is ready for integration with services like:

- **Netlify Forms** (if you switch to Netlify hosting)
- **Formspree** (add `action="https://formspree.io/f/your-form-id"` to the form)
- **EmailJS** (for client-side email sending)
- **Custom backend** (PHP, Node.js, etc.)

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📂 File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Your images (create this folder)
    ├── profile-photo.jpg
    ├── project1.jpg
    ├── project2.jpg
    └── project3.jpg
```

## 🎯 SEO Optimization

The website includes basic SEO optimization:

- Semantic HTML structure
- Meta description and title tags
- Alt attributes for images
- Clean URL structure
- Fast loading times

For additional SEO, consider:
- Adding a `sitemap.xml`
- Including structured data markup
- Optimizing images for web
- Adding Open Graph meta tags

## 🚀 Performance Tips

- Optimize images (use WebP format when possible)
- Keep image file sizes under 500KB
- Test performance with Google PageSpeed Insights
- Consider adding a favicon (`favicon.ico`)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉 Your personal website is ready to showcase your skills and experience to the world. 