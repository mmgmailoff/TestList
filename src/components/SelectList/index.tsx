import React, { useCallback, useState } from "react";
import { View, FlatList } from "react-native";
import SelectListItem from "../../components/SelectListItem";
import { SelectListProps, ItemId } from "../../types";
import styles from "./styles";

const SelectList: React.FC<SelectListProps> = ({ items, onSelect }) => {
  const [selectedIds, setSelectedIds] = useState<ItemId[]>([]);

  const handlePress = useCallback(
    (id: ItemId) => {
      setSelectedIds((prevState) => {
        const updateSelected = prevState.includes(id)
          ? prevState.filter((selectedId) => selectedId !== id)
          : [...prevState, id];

        onSelect?.(updateSelected);
        return updateSelected;
      });
    },
    [onSelect]
  );

  const renderItem = ({ item }) => {
    const checked = selectedIds.includes(item.id);

    return (
      <SelectListItem
        item={item}
        onSelect={() => handlePress(item.id)}
        checked={checked}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        extraData={selectedIds}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SelectList;
