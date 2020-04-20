function TreeNode<A>(val: A) {
  return {
    val,
    left: null,
    right: null
  }
}

export var bstFromPreorder = function (preorder: number[]): ReturnType<typeof TreeNode> {
  let root = null;
  let traversePreorder = (node, val) => {
    if (node === null) return TreeNode(val);
    if (val > node.val) node.right = traversePreorder(node.right, val);
    if (val < node.val) node.left = traversePreorder(node.left, val);
    return node;
  }
  for (let node of preorder) {
    root = traversePreorder(root, node)
  }
  return root;
};