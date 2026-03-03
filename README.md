# Komarapuri Moksha Vardhan - Portfolio Website

A professional single-page portfolio website showcasing the skills, education, and contact information of Komarapuri Moksha Vardhan.

## Features

### 🎨 **Design & Theme**
- Dark gradient background with shades of dark blue, black, and purple
- Modern, professional, and cool aesthetic with smooth animations
- Fully responsive design for both desktop and mobile devices
- Glassmorphism effects with backdrop filters

### 🧭 **Navigation**
- Fixed header with low opacity and blur effect
- Smooth scroll navigation between sections
- Mobile-responsive hamburger menu
- Active state indicators based on scroll position
- Hover animations on all navigation items

### 🏠 **Hero Section**
- Animated name display with letter-by-letter animation
- Professional subtitle with typing effect
- Call-to-action buttons with ripple effects
- Placeholder for profile photo with glowing effect
- Parallax scrolling effects

### 📜 **About Section**
- Comprehensive resume information
- Timeline-based education display
- Skills categorized into Technical and Soft skills
- Language proficiency badges
- Animated timeline entries

### 🚀 **Projects Section**
- Creative placeholder with "On the way..." message
- Animated loading dots
- Floating rocket icon animation
- Ready for future project additions

### 📞 **Contact Section**
- Contact information cards with hover effects
- Social media links (Instagram)
- Email and phone contact details
- Location information
- Interactive hover animations

### ✨ **Animations & Interactions**
- Smooth scroll animations using Intersection Observer
- Parallax effects on hero section
- Button ripple effects
- Hover animations on all interactive elements
- Touch gesture support for mobile
- Keyboard navigation support
- Performance-optimized with debounced scroll events

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icon library
- **Google Fonts (Inter)** - Typography

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Or run a local server:
   ```bash
   python -m http.server 8000
   ```
4. Navigate to `http://localhost:8000`

## Customization

### Adding Your Photo
Replace the image placeholder in the hero section:
```html
<div class="image-placeholder">
    <!-- Replace with your image -->
    <img src="your-photo.jpg" alt="Komarapuri Moksha Vardhan">
</div>
```

### Adding Projects
Update the projects section in `index.html`:
```html
<div class="projects-grid">
    <!-- Your project cards here -->
</div>
```

### Modifying Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background-dark: #0a0a0a;
    /* Add more colors as needed */
}
```

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Features

- Optimized animations using CSS transforms
- Debounced scroll events for better performance
- Intersection Observer for efficient scroll animations
- Lazy loading ready structure
- Minimal external dependencies

## Contact Information

- **Email**: mokshamny333@gmail.com
- **Phone**: +91 9392401867
- **Location**: Kakinada, Andhra Pradesh
- **Instagram**: @alwaysm33

---

*This portfolio website was designed to showcase professional skills and provide a modern, engaging user experience.*
