import { Combobox } from "@/components/combobox"
import { useDatabase } from "@/hooks/use-database"
import { useDrizzleStudio } from "expo-drizzle-studio-plugin"
import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const { db, expoDb } = useDatabase()
  const [foods, setFoods] = useState<
    {
      id: number
      name: string
    }[]
  >([])
  const [food1, setFood1] = useState<string>("")

  useEffect(() => {
    async function getFood() {
      const result = await db.query.foods.findMany({
        columns: {
          categoryId: false,
        },
      })
      setFoods(result)
    }
    getFood()
  }, [])

  useDrizzleStudio(expoDb)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 8,
      }}
    >
      <Combobox side="bottom" list={foods} value={food1} setValue={setFood1} />
    </SafeAreaView>
  )
}
