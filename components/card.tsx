import { StyleSheet, Text, View } from "react-native"
import { colors } from "@/constants/colors"

interface CardProps {
  title?: string
  children: React.ReactNode
  group: string
  kcal: string
}

export function Card({ children, title, group, kcal }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ gap: 16 }}>{children}</View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.footerTitle}>Grupo Alimentar:</Text>
          <Text>{group}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.footerTitle}>Energia:</Text>
          <Text>{kcal}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.neutral200,
    borderRadius: 6,
    borderWidth: 2,
    gap: 16,
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerTitle: {
    color: colors.neutral500,
    fontSize: 12,
  },
})
