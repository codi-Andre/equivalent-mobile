import { drizzle } from "drizzle-orm/expo-sqlite"
import * as schema from "@/drizzle/schema"
import * as relations from "@/drizzle/relations"
import { useSQLiteContext } from "expo-sqlite"

export function useDatabase() {
  const expoDb = useSQLiteContext()
  const db = drizzle(expoDb, { schema: { ...schema, ...relations } })

  return { db, expoDb }
}
