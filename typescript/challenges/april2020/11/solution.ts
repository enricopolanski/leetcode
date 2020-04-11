
interface Node<A> {
  val: A
  left: Node<A> | null
  right: Node<A> | null
}

type TreeNode<A> = Node<A> | null

function isTerminalNode<A>(node: TreeNode<A>): node is null {
  return node == null
}

var diameterOfBinaryTree = function <A>(root: TreeNode<A>): number {
  let numberOfNodes = 1;

  const height = (root: TreeNode<A>) => {
    if (isTerminalNode(root)) {
      return 0;
    }

    let left = height(root.left);
    let right = height(root.right);

    numberOfNodes = Math.max(numberOfNodes, left + right + 1);

    return Math.max(left, right) + 1;
  };

  height(root);

  return numberOfNodes - 1;
};

export default diameterOfBinaryTree