import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  // When someone asks for the initial state, give them this object with products,
  //  an empty search query, and 'All' as the selected category.
  // This is where all the data lives
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Wireless Headphones Pro',
        description: 'Premium noise-canceling headphones with 30-hour battery life',
        price: 299.99,
        originalPrice: 399.99,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        category: 'Electronics',
        rating: 5,
        stock: 15
      },
      {
        id: 2,
        name: 'Smart Watch Ultra',
        description: 'Advanced fitness tracking with heart rate monitor and GPS',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        category: 'Electronics',
        rating: 5,
        stock: 8
      },
      {
        id: 3,
        name: 'Laptop Stand Aluminum',
        description: 'Ergonomic laptop stand with adjustable height and angle',
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
        category: 'Electronics',
        rating: 4,
        stock: 25
      },
      {
        id: 4,
        name: 'Mechanical Keyboard RGB',
        description: 'Professional mechanical keyboard with customizable RGB lighting',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        category: 'Electronics',
        rating: 5,
        stock: 12
      },
      {
        id: 5,
        name: 'Designer Backpack',
        description: 'Modern minimalist backpack with laptop compartment',
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
        category: 'Fashion',
        rating: 4,
        stock: 20
      },
      {
        id: 6,
        name: 'Running Shoes Elite',
        description: 'Lightweight running shoes with responsive cushioning',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        category: 'Sports',
        rating: 5,
        stock: 18
      },
      {
        id: 7,
        name: 'Yoga Mat Premium',
        description: 'Extra thick yoga mat with carrying strap',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
        category: 'Sports',
        rating: 4,
        stock: 30
      },
      {
        id: 8,
        name: 'Stainless Steel Water Bottle',
        description: 'Insulated water bottle keeps drinks cold for 24 hours',
        price: 34.99,
        originalPrice: 44.99,
        discount: 22,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
        category: 'Lifestyle',
        rating: 5,
        stock: 50
      },
      {
        id: 9,
        name: 'Wireless Mouse Ergonomic',
        description: 'Comfortable ergonomic design with precision tracking',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
        category: 'Electronics',
        rating: 4,
        stock: 22
      },
      {
        id: 10,
        name: 'Sunglasses Polarized',
        description: 'UV protection polarized sunglasses with premium frame',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
        category: 'Fashion',
        rating: 5,
        stock: 16
      },
      {
        id: 11,
        name: 'Portable Bluetooth Speaker',
        description: 'Waterproof speaker with 360° sound and 12-hour battery',
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
        category: 'Electronics',
        rating: 5,
        stock: 28
      },
      {
        id: 12,
        name: 'Fitness Tracker Band',
        description: 'Activity tracker with heart rate and sleep monitoring',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500',
        category: 'Sports',
        rating: 4,
        stock: 35
      }
    ],
    searchQuery: '',
    selectedCategory: 'All'
  }),

  // For all these arrow functions, Pinia automatically passes the state to getters. 
  // These functions automatically calculate data and return based on state
  getters: {
    // Return filtered products for a given state 
    filteredProducts: (state) => {
      let filtered = state.products

      // Filter first by search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase()
        // For each product, check if its name includes the search query OR its description includes the search query. 
        // Return true if either matches and keep item in filtered list
        filtered = filtered.filter(
          product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        )
      }

      // Filter scond by category
      if (state.selectedCategory && state.selectedCategory !== 'All') {
        // For each product, check if its category matches the selected category. Return true if it matches keep in filtered list
        filtered = filtered.filter(
          product => product.category === state.selectedCategory
        )
      }

      // return all filtered products
      return filtered
    },

    categories: (state) => {
      // For each product p, give me just its category property, removing duplicates
      const categories = new Set(state.products.map(p => p.category))
      // Convert back to array from Set and return adding 'All' to the array
      return ['All', ...Array.from(categories)]
    },


    productById: (state) => {
      // For each product p, check if its id matches the id we're looking for
      return (id) => state.products.find(p => p.id === parseInt(id))
    },

    featuredProducts: (state) => {
      // for each product p, return a list of products that have an associated discount 
      // return only the top 4, show only 4 items at a time. 
      return state.products.filter(p => p.discount).slice(0, 4)
    }
  },

  actions: {
    setSearchQuery(query) {
      this.searchQuery = query
    },

    setCategory(category) {
      this.selectedCategory = category
    },

    clearFilters() {
      this.searchQuery = ''
      this.selectedCategory = 'All'
    }
  }
})
