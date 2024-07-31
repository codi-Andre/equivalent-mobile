import { Image } from "react-native"
import { icons } from "@/constants/icons"

export function Icon({
  name,
  color,
  size = 24,
}: {
  name: keyof typeof icons
  color?: string
  size?: number
}) {
  return (
    <Image
      source={icons[name]}
      resizeMode="cover"
      tintColor={color}
      style={{ height: size, width: size }}
    />
  )
}
