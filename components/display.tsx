import { colors } from "@/constants/colors"
import { StyleSheet, Text, View } from "react-native"

interface DisplayProps {
  title?: string
}

export function Display({ title }: DisplayProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: title ? colors.neutral950 : colors.neutral500,
        }}
      >
        {title ? title : "Quantidade (g)"}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.neutral200,
    borderRadius: 4,
    borderWidth: 2,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 4,
    width: "100%",
  },
})
