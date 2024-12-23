export function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  if (tree === null) return 0;

  return Math.max(1 + treeHeight(tree.left), 1 + treeHeight(tree.right));
}
