import type { Config } from "drizzle-kit"

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "expo", // <--- very important
  verbose: true,
} satisfies Config
