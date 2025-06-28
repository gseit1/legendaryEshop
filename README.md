# Supreme Legendary E-Shop

A modern, street-culture inspired e-commerce frontend built with Vue.js 3, Bootstrap 5, and Vite. Features a black and white minimalist design perfect for streetwear brands.

## 🚀 Features

- **Modern Vue.js 3** with Composition API
- **Bootstrap 5** for responsive design
- **Street-style aesthetic** with black and white color scheme
- **Mobile-first** responsive design
- **Background video hero** section
- **Product catalog** with filtering
- **Individual product pages** with size selection
- **Smooth animations** and transitions

## 🛍️ Product Catalog

- **4 Premium T-Shirts:**
  - Shadow Essence Tee ($89.99)
  - Urban Legend Tee ($79.99)
  - Monochrome Dynasty ($94.99)
  - Concrete Jungle Tee ($84.99)

- **3 Cargo Pants:**
  - Shadow Tactical Cargo ($149.99)
  - Urban Explorer Cargo ($134.99)
  - Monochrome Utility ($159.99)

## 🎨 Design Philosophy

- **Black & White Color Scheme**: Timeless and bold
- **Street Culture Elements**: Urban typography and modern layouts
- **Mobile-Optimized**: Perfect viewing on all devices
- **Minimalist Interface**: Clean, focused user experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd supreme-legendary-eshop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Navbar.vue      # Navigation component
│   └── ProductCard.vue # Product display component
├── views/              # Page components
│   ├── Home.vue        # Homepage with hero video
│   ├── Shop.vue        # Product catalog
│   └── Product.vue     # Individual product pages
├── data/               # Product data
│   └── products.js     # Product catalog
├── router/             # Vue Router configuration
│   └── index.js        # Route definitions
└── main.js             # App entry point
```

## 🎬 Media Assets

The application expects the following media files (placeholders are used currently):

- **Background Video**: `/public/videos/streetwear-hero.mp4`
- **Product Images**: `/public/images/tshirt-1.jpg` through `/public/images/cargo-3.jpg`

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products to the catalog.

### Styling
The application uses Bootstrap 5 with custom CSS. Main styles are in:
- `src/App.vue` (global styles)
- Individual component `<style>` sections

### Colors
The color scheme is defined in CSS custom properties and can be easily modified in `src/App.vue`.

## 📱 Mobile Optimization

- Responsive navigation with mobile hamburger menu
- Optimized video background for mobile devices
- Touch-friendly buttons and interactions
- Mobile-first design approach

## 🛠️ Technologies Used

- **Vue.js 3**: Modern JavaScript framework
- **Vue Router**: Client-side routing
- **Bootstrap 5**: CSS framework for responsive design
- **Bootstrap Icons**: Icon library
- **Vite**: Fast build tool and dev server

## 📄 License

This project is for demonstration purposes.

---

**Note**: This is a frontend-only application. Product images and videos are currently using placeholders and should be replaced with actual assets for production use.
