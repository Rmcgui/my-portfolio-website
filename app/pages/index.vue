<template>
  <div>
    <!-- Hero Section with Animated Background -->
    <section class="hero relative bg-white text-gray-900 py-16 md:py-24 overflow-hidden">
      <!-- Animated Geometric Shapes Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="shapes-background">
          <!-- Central Pixel R from logo -->
          <div class="pixel-r-center">
            <div class="pixel-block pixel-1"></div>
            <div class="pixel-block pixel-2"></div>
            <div class="pixel-block pixel-3"></div>
            <div class="pixel-block pixel-4"></div>
            <div class="pixel-block pixel-5"></div>
            <div class="pixel-block pixel-6"></div>
            <div class="pixel-block pixel-7"></div>
            <div class="pixel-block pixel-8"></div>
            <div class="pixel-block pixel-9"></div>
            <div class="pixel-block pixel-10"></div>
            <div class="pixel-block pixel-11"></div>
            <div class="pixel-block pixel-12"></div>
          </div>
          
          <!-- Floating squares -->
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
          <div class="shape shape-6"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Hi, I'm Ryan McGuire</h1>
          <p class="text-2xl md:text-3xl mb-4 font-semibold text-gray-900">Full-Stack Software Developer</p>
          <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
            I build modern, reliable web applications that help businesses streamline operations and grow. 
            From responsive websites to custom web solutions - I bring technical expertise and practical problem-solving to every project.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <NuxtLink to="/process" class="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl">
              View The Process
            </NuxtLink>
            <NuxtLink to="/contact" class="bg-white border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all shadow-lg hover:shadow-xl">
              Get In Touch
            </NuxtLink>
          </div>
          <p class="text-sm md:text-base text-gray-500">
            Based in Co. Mayo, Ireland - Working with businesses locally and remotely
          </p>
        </div>
      </div>
    </section>

    <!-- What I Do Section -->
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What I Do</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in building custom web solutions that solve real business problems
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-cyan-500 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Full-Stack Development</h3>
            <p class="text-gray-600">
              Complete web applications built with Vue.js, C#, Node.js, and modern databases. From concept to deployment, I handle every layer of your solution.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-cyan-500 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Business Websites</h3>
            <p class="text-gray-600">
              Professional, responsive websites that represent your brand and engage your customers. Mobile-friendly, fast, and built to convert.
            </p>
          </div>

          <div class="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-cyan-500 transition-all hover:shadow-lg">
            <div class="text-4xl mb-4">🔧</div>
            <h3 class="font-bold text-xl mb-3 text-gray-900">Custom Web Applications</h3>
            <p class="text-gray-600">
              Bespoke solutions for unique business needs - dashboards, data management systems, process automation, and more.
            </p>
          </div>
        </div>

        <!-- CTA Button to Projects -->
        <div class="text-center mt-12">
          <NuxtLink 
            to="/projects" 
            class="inline-flex items-center gap-2 bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            <span>View My Work</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <p class="text-sm text-gray-500 mt-3">See real examples of enterprise applications I've built</p>
        </div>
      </div>
    </section>

    <!-- Why Work With Me Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Work With Me</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            More than just a developer - a reliable technical partner for your business
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div class="text-center p-6 rounded-lg hover:bg-gray-50 transition-all">
            <div class="text-5xl mb-4">🎓</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">Proven Expertise</h3>
            <p class="text-gray-600 text-sm">Master's degree in Software Engineering with years of enterprise development experience</p>
          </div>

          <div class="text-center p-6 rounded-lg hover:bg-gray-50 transition-all">
            <div class="text-5xl mb-4">💬</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">Clear Communication</h3>
            <p class="text-gray-600 text-sm">No jargon, just honest conversations about your needs and how to achieve them</p>
          </div>

          <div class="text-center p-6 rounded-lg hover:bg-gray-50 transition-all">
            <div class="text-5xl mb-4">✨</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">Quality Focused</h3>
            <p class="text-gray-600 text-sm">Clean, maintainable code built with best practices and thorough testing</p>
          </div>

          <div class="text-center p-6 rounded-lg hover:bg-gray-50 transition-all">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="font-bold text-lg mb-2 text-gray-900">Long-Term Support</h3>
            <p class="text-gray-600 text-sm">I'm here for the journey, not just the launch - ongoing support as you grow</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden">
      <!-- Subtle grid in footer too -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid-background-dark"></div>
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Let's discuss how I can help bring your ideas to life with a custom web solution
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all inline-block shadow-lg hover:shadow-xl">
            Get In Touch
          </NuxtLink>
          <NuxtLink to="/about" class="bg-transparent border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all inline-block">
            Learn More About Me
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Ryan McGuire | Web Developer in Mayo - Custom Websites & Web Applications',
  meta: [
    { name: 'description', content: 'Professional web developer in County Mayo, Ireland. Building custom websites, web applications, and e-commerce solutions for Irish businesses. Get a free consultation today!' },
    { property: 'og:title', content: 'Ryan McGuire | Web Developer in Mayo' },
    { property: 'og:url', content: 'https://webdesignbyryan.com' },
  ],
  link: [{ rel: 'canonical', href: 'https://webdesignbyryan.com' }]
})
</script>

