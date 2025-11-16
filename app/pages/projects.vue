<template>
  <div class="container mx-auto px-6 py-16">

    <!-- Projects hero + live demos wrapper -->
    <section class="relative mb-20">
      <!-- Soft gradient background behind the whole top area -->
      <div
        class="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-60 bg-gradient-to-b from-emerald-50/60 via-white to-white"
      ></div>

      <div class="max-w-6xl mx-auto">
        <!-- Header: My Work -->
        <div class="max-w-4xl mx-auto text-center mb-8">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            My Work
          </h1>
          <p class="text-lg text-slate-600">
            A showcase of professional projects and custom solutions I've built for real-world applications
          </p>
        </div>

        <!-- Card that contains the demo projects section -->
        <div
          class="mx-auto max-w-6xl rounded-3xl bg-white/90 backdrop-blur border border-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-5 py-6 md:px-10 md:py-10 transition-transform duration-300 hover:-translate-y-1"
        >
          <!-- ⬇️ PASTE YOUR EXISTING LIVE DEMO <section class="mb-16"> ... </section> HERE ⬇️ -->

          <!-- Live Demo Websites -->
          <section class="mb-16">
            <h2 class="text-2xl font-bold mb-2 flex items-center">
              <span class="bg-emerald-600 text-white px-3 py-1 rounded-lg mr-3 text-sm">
                LIVE DEMOS
              </span>
              Demo Websites &amp; Templates
            </h2>
            <p class="text-gray-600 mb-8 max-w-2xl">
              Click into these live demo sites to see how I approach UX, responsive layouts, and
              modern front-end development for small businesses.
            </p>
