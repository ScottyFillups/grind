/*
   Delete Node at a given position in a linked list 
   Node is defined as 
   struct Node
   {
   int data;
   struct Node *next;
   }
   */
Node* Delete(Node *head, int position)
{
  if (head == nullptr) {
    return nullptr;
  }
  if (position == 0) {
    Node *newHead = head->next;
    delete head;
    return newHead;
  }
  Node *prev = head;
  for (int i = 0; i < position - 1; i++) {
    prev = prev->next;
  }
  Node *target = prev->next;
  prev->next = prev->next->next;
  delete target;
  return head;
}
