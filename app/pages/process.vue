<template>
  <div class="container mx-auto px-6 py-16">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">How We'll Work Together</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          A transparent, straightforward process designed to make building your website stress-free. 
          Here's exactly what to expect from start to finish.
        </p>
      </div>

      <!-- Process Timeline -->
      <div class="relative">
        <!-- Vertical Timeline Bar (desktop only) -->
        <div class="hidden md:block absolute left-20 top-0 bottom-0 w-0.5 bg-blue-200"></div>

        <div class="space-y-8">
          <!-- Step 1 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                1
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">30-45 min</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-blue-600">Initial Consultation</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                We'll have a casual, no-pressure conversation (phone, video, or coffee) to discuss your business, goals, and what you're looking for in a website.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>What happens:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Discuss what your business does and who you serve</li>
                  <li>Understand your goals (more customers, online bookings, showcase work)</li>
                  <li>Review your budget and timeline</li>
                  <li>Check if you have existing branding or assets</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-blue-50 px-3 md:px-4 py-2 rounded-lg border border-blue-100">
                <p class="text-xs md:text-sm font-semibold text-blue-800">💰 Cost: <span class="font-bold">FREE</span> — no obligation</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                2
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">2-3 days</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-green-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-green-600">Proposal & Quote</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                Within 2-3 days, I'll send you a detailed proposal outlining exactly what I'll build, the timeline, and transparent pricing.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>Your proposal includes:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Clear scope (number of pages, features)</li>
                  <li>Project timeline with milestones</li>
                  <li>Fixed pricing (no hidden fees)</li>
                  <li>Optional maintenance plans</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-green-50 px-3 md:px-4 py-2 rounded-lg border border-green-100">
                <p class="text-xs md:text-sm font-semibold text-green-800">📧 Delivered via email — take your time to review</p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                3
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">1 day</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-purple-600">Agreement & Deposit</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                Once you're happy with the proposal, I'll send a simple contract and invoice. This protects both of us and ensures we're aligned on expectations.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>Payment structure:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>50% deposit to begin work</li>
                  <li>50% on completion before launch</li>
                  <li>Secure payment via bank transfer or invoice</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-purple-50 px-3 md:px-4 py-2 rounded-lg border border-purple-100">
                <p class="text-xs md:text-sm font-semibold text-purple-800">📝 Simple contract covering scope, timeline & ownership</p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                4
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">3-5 days</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-orange-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-orange-600">Design & Planning</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                I'll gather all the materials needed (logo, photos, content) and create a visual mockup showing the layout, colors, and overall style of your website.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>What happens:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Collect your branding assets and content</li>
                  <li>Create design mockup for your approval</li>
                  <li>Finalize site structure and features</li>
                  <li>Get your feedback before development</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-orange-50 px-3 md:px-4 py-2 rounded-lg border border-orange-100">
                <p class="text-xs md:text-sm font-semibold text-orange-800">Your input is crucial at this stage</p>
              </div>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                5
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">2-4 weeks</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-blue-600">Development</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                I'll build your website using modern, professional technologies. You'll receive weekly progress updates and can see the site taking shape in real-time.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>What I build:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Mobile-responsive design (works on all devices)</li>
                  <li>Fast loading speeds and SEO optimization</li>
                  <li>Easy-to-use content management system (if needed)</li>
                  <li>Contact forms, image galleries, etc.</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-blue-50 px-3 md:px-4 py-2 rounded-lg border border-blue-100">
                <p class="text-xs md:text-sm font-semibold text-blue-800">Regular updates so you're never in the dark</p>
              </div>
            </div>
          </div>

          <!-- Step 6 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                6
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">3-5 days</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-teal-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-teal-600">Review & Revisions</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                I'll share a staging link where you can view and test the complete website. You'll have the opportunity for up to 2 rounds of revisions to ensure everything is perfect.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>Your opportunity to:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Test all features and functionality</li>
                  <li>Check on mobile, tablet, and desktop</li>
                  <li>Request changes or adjustments</li>
                  <li>Ensure it meets your expectations</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-teal-50 px-3 md:px-4 py-2 rounded-lg border border-teal-100">
                <p class="text-xs md:text-sm font-semibold text-teal-800">2 revision rounds included</p>
              </div>
            </div>
          </div>

          <!-- Step 7 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                7
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">1-2 days</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-green-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-green-600">Launch & Handover</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                Once you approve the final version and the remaining payment is received, I'll launch your website live. You'll also receive training materials on how to manage your site.
              </p>
              <div class="text-xs md:text-sm text-gray-600 space-y-2">
                <p><strong>Launch includes:</strong></p>
                <ul class="list-disc list-inside space-y-1">
                  <li>Domain connection and SSL security</li>
                  <li>Final testing across all devices</li>
                  <li>Google Analytics setup</li>
                  <li>Training guide (video or document)</li>
                </ul>
              </div>
              <div class="mt-4 inline-block bg-green-50 px-3 md:px-4 py-2 rounded-lg border border-green-100">
                <p class="text-xs md:text-sm font-semibold text-green-800">🚀 Your site is LIVE! Includes 1 week of post-launch support</p>
              </div>
            </div>
          </div>

          <!-- Step 8 -->
          <div class="relative flex gap-4 md:gap-6">
            <div class="flex-shrink-0 flex flex-col items-center">
              <div class="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-lg relative z-10">
                8
              </div>
              <p class="text-xs text-gray-600 font-semibold mt-2">Ongoing</p>
            </div>
            <div class="flex-1 bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-indigo-200">
              <h3 class="text-xl md:text-2xl font-bold mb-3 text-indigo-600">Ongoing Support (Optional)</h3>
              <p class="text-sm md:text-base text-gray-700 mb-3">
                You can choose to manage your site yourself, or I can handle everything for you with an affordable monthly maintenance plan.
              </p>
              <div class="grid md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm mb-4">
                <div class="bg-gray-50 p-3 md:p-4 rounded border border-gray-200">
                  <p class="font-semibold mb-2 text-gray-800">Option A: Self-Managed (Free)</p>
                  <p class="text-xs text-gray-600">You manage content updates using the easy CMS</p>
                </div>
                <div class="bg-indigo-50 p-3 md:p-4 rounded border border-indigo-200">
                  <p class="font-semibold mb-2 text-indigo-800">Option B: Managed Plan (€25-50/month)</p>
                  <ul class="text-xs list-disc list-inside space-y-1 text-gray-600">
                    <li>Domain & hosting renewals</li>
                    <li>Regular backups and updates</li>
                    <li>Content edits (up to 1 hour/month)</li>
                    <li>Priority email support</li>
                  </ul>
                </div>
              </div>
              <div class="inline-block bg-indigo-50 px-3 md:px-4 py-2 rounded-lg border border-indigo-100">
                <p class="text-xs md:text-sm font-semibold text-indigo-800">🤝 Long-term partnership — I'm here to support your growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline Summary -->
      <div class="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 border border-blue-200">
        <h2 class="text-2xl font-bold text-center mb-6">Typical Project Timeline</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div>
            <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">Week 1</div>
            <p class="text-xs md:text-sm text-gray-700">Consultation, Proposal & Design Planning</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-green-600 mb-2">Weeks 2-4</div>
            <p class="text-xs md:text-sm text-gray-700">Development & Regular Progress Updates</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-orange-600 mb-2">Week 5</div>
            <p class="text-xs md:text-sm text-gray-700">Review, Revisions & Final Approval</p>
          </div>
          <div>
            <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Week 6</div>
            <p class="text-xs md:text-sm text-gray-700">Launch & Training</p>
          </div>
        </div>
        <p class="text-center text-xs md:text-sm text-gray-600 mt-6">
          * Timeline varies based on project complexity and how quickly materials are provided
        </p>
      </div>

      <!-- Pricing Overview -->
      <div class="mt-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Investment Range</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-blue-400 transition-all">
            <h3 class="text-xl font-bold mb-2">Basic Website</h3>
            <div class="text-3xl font-bold text-blue-600 mb-4">€500-900</div>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>✓ 3-5 pages</li>
              <li>✓ Mobile responsive</li>
              <li>✓ Contact form</li>
              <li>✓ Basic SEO</li>
              <li>✓ 1 week support</li>
            </ul>
            <p class="text-xs text-gray-500 mt-4">Perfect for: Tradesmen, local services, simple portfolios</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-xl p-6 border-2 border-blue-400 transform md:scale-105">
            <div class="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">MOST POPULAR</div>
            <h3 class="text-xl font-bold mb-2">Business Website</h3>
            <div class="text-3xl font-bold text-blue-600 mb-4">€900-1,500</div>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>✓ 5-10 pages</li>
              <li>✓ CMS for easy updates</li>
              <li>✓ Image galleries</li>
              <li>✓ Blog (optional)</li>
              <li>✓ Advanced SEO</li>
              <li>✓ Analytics setup</li>
            </ul>
            <p class="text-xs text-gray-500 mt-4">Perfect for: Restaurants, gyms, salons, professional services</p>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-purple-400 transition-all">
            <h3 class="text-xl font-bold mb-2">Custom Solution</h3>
            <div class="text-3xl font-bold text-purple-600 mb-4">€1,500+</div>
            <ul class="text-sm text-gray-600 space-y-2">
              <li>✓ E-commerce functionality</li>
              <li>✓ Custom features</li>
              <li>✓ Online bookings</li>
              <li>✓ Member areas</li>
              <li>✓ Database integration</li>
              <li>✓ Priority support</li>
            </ul>
            <p class="text-xs text-gray-500 mt-4">Perfect for: Online stores, booking systems, web applications</p>
          </div>
        </div>
        <p class="text-center text-sm text-gray-600 mt-8">
          All prices are estimates. Final quote provided after consultation.
        </p>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Common Questions</h2>
        <div class="space-y-4">
          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <h3 class="font-bold text-base md:text-lg mb-2">Do I need to provide content and images?</h3>
            <p class="text-gray-700 text-sm">Yes, you'll need to provide your own text, photos, and logo. However, I can recommend stock photo sites and help with content structure if needed.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <h3 class="font-bold text-base md:text-lg mb-2">What if I need changes after the site is live?</h3>
            <p class="text-gray-700 text-sm">Minor changes during the first week are included. After that, you can either update content yourself via the CMS, or sign up for a monthly maintenance plan where I handle updates for you.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <h3 class="font-bold text-base md:text-lg mb-2">Will I own the website?</h3>
            <p class="text-gray-700 text-sm">Yes! Once final payment is made, you own all the content and files. I retain the right to showcase the project in my portfolio unless you prefer otherwise.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <h3 class="font-bold text-base md:text-lg mb-2">Do you offer payment plans?</h3>
            <p class="text-gray-700 text-sm">Yes, I'm flexible. The standard structure is 50% upfront and 50% on completion, but we can discuss alternatives that work for your budget.</p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200">
            <h3 class="font-bold text-base md:text-lg mb-2">What happens if I'm not happy with the design?</h3>
            <p class="text-gray-700 text-sm">Your satisfaction is important to me. You'll see mockups before development begins, and you get 2 rounds of revisions. I work collaboratively to ensure you're happy with the result.</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-12 text-center text-white">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-base md:text-lg mb-6 opacity-90">
          Let's have a free consultation to discuss your project—no obligation, just an honest conversation about what you need.
        </p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block text-sm md:text-base">
          Book Your Free Consultation
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component is ready
</script>