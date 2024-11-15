import React, { useCallback } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Checkbox from "./Checkbox";
import { ListItemProp } from "../utils/items";

type SelectListProps = {
  item: ListItemProp;
  onSelect: (id: number) => void;
};

const ListItem: React.FC<SelectListProps> = React.memo(({ item, onSelect }) => {
  const handlePress = useCallback(() => {
    onSelect(item.id);
  }, [item, onSelect]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={1}
    >
      <Text style={styles.label}>{item.label}</Text>
      <Checkbox checked={item.checked} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "black",
  },
});

export default ListItem;
