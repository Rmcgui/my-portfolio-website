import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

function toPages(websitePlan: any) {
  const home = websitePlan?.homepage ?? {}
  const about = websitePlan?.aboutUs ?? {}
  const products = websitePlan?.products ?? {}
  const order = websitePlan?.orderOnline ?? {}
  const customers = websitePlan?.customers ?? {}
  const contact = websitePlan?.contactUs ?? {}

  // IMPORTANT: your editor/preview only supports section.type === 'hero' right now,
  // so we make each page have a hero section so something always renders/edits.
  return [
    {
      id: 'home',
      name: 'Home',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: home.headline ?? 'Welcome',
          body: [home.subheadline, ...(home.features ?? [])].filter(Boolean).join('\n'),
          primaryCtaLabel: home.callToAction ?? 'Get started'
        }
      ]
    },
    {
      id: 'about',
      name: 'About',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: about.title ?? 'About us',
          body: about.content ?? '',
          primaryCtaLabel: 'Learn more'
        }
      ]
    },
    {
      id: 'products',
      name: 'Products',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: products.title ?? 'Products',
          body: [products.description, ...(products.categories ?? [])].filter(Boolean).join('\n'),
          primaryCtaLabel: 'Browse products'
        }
      ]
    },
    {
      id: 'order',
      name: 'Order Online',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: order.title ?? 'Order online',
          body: [order.description, ...(order.features ?? [])].filter(Boolean).join('\n'),
          primaryCtaLabel: order.callToAction ?? 'Start order'
        }
      ]
    },
    {
      id: 'customers',
      name: 'Customers',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: customers.title ?? 'Who we serve',
          body: customers.content ?? '',
          primaryCtaLabel: 'See details'
        }
      ]
    },
    {
      id: 'contact',
      name: 'Contact',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: contact.title ?? 'Contact us',
          body: [
            contact.content,
            contact.phone ? `Phone: ${contact.phone}` : null,
            contact.email ? `Email: ${contact.email}` : null
          ].filter(Boolean).join('\n'),
          primaryCtaLabel: 'Get in touch'
        }
      ]
    }
  ]
}

export default defineEventHandler(async (event) => {
  const { businessProfile } = await readBody(event)

  const systemPrompt = `...`
  const userPrompt = `Business profile:\n${JSON.stringify(businessProfile, null, 2)}\n\nGenerate a website plan JSON.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1-mini',
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ]
  })

  const content = completion.choices[0]?.message?.content
  if (!content) throw new Error('Empty response from OpenAI')

  const parsed = JSON.parse(content)

  // your API currently returns { websitePlan: { ... } } — keep supporting both
  const websitePlan = parsed.websitePlan ?? parsed

  const pages = toPages(websitePlan)

  return {
    id: `plan-${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    pages
  }
})
