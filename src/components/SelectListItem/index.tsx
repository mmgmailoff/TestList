import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import Checkbox from "../Checkbox";
import { SelectListItemProps } from "../../types";
import styles from "./styles";

const SelectListItem: React.FC<SelectListItemProps> = ({
  item,
  onSelect,
  checked,
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={styles.container}
      activeOpacity={1}
    >
      <Text style={styles.label}>{item.label}</Text>
      <Checkbox checked={checked} />
    </TouchableOpacity>
  );
};

export default memo(
  SelectListItem,
  (prev, next) => prev.checked === next.checked
);
