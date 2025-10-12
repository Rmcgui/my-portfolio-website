<template>
  <div>
    <section class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-4">Hi, I'm Ryan McGuire</h1>
        <p class="text-xl mb-8">Full Stack Software Developer</p>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          I build modern web applications with cutting-edge technologies. 
          Passionate about clean code and user experience.
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink to="/projects" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Get In Touch
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-lg">JavaScript</h3>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-lg">Vue.js</h3>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-lg">Node.js</h3>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-lg">Python</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>