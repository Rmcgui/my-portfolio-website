<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold mb-4">My Projects</h1>
    <p class="text-gray-600 mb-12">A collection of my recent work and side projects</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div class="bg-gray-200 h-48 flex items-center justify-center">
          <span class="text-gray-500">Project Image</span>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {{ tech }}
            </span>
          </div>
          <div class="flex space-x-4">
            <a :href="project.github" target="_blank" class="text-blue-600 hover:text-blue-800">GitHub</a>
            <a :href="project.demo" target="_blank" class="text-blue-600 hover:text-blue-800">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo1.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Real-time collaborative task manager with team features.',
    technologies: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo2.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts.',
    technologies: ['JavaScript', 'API', 'CSS'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo3.com'
  }
])
</script>