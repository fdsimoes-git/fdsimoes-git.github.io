# Felipe Simões - Personal Website

A modern, responsive personal website for Felipe Simões, Applied Scientist at Microsoft, built with HTML, CSS, and JavaScript, hosted on GitHub Pages.

## Sections

- **Hero** - Introduction with photo and social links
- **About** - Background summary and stats
- **Experience** - Professional timeline (Microsoft, Uber, Liv Up, UNESP)
- **Education** - Academic background
- **Skills & Technologies** - AI/ML, programming, analytics
- **Projects** - Featured open source projects
- **Publications** - Peer-reviewed research articles
- **Contact** - Email, location, and social links

## Tech Stack

- HTML, CSS, JavaScript (no build process)
- Google Fonts (Syne, DM Sans)
- Font Awesome icons
- EmailJS SDK
- Umami Analytics

## GitHub Pages Hosting

This is a GitHub Pages user site deployed from the `main` branch.

### Repository Visibility

The repository **does not need to be public** for GitHub Pages to work. However, site visibility depends on your GitHub plan:

| GitHub Plan | Repo Visibility | Published Site |
|---|---|---|
| **Free** | Public or Private | Always **public** — anyone can access the site URL |
| **Pro / Team / Enterprise** | Public or Private | Can be **public or private** (restricted to repo collaborators) |

On the **Free plan**, even if the repository is private, the deployed site at `https://fdsimoes-git.github.io` will be publicly accessible. To restrict site access, a paid GitHub plan is required.

### Deployment

1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys from `/ (root)`
3. Site is available at `https://fdsimoes-git.github.io`

### Custom Domain (Optional)

1. Create a `CNAME` file with your domain name
2. Configure DNS with your registrar:
   - **A records** pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a **CNAME record** pointing to `fdsimoes-git.github.io`

## File Structure

```
├── index.html       # Main page
├── styles.css       # Styles
├── script.js        # Interactions and animations
├── favicon.svg      # Site icon
├── citations.jpeg   # Profile photo
├── project_*.png    # Project screenshots
└── README.md
```

## Analytics

Site analytics are tracked with [Umami](https://umami.is), a privacy-focused, open source alternative to Google Analytics. The tracking script is included in `index.html`.

## License

This project is open source and available under the [MIT License](LICENSE).