<div class="grid gap-8 md:grid-cols-2">
    <!-- E-commerce demo (real, live link) -->
    <NuxtLink
      to="/shop"
      class="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div class="relative overflow-hidden aspect-[16/9]">
        <!-- Replace with your actual screenshot -->
        <img
          src="/images/ecommerce-hero.jpg"
          alt="E-commerce store demo preview"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
        ></div>

        <span
          class="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-md"
        >
          LIVE DEMO
        </span>
        <span
          class="absolute bottom-3 left-3 text-xs font-medium text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded-md"
        >
          Nuxt 3 · Tailwind CSS
        </span>
      </div>

      <div class="p-6 flex-1 flex flex-col">
        <div class="flex items-start justify-between gap-4 mb-2">
          <h3 class="text-xl font-semibold text-gray-900">
            ShopHub: Modern E-commerce Storefront
          </h3>
          <span class="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            View demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>

        <p class="text-sm text-gray-600 mb-4">
          Product listing, featured collections, and a clean checkout flow designed for
          small retail brands that want a fast, modern storefront.
        </p>

        <div class="mt-auto flex flex-wrap gap-2 text-xs">
          <span class="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">Nuxt 3</span>
          <span class="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">Vue.js</span>
          <span class="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">Tailwind CSS</span>
          <span class="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">Responsive Design</span>
        </div>
      </div>
    </NuxtLink>

    <!-- Restaurant website placeholder -->
    <div
      class="group bg-white rounded-2xl shadow-lg overflow-hidden border border-dashed border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div class="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <!-- Replace placeholder image later -->
        <img
          src="/images/restaurant-hero1.jpg"
          alt="Restaurant website demo placeholder"
          class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

        <div class="relative text-center px-6">
          <span class="inline-flex items-center text-[11px] font-semibold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full mb-3">
            Coming soon
          </span>
          <p class="text-sm text-white/90">
            Local restaurant website with online menu, opening hours, and call-to-order CTA.
          </p>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Restaurant Website Demo
        </h3>
        <p class="text-sm text-gray-600 mb-4">
          Designed for takeaways and restaurants that need a simple, mobile-first web
          presence with an easy-to-update menu.
        </p>
        <div class="mt-auto flex items-center justify-between text-xs text-gray-500">
          <span>Nuxt 3 · Strapi (planned)</span>
          <span class="inline-flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            In progress
          </span>
        </div>
      </div>
    </div>

    <!-- Gym / fitness website placeholder -->
    <div
      class="group bg-white rounded-2xl shadow-lg overflow-hidden border border-dashed border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div class="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
        <img
          src="/images/gym-hero.jpg"
          alt="Gym website demo placeholder"
          class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative text-center px-6">
          <span class="inline-flex items-center text-[11px] font-semibold text-sky-100 bg-sky-500/70 px-3 py-1 rounded-full mb-3">
            Coming soon
          </span>
          <p class="text-sm text-white/90">
            Gym / fitness studio site with timetable, membership options, and trainer profiles.
          </p>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Gym / Fitness Studio Website
        </h3>
        <p class="text-sm text-gray-600 mb-4">
          Focused on clear calls-to-action, membership sign-ups, and mobile-first timetables
          for busy, on-the-go clients.
        </p>
        <div class="mt-auto flex items-center justify-between text-xs text-gray-500">
          <span>Nuxt 3 · CMS (planned)</span>
          <span>Wireframing stage</span>
        </div>
      </div>
    </div>

    <!-- Small business / services placeholder -->
    <div
      class="group bg-white rounded-2xl shadow-lg overflow-hidden border border-dashed border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div class="relative overflow-hidden aspect-[16/9] bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center">
        <img
          src="/images/small-business-hero.jpg"
          alt="Small business website demo placeholder"
          class="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        <div class="relative text-center px-6">
          <span class="inline-flex items-center text-[11px] font-semibold text-indigo-900 bg-indigo-100/90 px-3 py-1 rounded-full mb-3">
            Coming soon
          </span>
          <p class="text-sm text-white/95">
            Clean, single-page service website for trades / local businesses with enquiry form.
          </p>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Small Business Landing Page
        </h3>
        <p class="text-sm text-gray-600 mb-4">
          Lightweight landing page template focused on clarity, trust, and quick contact.
        </p>
        <div class="mt-auto flex items-center justify-between text-xs text-gray-500">
          <span>Nuxt 3 · Static</span>
          <span>Planned template</span>
        </div>
      </div>
    </div>
  </div>
          </section>
        </div>
      </div>
    </section>

    <!-- Rest of projects: professional experience etc. -->
    <div class="max-w-6xl mx-auto">
    <!-- Featured Professional Projects -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 flex items-center">
          <span class="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3 text-sm">PROFESSIONAL</span>
          Enterprise Applications
        </h2>
        
        <div class="space-y-8">
          <!-- Material Management System -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div class="md:flex">
              <div class="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">🏭</div>
                  <h3 class="text-2xl font-bold">Manufacturing System</h3>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800">Material Management Web Application</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">LIVE</span>
                </div>
                <p class="text-gray-600 mb-4">
                  Full-stack Vue.js and C# application that streamlined complex manufacturing operations for a major enterprise client. Reduced process complexity from 50 states to just 6, dramatically improving operator efficiency and reducing errors.
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• State machine logic for process flow control</li>
                    <li>• Real-time data validation and material tracking</li>
                    <li>• Responsive frontend with intuitive operator interface</li>
                    <li>• RESTful API backend with SQL Server integration</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Vue.js</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">C# / .NET Core</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">SQL Server</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">REST API</span>
                </div>
                <div class="text-sm text-gray-500">
                  <strong>Impact:</strong> 88% reduction in process states, improved data traceability, enhanced quality control, reduced support calls
                </div>
              </div>
            </div>
          </div>

          <!-- Real-Time Manufacturing Dashboard -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div class="md:flex">
              <div class="md:w-2/5 bg-gradient-to-br from-green-500 to-teal-600 p-8 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">📊</div>
                  <h3 class="text-2xl font-bold">Real-Time Dashboard</h3>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800">Manufacturing Operations Dashboard</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">LIVE</span>
                </div>
                <p class="text-gray-600 mb-4">
                  JavaScript-based real-time web application using Sencha ExtJS that empowered production operators to resolve issues independently. Significantly reduced IT support requests while improving operational efficiency.
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Real-time data visualization from MES systems</li>
                    <li>• API integration with production databases</li>
                    <li>• Interactive troubleshooting workflows</li>
                    <li>• AGILE development with continuous operator feedback</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">JavaScript</span>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Sencha ExtJS</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">REST APIs</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">MES Integration</span>
                </div>
                <div class="text-sm text-gray-500">
                  <strong>Impact:</strong> Reduced IT support calls, improved operator autonomy, faster issue resolution
                </div>
              </div>
            </div>
          </div>

          <!-- Legacy System Modernization -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div class="md:flex">
              <div class="md:w-2/5 bg-gradient-to-br from-indigo-500 to-blue-600 p-8 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">🐳</div>
                  <h3 class="text-2xl font-bold">Cloud Migration</h3>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800">Application Modernization & Containerization</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">DEPLOYED</span>
                </div>
                <p class="text-gray-600 mb-4">
                  Led migration of multiple legacy C# applications from traditional IIS architecture to modern containerized Kubernetes deployments, improving scalability, reliability, and deployment consistency across environments.
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Containerized applications using Docker</li>
                    <li>• Kubernetes orchestration for production workloads</li>
                    <li>• GitLab CI/CD pipelines with automated testing</li>
                    <li>• Helm charts for environment consistency</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Docker</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Kubernetes</span>
                  <span class="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">GitLab CI/CD</span>
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">Helm</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">YAML</span>
                </div>
                <div class="text-sm text-gray-500">
                  <strong>Impact:</strong> Improved deployment speed, enhanced scalability, reduced downtime
                </div>
              </div>
            </div>
          </div>

          <!-- Quality Verification System -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <div class="md:flex">
              <div class="md:w-2/5 bg-gradient-to-br from-orange-500 to-red-600 p-8 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="text-6xl mb-4">✅</div>
                  <h3 class="text-2xl font-bold">Verification System</h3>
                </div>
              </div>
              <div class="md:w-3/5 p-8">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800">Custom Quality Verification Platform</h3>
                  <span class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">LIVE</span>
                </div>
                <p class="text-gray-600 mb-4">
                  Developed bespoke C# web service applications to address critical quality gaps in manufacturing processes. Enforces material verification standards, improves traceability, and ensures compliance with quality requirements.
                </p>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Real-time material verification and validation</li>
                    <li>• Enhanced data logging for full traceability</li>
                    <li>• Integration with existing manufacturing systems</li>
                    <li>• Automated alerts for non-compliance issues</li>
                  </ul>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">C# / .NET</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Web API</span>
                  <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">SQL Server</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">Entity Framework</span>
                </div>
                <div class="text-sm text-gray-500">
                  <strong>Impact:</strong> Improved quality compliance, enhanced material traceability, reduced errors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Personal/Side Projects -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8 flex items-center">
          <span class="bg-purple-600 text-white px-3 py-1 rounded-lg mr-3 text-sm">PERSONAL</span>
          Side Projects & Experiments
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- E-commerce website demo -->>
           <!-- E-Commerce Store Demo -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-600 h-40 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-5xl mb-2">🛒</div>
                <h3 class="text-xl font-bold">E-Commerce Store</h3>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">ShopHub – E-Commerce Demo</h3>
              <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3 font-semibold">
                TEMPLATE PROJECT
              </span>

              <p class="text-gray-600 mb-4 text-sm">
                A complete e-commerce storefront demo built with Vue, Nuxt, Tailwind and Pinia. 
                Includes product listings, product detail pages, a shopping cart, and checkout — 
                all integrated directly into this portfolio website.
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vue.js</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Nuxt</span>
                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Pinia</span>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tailwind</span>
              </div>

              <NuxtLink
                to="/shop"
                class="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Demo
              </NuxtLink>
            </div>
          </div>



          <!-- GPS Tracking Application -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
            <div class="bg-gradient-to-br from-teal-400 to-teal-600 h-40 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-5xl mb-2">📍</div>
                <h3 class="text-xl font-bold">GPS Tracker</h3>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Player Tracking Application</h3>
              <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3 font-semibold">THESIS PROJECT</span>
              <p class="text-gray-600 mb-4 text-sm">
                Master's thesis project: Java Android application with GPS tracking and database integration. Assessed the validity of low-cost alternatives to professional player tracking technology.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Java</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Android</span>
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">GPS</span>
                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Database</span>
              </div>
            </div>
          </div>

          <!-- IoT Smart Device -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
            <div class="bg-gradient-to-br from-purple-400 to-purple-600 h-40 flex items-center justify-center">
              <div class="text-white text-center">
                <div class="text-5xl mb-2">💊</div>
                <h3 class="text-xl font-bold">IoT Device</h3>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">SMART Medicine Box</h3>
              <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3 font-semibold">FINAL YEAR PROJECT</span>
              <p class="text-gray-600 mb-4 text-sm">
                Microcontroller-based automated alarm system with time-based controls for medication management. Arduino-powered solution demonstrating hardware/software integration skills.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Arduino</span>
                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">C/C++</span>
                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">IoT</span>
                <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Hardware</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Ready to Build Your Project?</h2>
        <p class="text-lg mb-6 max-w-2xl mx-auto opacity-90">
          Whether you need a business website, custom web application, or help modernizing existing systems, I bring the same level of expertise and attention to detail to every project.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block">
            Start a Conversation
          </a>
          <a href="/about" class="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-lg inline-block">
            Learn More About Me
          </a>
        </div>
      </div>

      <!-- Technologies Overview -->
      <div class="mt-16 text-center">
        <h3 class="text-xl font-semibold mb-6 text-gray-700">Technologies Used Across Projects</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Vue.js</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">C# / .NET Core</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">SQL Server</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Docker</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Kubernetes</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">GitLab CI/CD</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">REST APIs</span>
          <span class="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Python</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// SEO 
useHead({
  title: 'Web Development Projects - Portfolio by Ryan McGuire',
  meta: [
    { name: 'description', content: 'View my web development portfolio featuring custom websites, web applications, and e-commerce solutions built for businesses across Ireland.' },
    { property: 'og:title', content: 'Web Development Portfolio - Ryan McGuire' },
    { property: 'og:url', content: 'https://webdesignbyryan.com/projects' },
  ],
  link: [{ rel: 'canonical', href: 'https://webdesignbyryan.com/projects' }]
})

</script>