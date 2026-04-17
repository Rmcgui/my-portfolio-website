import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function toPages(websitePlan: any) {
  const home = websitePlan?.homepage ?? {};
  const about = websitePlan?.aboutUs ?? {};
  const products = websitePlan?.products ?? {};
  const order = websitePlan?.orderOnline ?? {};
  const customers = websitePlan?.customers ?? {};
  const contact = websitePlan?.contactUs ?? {};

  // Your UI expects:
  // - pages: [{ id, name, sections: [{ id, type:'hero', title, body, primaryCtaLabel }] }]
  // and SectionsEditor/LivePreview currently handle only `type === 'hero'`,
  // so each page gets a hero section to keep everything editable/previewable.
  return [
    {
      id: "home",
      name: "Home",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: home.headline ?? "Welcome",
          body: [home.subheadline, ...(home.features ?? [])].filter(Boolean).join("\n"),
          primaryCtaLabel: home.callToAction ?? "Get started",
        },
      ],
    },
    {
      id: "about",
      name: "About",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: about.title ?? "About us",
          body: about.content ?? "",
          primaryCtaLabel: "Learn more",
        },
      ],
    },
    {
      id: "products",
      name: "Products",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: products.title ?? "Products",
          body: [products.description, ...(products.categories ?? [])].filter(Boolean).join("\n"),
          primaryCtaLabel: "Browse products",
        },
      ],
    },
    {
      id: "order",
      name: "Order Online",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: order.title ?? "Order online",
          body: [order.description, ...(order.features ?? [])].filter(Boolean).join("\n"),
          primaryCtaLabel: order.callToAction ?? "Start order",
        },
      ],
    },
    {
      id: "customers",
      name: "Customers",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: customers.title ?? "Who we serve",
          body: customers.content ?? "",
          primaryCtaLabel: "See details",
        },
      ],
    },
    {
      id: "contact",
      name: "Contact",
      sections: [
        {
          id: "hero",
          type: "hero",
          title: contact.title ?? "Contact us",
          body: [
            contact.content,
            contact.phone ? `Phone: ${contact.phone}` : null,
            contact.email ? `Email: ${contact.email}` : null,
          ]
            .filter(Boolean)
            .join("\n"),
          primaryCtaLabel: "Get in touch",
        },
      ],
    },
  ];
}

export default defineEventHandler(async (event) => {
  try {
    const { businessProfile } = await readBody(event);
    const systemPrompt = `You are generating a website plan for a page/section editor.
    Return ONLY valid JSON with this exact shape:

    {
      "pages": [
        {
          "id": "home",
          "name": "Home",
          "sections": [
            {
              "id": "hero",
              "type": "hero",
              "title": "string",
              "body": "string (2-5 sentences, include bullet-style lines separated by \\n if useful)",
              "primaryCtaLabel": "string"
            }
          ]
        }
      ]
    }

    Rules:
    - Must include exactly these 6 pages (in this order): home, about, products, order, customers, contact
    - Each page MUST contain exactly one hero section
    - body must NEVER be empty
    - Use the businessProfile details to write specific, relevant copy
    - No markdown, no extra keys, no explanations
    `
    // keep your schema prompt here
    const userPrompt = ` Business profile: ${JSON.stringify(businessProfile, null, 2)} Please generate a WebsitePlan JSON.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    console.log("RAW MODEL JSON:", content);


    if (!content) throw new Error("Failed to generate plan: empty response from OpenAI");

    const parsed = JSON.parse(content);
    console.log("PARSED KEYS:", Object.keys(parsed));

    let pages = parsed?.pages;

    // Backward compatibility if you still support the older websitePlan shape:
    if (!pages) {
      const websitePlan = parsed.websitePlan ?? parsed;
      pages = toPages(websitePlan);
    }
    // Hard validation so you *see* failures immediately:
    for (const page of pages ?? []) {
      const body = page?.sections?.[0]?.body ?? "";
      if (!body.trim()) {
        console.error("Empty body for page:", page?.id, { page });
        throw new Error(`Model returned empty body for page "${page?.id}"`);
      }
    }

    return {
      id: `plan-${crypto.randomUUID()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      pages,

      // optional: keep this while developing for debugging
      // websitePlan,
    };
  } catch (err: any) {
    console.error("OpenAI plan-generate error:", err?.message || err);
    throw createError({
      statusCode: 500,
      statusMessage: "OpenAI request failed",
      message: err?.message || "Unknown error from OpenAI",
    });
  }
});
