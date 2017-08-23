#include <climits>

bool checkBSTHelper(Node *root, int min, int max) {
  if (root == nullptr) return true;
  if (root->data >= max || root->data <= min) return false;
  bool left = checkBSTHelper(root->left, min, root->data);
  bool right = checkBSTHelper(root->right, root->data, max);
  return left && right;
}

bool checkBST(Node *root) {
  return checkBSTHelper(root, INT_MIN, INT_MAX);
}