<style scoped>
/* Animated geometric shapes background */
.shapes-background {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Central Pixel R */
.pixel-r-center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 300px;
  opacity: 0.12;
  z-index: 2;
}

.pixel-block {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #06b6d4;
}

/* Desktop pixel positions */
.pixel-1 { top: 0; left: 0; }
.pixel-2 { top: 0; left: 60px; }
.pixel-3 { top: 0; left: 120px; }
.pixel-4 { top: 60px; left: 0; }
.pixel-5 { top: 60px; left: 180px; }
.pixel-6 { top: 120px; left: 0; }
.pixel-7 { top: 120px; left: 60px; }
.pixel-8 { top: 120px; left: 120px; }
.pixel-9 { top: 180px; left: 0; }
.pixel-10 { top: 180px; left: 120px; }
.pixel-11 { top: 240px; left: 0; }
.pixel-12 { top: 240px; left: 180px; }

.shape {
  position: absolute;
  opacity: 0.08;
  background: #06b6d4;
  z-index: 1;
}

/* Pixel squares floating around the R - positioned to avoid center */
.shape-1 {
  width: 80px;
  height: 80px;
  top: 5%;
  left: 10%;
  animation: floatLeft 15s ease-in-out infinite;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 70%;
  left: 15%;
  animation: floatBottomLeft 12s ease-in-out infinite 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 8%;
  right: 12%;
  animation: floatRight 18s ease-in-out infinite 1s;
}

.shape-4 {
  width: 50px;
  height: 50px;
  bottom: 10%;
  right: 20%;
  animation: floatBottomRight 14s ease-in-out infinite 3s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  top: 65%;
  right: 8%;
  animation: floatRight 16s ease-in-out infinite 4s;
}

.shape-6 {
  width: 90px;
  height: 90px;
  bottom: 18%;
  left: 8%;
  animation: floatBottomLeft 20s ease-in-out infinite 2.5s;
}

/* Different animations to keep shapes in their zones */
@keyframes floatLeft {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(5px, -30px) rotate(-5deg);
  }
  75% {
    transform: translate(15px, -15px) rotate(3deg);
  }
}

@keyframes floatRight {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-10px, -15px) rotate(-5deg);
  }
  50% {
    transform: translate(-5px, -30px) rotate(5deg);
  }
  75% {
    transform: translate(-15px, -15px) rotate(-3deg);
  }
}

@keyframes floatBottomLeft {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, 15px) rotate(5deg);
  }
  50% {
    transform: translate(5px, 25px) rotate(-5deg);
  }
  75% {
    transform: translate(15px, 10px) rotate(3deg);
  }
}

@keyframes floatBottomRight {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-10px, 15px) rotate(-5deg);
  }
  50% {
    transform: translate(-5px, 25px) rotate(5deg);
  }
  75% {
    transform: translate(-15px, 10px) rotate(-3deg);
  }
}

.grid-background-dark {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  height: 100%;
  width: 100%;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Add subtle glow to cards on hover */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2), 0 8px 10px -6px rgba(6, 182, 212, 0.1);
}

/* Mobile: hide floating squares, keep R */
@media (max-width: 768px) {
  .shape {
    display: none;
  }
  
  .pixel-r-center {
    top: 80px;  /* Much higher on mobile - above the heading */
    left: 50%;
    transform: translateX(-50%);  /* Only center horizontally */
    width: 120px;  /* Smaller on mobile */
    height: 150px;
  }
}
</style>