export const products = {
  tshirts: [
    {
      id: 1,
      name: "Shadow Essence Tee",
      price: 89.99,
      image: "/images/tshirt1.png",
      category: "T-Shirts",
      description: "Premium oversized black tee with minimalist streetwear design. Made from 100% organic cotton.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      featured: true
    },
    {
      id: 2,
      name: "Urban Legend Tee",
      price: 79.99,
      image: "/images/tshirt2.png",
      category: "T-Shirts",
      description: "Classic white streetwear tee with bold typography. Perfect for everyday urban style.",
      sizes: ["S", "M", "L", "XL"],
      featured: true
    },
    {
      id: 3,
      name: "Monochrome Dynasty",
      price: 94.99,
      image: "/images/tshirt3.png",
      category: "T-Shirts",
      description: "Limited edition black and white graphic tee. Statement piece for street culture enthusiasts.",
      sizes: ["M", "L", "XL", "XXL"],
      featured: false
    },
    {
      id: 4,
      name: "Concrete Jungle Tee",
      price: 84.99,
      image: "/images/tshirt4.png",
      category: "T-Shirts",
      description: "Inspired by urban landscapes. Subtle yet powerful design in pure white.",
      sizes: ["S", "M", "L", "XL"],
      featured: true
    }
  ],
  cargo: [
    {
      id: 5,
      name: "Shadow Tactical Cargo",
      price: 149.99,
      image: "/images/cargo1.png",
      category: "Cargo",
      description: "Premium black cargo pants with multiple pockets. Ultimate streetwear functionality meets style.",
      sizes: ["28", "30", "32", "34", "36", "38"],
      featured: true
    },
    {
      id: 6,
      name: "Urban Explorer Cargo",
      price: 134.99,
      image: "/images/cargo2.png",
      category: "Cargo",
      description: "Versatile white cargo pants for the modern street explorer. Comfort and style combined.",
      sizes: ["30", "32", "34", "36", "38"],
      featured: false
    },
    {
      id: 7,
      name: "Monochrome Utility",
      price: 159.99,
      image: "/images/cargo3.svg",
      category: "Cargo",
      description: "Limited edition two-tone cargo pants. The perfect blend of black and white street aesthetics.",
      sizes: ["28", "30", "32", "34", "36"],
      featured: true
    }
  ]
};

export const featuredProducts = [
  ...products.tshirts.filter(p => p.featured),
  ...products.cargo.filter(p => p.featured)
];

export const allProducts = [...products.tshirts, ...products.cargo];
