import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface CheckboxProp {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProp> = function Checkbox({ checked }) {
  return (
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <View style={styles.innerCheckbox} />}
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCheckbox: {
    width: 8,
    height: 8,
    backgroundColor: "white",
  },
  checked: {
    backgroundColor: "blue",
  },
});

export default Checkbox;
