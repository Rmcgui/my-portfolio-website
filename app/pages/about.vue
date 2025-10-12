<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold mb-8">About Me</h1>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <div class="h-96 rounded-lg overflow-hidden border-2 border-blue-200 shadow-lg">
          <img 
            src="/images/Portrait.jpg" 
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

    <div class="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-100">
      <h3 class="text-2xl font-bold mb-6">Recent Project Highlights</h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="font-bold text-lg text-blue-700">Material Management Web Application</h4>
          <p class="text-gray-700 mt-2">
            Led development of a full-stack Vue.js and C# application that streamlined complex manufacturing operations, reducing process states from 50 to just 6. Designed intuitive user interfaces and implemented robust backend state management for mission-critical operations.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg text-blue-700">Real-Time Manufacturing Dashboards</h4>
          <p class="text-gray-700 mt-2">
            Built JavaScript-based web applications using Sencha ExtJS that empowered production operators to resolve issues independently, significantly reducing IT support requests and improving operational efficiency.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg text-blue-700">Legacy System Modernization</h4>
          <p class="text-gray-700 mt-2">
            Migrated enterprise applications from traditional server architecture to modern containerized deployments using Docker and Kubernetes, improving scalability, reliability, and deployment consistency.
          </p>
        </div>

        <div>
          <h4 class="font-bold text-lg text-blue-700">Custom Verification Systems</h4>
          <p class="text-gray-700 mt-2">
            Developed bespoke web service applications with C# to enforce quality standards, verify materials, and enhance data traceability—ensuring accuracy and compliance in high-stakes environments.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <h3 class="text-2xl font-bold mb-8">Technologies & Skills</h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold text-lg mb-3 text-gray-800">Frontend Development</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center border border-green-200 font-medium">Vue.js</div>
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 font-medium">JavaScript</div>
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center border border-orange-200 font-medium">HTML5</div>
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center border border-purple-200 font-medium">CSS3</div>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-3 text-gray-800">Backend Development</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg text-center border border-purple-200 font-medium">C# / .NET Core</div>
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center border border-green-200 font-medium">Node.js</div>
            <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg text-center border border-yellow-200 font-medium">Python</div>
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 font-medium">Web APIs</div>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-3 text-gray-800">Database & DevOps</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 font-medium">SQL Server</div>
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg text-center border border-teal-200 font-medium">MySQL</div>
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-200 font-medium">Docker</div>
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg text-center border border-orange-200 font-medium">Git / GitLab</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 bg-gray-50 p-8 rounded-lg">
      <h3 class="text-2xl font-bold mb-4">My Approach</h3>
      <div class="space-y-4 text-gray-700">
        <p>
          <span class="font-semibold text-gray-900">Clear Communication:</span> I take time to understand your business, your challenges, and your vision. No jargon, no assumptions—just straightforward conversations about what you need and how we'll get there.
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
      <p class="text-lg">
        Based in Co. Mayo, Ireland, working with businesses locally and remotely.
      </p>
    </div>
  </div>
</template>