import { colors } from "@/constants/colors"
import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Dropdown } from "react-native-element-dropdown"

interface ComboboxProps<T> {
  side?: "top" | "bottom" | "auto"
  value: string
  setValue: (val: string) => void
  list: T[]
  labelField?: string | number
  valueField?: string | number
}

export function Combobox({
  side = "auto",
  list = [],
  setValue,
  value,
  labelField = "name",
  valueField = "id",
}: ComboboxProps<Record<string | number, string | number>>) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Dropdown
      dropdownPosition={side}
      style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      itemContainerStyle={styles.item}
      data={list}
      search
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      placeholder={!isFocus ? "Escolha um alimento..." : "..."}
      searchPlaceholder="Busque um alimento..."
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={(item) => {
        setValue(String(item.id))
        setIsFocus(false)
      }}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: colors.neutral200,
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 4,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 48,
  },
  item: {
    borderBottomColor: colors.neutral200,
    borderBottomWidth: 1,
  },
})
