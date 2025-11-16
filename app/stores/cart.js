import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    sidebarOpen: false
  }),

  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },

    total: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },

    subtotal: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    }
  },

  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        })
      }
      
      this.openSidebar()
      this.saveToLocalStorage()
    },

    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
      this.saveToLocalStorage()
    },

    incrementItem(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
      this.saveToLocalStorage()
    },

    decrementItem(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item && item.quantity === 1) {
        this.removeItem(productId)
      }
      this.saveToLocalStorage()
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    openSidebar() {
      this.sidebarOpen = true
    },

    closeSidebar() {
      this.sidebarOpen = false
    },

    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },

    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    loadFromLocalStorage() {
      if (process.client) {
        const saved = localStorage.getItem('cart')
        if (saved) {
          this.items = JSON.parse(saved)
        }
      }
    }
  }
})
