import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { CheckedProp } from "../../types";

const Checkbox: React.FC<CheckedProp> = function Checkbox({ checked }) {
  return (
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <View style={styles.innerCheckbox} />}
    </View>
  );
};

export default Checkbox;
