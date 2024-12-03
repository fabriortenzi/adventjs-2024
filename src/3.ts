type Inventory = Array<{ name: string; quantity: number; category: string }>;

type GroupedInventory = {
  [category: string]: {
    [name: string]: number;
  };
};

const groupBy = Object.groupBy as <T, K extends PropertyKey>(
  array: T[],
  keyFn: (item: T) => K
) => Record<K, T[]>;

export function organizeInventory(inventory: Inventory): object {
  let groupedByCateg = groupBy(inventory, ({ category }) => category);

  const result: GroupedInventory = {};

  Object.entries(groupedByCateg).forEach(([category, items]) => {
    const groupedByName = groupBy(items, (item) => item.name);

    result[category] = {};
    Object.entries(groupedByName).forEach(([name, nameItems]) => {
      result[category][name] = nameItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    });
  });

  return result;
}
