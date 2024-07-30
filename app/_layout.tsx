import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { Suspense, useEffect } from "react"
import "react-native-reanimated"

import { SQLiteProvider } from "expo-sqlite"
import { Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Suspense
        fallback={
          <View>
            <Text>Fallback...</Text>
          </View>
        }
      >
        <SQLiteProvider
          databaseName="taco.db"
          useSuspense
          assetSource={{ assetId: require("@/assets/db/taco.db") }}
        >
          <Stack>
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SQLiteProvider>
      </Suspense>
    </SafeAreaProvider>
  )
}
