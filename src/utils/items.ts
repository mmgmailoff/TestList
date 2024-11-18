import { ListItem } from "../types";

function generateItemsArray(count: number): ListItem[] {
  return Array.from({ length: count }, (item, index) => ({
    id: `${index + 1}`,
    label: `Item ${index + 1}`,
  }));
}

export { generateItemsArray };
