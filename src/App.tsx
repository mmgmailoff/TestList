import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { generateItemsArray } from "./utils/items";
import { ListItem, ItemId, ListItemChecked } from "./types";
import SelectList from "./components/SelectList";

const ITEMS: ListItem[] = generateItemsArray(100);

const App: React.FC = () => {
  const [items, setItems] = useState<ListItemChecked[]>(ITEMS);

  const handleOnSelectIds = useCallback((ids: ItemId[]) => {
    console.log("ids", ids);
  }, []);

  return (
    <View style={styles.container}>
      <SelectList items={ITEMS} onSelect={handleOnSelectIds} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
});

export default App;
