export default defineEventHandler(() => {
  return {
    hasKey: !!process.env.OPENAI_API_KEY,
    keyStart: process.env.OPENAI_API_KEY?.slice(0, 7) || null,
  }
})
