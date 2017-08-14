/*
  Get Nth element from the end in a linked list of integers
  Number of elements in the list will always be greater than N.
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/

#include <queue>
int GetNode(Node *head,int positionFromTail) {
  queue<int> a;
  while (head) {
      a.push(head->data);
      head = head->next;
      if (a.size() > positionFromTail + 1) a.pop();
  }
  return a.front();
}
