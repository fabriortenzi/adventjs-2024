export function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  function inOrderDFS(node: typeof tree1, result: string[]) {
    if (node) {
      inOrderDFS(node.left, result);
      result.push(node.value);
      inOrderDFS(node.right, result);
    }

    return result;
  }

  const tree1Traversal = inOrderDFS(tree1, []);
  const tree2Traversal = inOrderDFS(tree2, []);

  const areTreesMirror = tree1Traversal.join() === tree2Traversal.reverse().join();

  return [areTreesMirror, tree1?.value ?? ''];
}
