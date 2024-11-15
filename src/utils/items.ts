type ListItemProp = {
  id: number;
  label: string;
};

function generateItemsArray(count: number): ListItemProp[] {
  return Array.from({ length: count }, (item, index) => ({
    id: index + 1,
    label: `Item ${index + 1}`,
  }));
}

export { ListItemProp, generateItemsArray };
