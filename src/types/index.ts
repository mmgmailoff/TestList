export type ItemId = string;
export type CheckedProp = { checked: boolean };

export type ListItem = {
  id: ItemId;
  label: string;
};

export type ListItemChecked = ListItem & Partial<CheckedProp>;

export type SelectListProps = {
  items: ListItem[];
  onSelect: (selectedIds: ItemId[]) => void;
};

export type SelectListItemProps = {
  item: ListItem;
  checked?: boolean;
  onSelect?: (id: number) => void;
};
