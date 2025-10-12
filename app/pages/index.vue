<template>
  <div>
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-24 md:py-32">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Hi, I'm Ryan McGuire</h1>
          <p class="text-2xl md:text-3xl mb-4 font-semibold">Full-Stack Software Developer</p>
          <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            I build modern, reliable web applications that help businesses streamline operations and grow. 
            From responsive websites to custom web solutions—I bring technical expertise and practical problem-solving to every project.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <NuxtLink to="/process" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View The Process
            </NuxtLink>
            <NuxtLink to="/contact" class="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get In Touch
            </NuxtLink>
          </div>
          <p class="text-sm md:text-base opacity-90">
            📍 Based in Co. Mayo, Ireland • Working with businesses locally and remotely
          </p>
        </div>
      </div>
    </section>

    <!-- What I Do Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in building custom web solutions that solve real business problems
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-200">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="font-bold text-xl mb-3">Full-Stack Development</h3>
            <p class="text-gray-700">
              Complete web applications built with Vue.js, C#, Node.js, and modern databases. From concept to deployment, I handle every layer of your solution.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-green-200">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="font-bold text-xl mb-3">Business Websites</h3>
            <p class="text-gray-700">
              Professional, responsive websites that represent your brand and engage your customers. Mobile-friendly, fast, and built to convert.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-purple-200">
            <div class="text-4xl mb-4">🔧</div>
            <h3 class="font-bold text-xl mb-3">Custom Web Applications</h3>
            <p class="text-gray-700">
              Bespoke solutions for unique business needs—dashboards, data management systems, process automation, and more.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern technologies and proven expertise across the full development stack
          </p>
        </div>

        <div class="max-w-5xl mx-auto space-y-8">
          <!-- Frontend -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Frontend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-green-500">
                <div class="text-3xl mb-2">⚡</div>
                <h4 class="font-bold text-lg">Vue.js</h4>
                <p class="text-sm text-gray-600 mt-1">Reactive UIs</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-yellow-500">
                <div class="text-3xl mb-2">📜</div>
                <h4 class="font-bold text-lg">JavaScript</h4>
                <p class="text-sm text-gray-600 mt-1">ES6+ Modern JS</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-orange-500">
                <div class="text-3xl mb-2">🎨</div>
                <h4 class="font-bold text-lg">HTML & CSS</h4>
                <p class="text-sm text-gray-600 mt-1">Responsive Design</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-500">
                <div class="text-3xl mb-2">💨</div>
                <h4 class="font-bold text-lg">Tailwind CSS</h4>
                <p class="text-sm text-gray-600 mt-1">Modern Styling</p>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Backend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-purple-500">
                <div class="text-3xl mb-2">🔷</div>
                <h4 class="font-bold text-lg">C# / .NET</h4>
                <p class="text-sm text-gray-600 mt-1">Enterprise APIs</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-green-600">
                <div class="text-3xl mb-2">🟢</div>
                <h4 class="font-bold text-lg">Node.js</h4>
                <p class="text-sm text-gray-600 mt-1">Server-side JS</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-600">
                <div class="text-3xl mb-2">🐍</div>
                <h4 class="font-bold text-lg">Python</h4>
                <p class="text-sm text-gray-600 mt-1">Scripting & APIs</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-indigo-500">
                <div class="text-3xl mb-2">🔌</div>
                <h4 class="font-bold text-lg">REST APIs</h4>
                <p class="text-sm text-gray-600 mt-1">Web Services</p>
              </div>
            </div>
          </div>

          <!-- Database & Tools -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Database & DevOps</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-700">
                <div class="text-3xl mb-2">🗄️</div>
                <h4 class="font-bold text-lg">SQL Server</h4>
                <p class="text-sm text-gray-600 mt-1">Database Design</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-teal-500">
                <div class="text-3xl mb-2">🐬</div>
                <h4 class="font-bold text-lg">MySQL</h4>
                <p class="text-sm text-gray-600 mt-1">Relational DBs</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-blue-400">
                <div class="text-3xl mb-2">🐳</div>
                <h4 class="font-bold text-lg">Docker</h4>
                <p class="text-sm text-gray-600 mt-1">Containerization</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-l-4 border-orange-600">
                <div class="text-3xl mb-2">🔀</div>
                <h4 class="font-bold text-lg">Git</h4>
                <p class="text-sm text-gray-600 mt-1">Version Control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Me Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            More than just a developer—a reliable technical partner for your business
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎓</div>
            <h3 class="font-bold text-lg mb-2">Proven Expertise</h3>
            <p class="text-gray-600 text-sm">Master's degree in Software Engineering with years of enterprise development experience</p>
          </div>

          <div class="text-center p-6">
            <div class="text-5xl mb-4">💬</div>
            <h3 class="font-bold text-lg mb-2">Clear Communication</h3>
            <p class="text-gray-600 text-sm">No jargon, just honest conversations about your needs and how to achieve them</p>
          </div>

          <div class="text-center p-6">
            <div class="text-5xl mb-4">✨</div>
            <h3 class="font-bold text-lg mb-2">Quality Focused</h3>
            <p class="text-gray-600 text-sm">Clean, maintainable code built with best practices and thorough testing</p>
          </div>

          <div class="text-center p-6">
            <div class="text-5xl mb-4">🤝</div>
            <h3 class="font-bold text-lg mb-2">Long-Term Support</h3>
            <p class="text-gray-600 text-sm">I'm here for the journey, not just the launch—ongoing support as you grow</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your ideas to life with a custom web solution
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-block">
            Get In Touch
          </NuxtLink>
          <NuxtLink to="/about" class="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl inline-block">
            Learn More About Me
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Component is ready
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none;
}
</style>