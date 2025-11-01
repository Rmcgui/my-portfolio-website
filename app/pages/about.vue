<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold mb-8">About Me</h1>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <div class="h-96 rounded-lg overflow-hidden border-2 border-blue-200 shadow-lg">
          <img 
            src="/images/ryan-profile.jpg" 
            alt="Ryan McGuire - Software Developer"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Full-Stack Developer & Digital Solutions Specialist</h2>
        <p class="text-gray-700 mb-4">
          I'm Ryan, a software engineer from Co. Mayo with a passion for building modern, efficient web applications that solve real business problems. With a Master's in Software Engineering and years of hands-on experience developing enterprise-grade systems, I bring technical expertise and practical problem-solving to every project.
        </p>
        <p class="text-gray-700 mb-4">
          My background spans full-stack development in manufacturing, pharmaceuticals, and retail IT systems—industries where reliability, data accuracy, and user experience are critical. I've built everything from real-time manufacturing dashboards to automated verification systems, and I love translating complex requirements into clean, maintainable solutions.
        </p>
        <p class="text-gray-700 mb-4">
          Now, I'm bringing that same level of craftsmanship to small businesses. Whether you need a responsive business website, a custom web application, or help modernizing your digital presence, I'll work closely with you to deliver solutions that are both technically sound and aligned with your goals.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <h3 class="text-2xl font-bold mb-6">What I Bring to Your Project</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 class="text-xl font-bold mb-3 text-blue-600">Full-Stack Expertise</h4>
          <p class="text-gray-700">
            I build complete web solutions from frontend to backend. Whether it's a Vue.js interactive interface, a C# API, or a database-driven application, I handle every layer with confidence and best practices.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 class="text-xl font-bold mb-3 text-blue-600">Business-Focused Development</h4>
          <p class="text-gray-700">
            I don't just write code—I solve problems. My experience working directly with stakeholders across manufacturing and IT means I understand business needs, gather requirements effectively, and deliver solutions that work in the real world.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 class="text-xl font-bold mb-3 text-blue-600">Modern, Maintainable Code</h4>
          <p class="text-gray-700">
            I write clean, well-structured code using current best practices. Your website or application will be built to last, easy to update, and scalable as your business grows.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 class="text-xl font-bold mb-3 text-blue-600">End-to-End Ownership</h4>
          <p class="text-gray-700">
            From initial consultation through deployment and beyond, I'm with you every step of the way. I handle version control, testing, deployment pipelines, and ongoing support—no need to coordinate multiple vendors.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <h3 class="text-2xl font-bold mb-8">Technologies & Skills</h3>
      <p class="text-lg text-gray-600 max-w-2xl mb-8">
        Modern technologies and proven expertise across the full development stack
      </p>
      
      <div class="space-y-8">
        <!-- Frontend -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-800">Frontend Development</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-green-500">
              <div class="text-3xl mb-2">⚡</div>
              <h5 class="font-bold text-lg">Vue.js</h5>
              <p class="text-sm text-gray-600 mt-1">Reactive UIs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-yellow-500">
              <div class="text-3xl mb-2">📜</div>
              <h5 class="font-bold text-lg">JavaScript</h5>
              <p class="text-sm text-gray-600 mt-1">ES6+ Modern JS</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-orange-500">
              <div class="text-3xl mb-2">🎨</div>
              <h5 class="font-bold text-lg">HTML & CSS</h5>
              <p class="text-sm text-gray-600 mt-1">Responsive Design</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-500">
              <div class="text-3xl mb-2">💨</div>
              <h5 class="font-bold text-lg">Tailwind CSS</h5>
              <p class="text-sm text-gray-600 mt-1">Modern Styling</p>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-800">Backend Development</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-purple-500">
              <div class="text-3xl mb-2">🔷</div>
              <h5 class="font-bold text-lg">C# / .NET</h5>
              <p class="text-sm text-gray-600 mt-1">Enterprise APIs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-green-600">
              <div class="text-3xl mb-2">🟢</div>
              <h5 class="font-bold text-lg">Node.js</h5>
              <p class="text-sm text-gray-600 mt-1">Server-side JS</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-600">
              <div class="text-3xl mb-2">🐍</div>
              <h5 class="font-bold text-lg">Python</h5>
              <p class="text-sm text-gray-600 mt-1">Scripting & APIs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-indigo-500">
              <div class="text-3xl mb-2">🔌</div>
              <h5 class="font-bold text-lg">REST APIs</h5>
              <p class="text-sm text-gray-600 mt-1">Web Services</p>
            </div>
          </div>
        </div>

        <!-- Database & Tools -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-gray-800">Database & DevOps</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-700">
              <div class="text-3xl mb-2">🗄️</div>
              <h5 class="font-bold text-lg">SQL Server</h5>
              <p class="text-sm text-gray-600 mt-1">Database Design</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-teal-500">
              <div class="text-3xl mb-2">🐬</div>
              <h5 class="font-bold text-lg">MySQL</h5>
              <p class="text-sm text-gray-600 mt-1">Relational DBs</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-400">
              <div class="text-3xl mb-2">🐳</div>
              <h5 class="font-bold text-lg">Docker</h5>
              <p class="text-sm text-gray-600 mt-1">Containerization</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-orange-600">
              <div class="text-3xl mb-2">🔀</div>
              <h5 class="font-bold text-lg">Git</h5>
              <p class="text-sm text-gray-600 mt-1">Version Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 bg-gray-50 p-8 rounded-lg">
      <h3 class="text-2xl font-bold mb-4">My Approach</h3>
      <div class="space-y-4 text-gray-700">
        <p>
          <span class="font-semibold text-gray-900">Clear Communication:</span> I take time to understand your business, your challenges, and your vision. No assumptions—just straightforward conversations about what you need and how we'll get there.
        </p>
        <p>
          <span class="font-semibold text-gray-900">Quality First:</span> I'm committed to delivering work I'm proud of. That means thorough testing, clean code, responsive design, and attention to details that make the difference between "okay" and exceptional.
        </p>
        <p>
          <span class="font-semibold text-gray-900">Long-Term Partnership:</span> I'm not just here to hand off a project and disappear. I want to build relationships and be a reliable technical partner as your business evolves.
        </p>
      </div>
    </div>

    <div class="mt-16">
      <h3 class="text-2xl font-bold mb-4">Background & Education</h3>
      <div class="space-y-6">
        <div>
          <h4 class="font-bold text-lg">Master of Science in Software Engineering</h4>
          <p class="text-gray-600">National University of Ireland, Galway | First Class Honours</p>
          <p class="text-gray-700 mt-2">
            Specialized in database technologies and advanced software engineering practices. Thesis work involved building a Java Android application with real-time GPS tracking and database integration.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-lg">Bachelor of Engineering in Electronic and Computer Engineering</h4>
          <p class="text-gray-600">University of Limerick | Second Class Honours</p>
          <p class="text-gray-700 mt-2">
            Foundation in both hardware and software systems, with final year project focused on microcontroller-based automation systems.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16 text-center bg-blue-600 text-white p-12 rounded-lg">
      <h3 class="text-3xl font-bold mb-4">Let's Build Something Great</h3>
      <p class="text-xl mb-6">
        Whether you're looking to establish your online presence, modernize an existing system, or build a custom web application, I'd love to hear about your project.
      </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block">
            Get In Touch
          </NuxtLink>
        </div>
    </div>
  </div>
</template>

<script setup>
// Page-specific SEO optimization
useHead({
  title: 'About Ryan McGuire - Professional Web Developer in Mayo, Ireland',
  meta: [
    { 
      name: 'description', 
      content: 'Meet Ryan McGuire, a full-stack web developer based in County Mayo, Ireland. Specializing in Vue.js, Nuxt.js, C#, and custom web applications for Irish businesses.' 
    },
    { 
      name: 'keywords', 
      content: 'Ryan McGuire, web developer Mayo, software engineer Ballina, Vue.js specialist Ireland, about web developer' 
    },
    // Open Graph
    { property: 'og:title', content: 'About Ryan McGuire - Web Developer Mayo' },
    { property: 'og:description', content: 'Full-stack web developer in County Mayo specializing in modern web applications and business websites.' },
    { property: 'og:url', content: 'https://webdesignbyryan.com/about' },
    // Twitter
    { name: 'twitter:title', content: 'About Ryan McGuire - Web Developer' },
    { name: 'twitter:description', content: 'Full-stack web developer in County Mayo, Ireland' },
  ],
  link: [
    { rel: 'canonical', href: 'https://webdesignbyryan.netlify.app/about' }
  ]
})
</script>

