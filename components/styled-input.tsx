import { colors } from "@/constants/colors"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface StyledInputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {}

export function StyledInput({ ...props }: StyledInputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.neutral200,
    borderRadius: 4,
    borderWidth: 2,
    paddingHorizontal: 4,
    width: "100%",
  },
  input: {
    height: 46,
    width: "100%",
  },
})
