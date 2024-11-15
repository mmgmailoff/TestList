import React, { useCallback, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ListItemProp, generateItemsArray } from "./utils/items";
import ListItem from "./components/ListItem";

const ITEMS: ListItemProp[] = generateItemsArray(100);

type ListItemWithChecked = ListItemProp & { checked: boolean };

const App: React.FC = () => {
  const [items, setItems] = useState<ListItemProp[]>(ITEMS);

  const handleCheckboxSelect = useCallback((id: number) => {
    setItems((prevItems) =>
      prevItems.map((el: ListItemWithChecked) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem onSelect={handleCheckboxSelect} item={item} />
        )}
      />
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
