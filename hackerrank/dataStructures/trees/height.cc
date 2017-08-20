/*The tree node has data, left child and right child 
  class Node {
  int data;
  Node* left;
  Node* right;
  };

*/
int height(Node* root) {
  int left = 0;
  int right = 0;

  if (root == nullptr) return -1;
  left = 1 + height(root->left);
  right = 1 + height(root->right);

  return (left > right ? left : right);
}
