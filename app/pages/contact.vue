<template>
  <div class="container mx-auto px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? Whether you need a new website, custom web application, or technical consultation, I'd love to hear from you.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold mb-8">Contact Information</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold mb-1">Email</h3>
                <a href="mailto:ryan@webdesignbyryan.com" class="text-blue-600 hover:text-blue-800 hover:underline">
                  ryan@webdesignbyryan.com
                </a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold mb-1">Phone</h3>
                <a href="tel:+353838934120" class="text-blue-600 hover:text-blue-800 hover:underline">
                  +353 83 893 4120
                </a>
                <p class="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am-6pm GMT</p>
                <p class="text-sm text-gray-500">For urgent matters, feel free to call directly.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold mb-1">Location</h3>
                <p class="text-gray-600">Balla</p>
                <p class="text-gray-600">Co. Mayo, Ireland</p>
                <p class="text-sm text-gray-500 mt-1">Serving clients across Ireland and internationally</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <div class="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <h2 class="text-2xl font-bold mb-6">Send Me a Message</h2>
            
            <form 
              ref="contactForm"
              @submit.prevent="handleSubmit" 
              class="space-y-6"
            >
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Your Name *</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  name="name"
                  required 
                  placeholder="John Doe"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Your Email *</label>
                <input 
                  v-model="form.email" 
                  type="email"
                  name="email"
                  required 
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Phone Number (Optional)</label>
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  name="phone"
                  placeholder="+353 ..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Project Type</label>
                <select 
                  v-model="form.projectType" 
                  name="projectType"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="website">Business Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="maintenance">Website Maintenance/Updates</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label class="block text-gray-700 font-semibold mb-2">Tell Me About Your Project *</label>
                <textarea 
                  v-model="form.message" 
                  name="message"
                  required 
                  rows="5" 
                  placeholder="Describe your project, timeline, budget range, or any specific requirements..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>
            </form>

            <div v-if="submitted" class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-green-800 font-semibold">Thank you! I'll get back to you within 24 hours.</p>
              </div>
            </div>

            <div v-if="error" class="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-red-800 font-semibold">Sorry, there was an error. Please email me directly at ryan@webdesignbyryan.com</p>
              </div>
            </div>
          </div>

          <p class="text-sm text-gray-500 mt-4 text-center">
            * Required fields
          </p>
        </div>
      </div>

      <!-- Additional Info Section -->
      <div class="mt-16 grid md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
          <div class="text-3xl mb-3">💼</div>
          <h3 class="font-bold mb-2">Free Consultation</h3>
          <p class="text-sm text-gray-600">Initial project discussion at no cost to understand your needs</p>
        </div>

        <div class="text-center p-6 bg-green-50 rounded-lg border border-green-100">
          <div class="text-3xl mb-3">🎯</div>
          <h3 class="font-bold mb-2">Transparent Pricing</h3>
          <p class="text-sm text-gray-600">Clear quotes with no hidden fees—you'll know exactly what to expect</p>
        </div>

        <div class="text-center p-6 bg-purple-50 rounded-lg border border-purple-100">
          <div class="text-3xl mb-3">🚀</div>
          <h3 class="font-bold mb-2">Timely Delivery</h3>
          <p class="text-sm text-gray-600">Realistic timelines with regular updates throughout the project</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

useHead({
  title: 'Contact Ryan McGuire - Get Your Free Web Development Consultation',
  meta: [
    { name: 'description', content: 'Contact Ryan McGuire for a free consultation about your website or web application project. Based in Mayo, serving businesses across Ireland.' },
    { property: 'og:title', content: 'Contact - Ryan McGuire Web Developer' },
    { property: 'og:url', content: 'https://webdesignbyryan.com/contact' },
  ],
  link: [{ rel: 'canonical', href: 'https://webdesignbyryan.com/contact' }]
});

import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
const EMAILJS_SERVICE_ID = 'service_89wu05e' // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_hsj4mdh' // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'g-qEkL7XICQII1N4X' // Replace with your Public Key

const contactForm = ref(null)
const form = ref({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
})

const submitted = ref(false)
const isSubmitting = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  error.value = false
  
  try {
    // Prepare template params with correct naming for EmailJS
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      phone: form.value.phone || 'Not provided',
      projectType: form.value.projectType || 'Not specified',
      message: form.value.message
    }
    
    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    
    submitted.value = true
    isSubmitting.value = false
    
    // Reset form after 5 seconds
    setTimeout(() => {
      form.value = { 
        name: '', 
        email: '', 
        phone: '',
        projectType: '',
        message: '' 
      }
      submitted.value = false
    }, 5000)
  } catch (err) {
    console.error('EmailJS Error:', err)
    error.value = true
    isSubmitting.value = false
  }
}

</script>

