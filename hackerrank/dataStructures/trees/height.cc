

/*The tree node has data, left child and right child 
class Node {
    int data;
    Node* left;
    Node* right;
};

*/
    int heightHelper (Node *root, int height) {
        if (root == nullptr) return height;
        int left = heightHelper(root->left, height + 1);
        int right = heightHelper(root->right, height + 1);
        return (left > right ? left : right);
    }
    int height(Node* root) {
        // a null will be counted, so we take n - 1
        return heightHelper(root, 0) - 1;
    }
  
