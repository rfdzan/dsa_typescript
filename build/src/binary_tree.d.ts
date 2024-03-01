declare class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(data: number, left: TreeNode | null, right: TreeNode | null);
    getData(): number;
    getLeft(): TreeNode | null;
    getRight(): TreeNode | null;
}
