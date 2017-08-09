/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.  

   The Node struct is defined as follows:
   struct Node {
   int data;
   Node* left;
   Node* right;
   }
   */


#include <limits.h>

bool isValidBST(Node* root, int min, int max) {
  if (!root) {
    return true;
  }
  else if (root->data > min &&
      root->data < max && 
      isValidBST(root->left, min, root->data) &&
      isValidBST(root->right, root->data, max)) {
    return true;
  } else {
    return false;
  }
}

bool checkBST(Node* root) {
  return isValidBST(root, INT_MIN, INT_MAX);
}
