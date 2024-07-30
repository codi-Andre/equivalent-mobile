import { useDatabase } from "@/hooks/use-database"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const { db, expoDb } = useDatabase()
  const [categoryList, setCategoryList] = useState<
    {
      id: number
      name: string
    }[]
  >([])

  useEffect(() => {
    async function getCategories() {
      const result = await db.query.categories.findMany()
      setCategoryList(result)
    }
    getCategories()
  }, [])

  useDrizzleStudio(expoDb)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ flex: 1 }}
        data={categoryList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}
