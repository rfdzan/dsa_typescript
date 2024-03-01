class TreeNode {
  data;
  left;
  right;
  constructor(data: number, left: TreeNode | null, right: TreeNode | null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  getData(): number {
    return this.data;
  }
  getLeft(): TreeNode | null {
    return this.left;
  }
  getRight(): TreeNode | null {
    return this.right;
  }
}
